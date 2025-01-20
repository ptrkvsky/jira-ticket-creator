import { z } from 'zod';

export const SchemaCreateTicket = z.object({
  project: z.string({
    required_error: 'Veuillez sélectionner un projet.'
  })
});

export type IFormCreateTicket = z.infer<typeof SchemaCreateTicket>;
