import { Project } from '@/interfaces/Project';
import { useQuery } from '@tanstack/react-query';

/**
 * Hook personnalisé pour récupérer la liste des projets depuis l'API.
 * @returns {Object} - Les données des projets, ainsi que les états de chargement et d'erreur.
 */
export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch('/api/projects'); // Appel de l'endpoint local
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des projets.');
      }

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || 'Erreur inconnue.');
      }

      console.log('Projets récupérés :', result);

      return result.data; // Les projets validés par la route API
    }
  });
}
