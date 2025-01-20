import { SchemaCreateTicket } from '@/schemas/SchemaCreateTicket';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

export function useFormCreateTicket() {
  const form = useForm<z.infer<typeof SchemaCreateTicket>>({
    resolver: zodResolver(SchemaCreateTicket),
    defaultValues: {
      project: '' // Initialisation avec une valeur par défaut
    }
  });

  return form;
}
