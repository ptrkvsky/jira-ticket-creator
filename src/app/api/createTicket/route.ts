import { NextResponse } from 'next/server';

import axios from 'axios';

export async function POST(request: Request) {
  const { summary, description, ticketType } = await request.json();

  try {
    // Appel à OpenAI pour générer une description (optionnel)
    const openaiResponse = await fetch(`https://api.openai.com/v1/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: `Crée un ticket JIRA avec les détails suivants : \nType : ${ticketType}\nRésumé : ${summary}\nDescription : ${description}`,
        max_tokens: 150
      })
    });

    const openaiData = await openaiResponse.json();
    const generatedDescription = openaiData.choices?.[0]?.text?.trim() || description;

    // Création du ticket dans JIRA
    const jiraResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_JIRA_BASE_URL}/rest/api/3/issue`,
      {
        fields: {
          project: {
            key: process.env.JIRA_PROJECT_KEY
          },
          summary,
          description: generatedDescription,
          issuetype: {
            name: ticketType || 'Task'
          }
        }
      },
      {
        headers: {
          Authorization:
            'Basic ' + Buffer.from(process.env.JIRA_EMAIL + ':' + process.env.JIRA_API_TOKEN).toString('base64'),
          'Content-Type': 'application/json'
        }
      }
    );

    return NextResponse.json({ ticket: jiraResponse.data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Erreur interne' }, { status: 500 });
  }
}
