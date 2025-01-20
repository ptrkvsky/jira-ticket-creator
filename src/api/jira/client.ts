import axios from 'axios';

const jiraClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JIRA_BASE_URL, // Assurez-vous que cette variable est bien définie
  headers: {
    Authorization: `Basic ${Buffer.from(`${process.env.JIRA_USER_EMAIL}:${process.env.JIRA_API_TOKEN}`).toString(
      'base64'
    )}`,
    'Content-Type': 'application/json'
  }
});

export default jiraClient;
