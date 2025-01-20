'use client';

import { FormControl } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useProjects } from '@/hooks/useProjects';
import { IFormCreateTicket } from '@/schemas/SchemaCreateTicket';

interface SelectProjectProps {
  field: {
    onChange: (value: string) => void;
    value: IFormCreateTicket['project'];
  };
}

export function SelectProject({ field }: Readonly<SelectProjectProps>) {
  const { data: projects, isLoading, isError } = useProjects();

  if (isLoading) return <p>Chargement des value...</p>;
  if (isError) return <p>Erreur lors du chargement des projets.</p>;

  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Veuillez choisir un projet' />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {projects?.map(({ id, key, name }) => (
          <SelectItem key={id} value={key}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
