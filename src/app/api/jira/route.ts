import { NextResponse } from 'next/server';

import axios from 'axios';

// Configuration de l'instance Axios pour JIRA
const jiraClient = axios.create({
  baseURL: process.env.JIRA_BASE_URL, // Assurez-vous que cette variable est bien définie
  headers: {
    Authorization: `Basic ${Buffer.from(`${process.env.JIRA_USER_EMAIL}:${process.env.JIRA_API_TOKEN}`).toString(
      'base64'
    )}`,
    'Content-Type': 'application/json'
  }
});

export async function GET() {
  try {
    const response = await jiraClient.get('/rest/api/3/myself');

    return NextResponse.json({
      success: true,
      data: response.data
    });
  } catch (error: any) {
    console.error("Erreur lors de l'authentification avec JIRA:", error.response?.data);

    return NextResponse.json(
      {
        success: false,
        error: error.response?.data || 'Erreur inconnue'
      },
      { status: error.response?.status || 500 }
    );
  }
}
