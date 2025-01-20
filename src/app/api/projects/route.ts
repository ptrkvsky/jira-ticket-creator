import { NextResponse } from 'next/server';

import { fetchProjects } from '@/api/jira/services';

export async function GET() {
  try {
    const projects = await fetchProjects();

    return NextResponse.json({ success: true, data: projects });
  } catch (error: any) {
    console.error('Erreur lors de la récupération des projets :', error.response?.status, error.response?.data);

    return NextResponse.json(
      {
        success: false,
        message: 'Impossible de récupérer les projets.',
        error: error.response?.data || 'Erreur inconnue'
      },
      { status: error.response?.status || 500 }
    );
  }
}
