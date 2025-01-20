import jiraClient from '@/api/jira/client';
import { Project, ProjectsSchema } from '@/interfaces/Project';

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await jiraClient.get(`/rest/api/3/project`);

    const projects = ProjectsSchema.parse(response.data);

    return projects;
  } catch (error: any) {
    console.error('Erreur lors de la récupération des projets :', error.response?.status, error.response?.data);
    throw new Error('Impossible de récupérer les projets.');
  }
}
