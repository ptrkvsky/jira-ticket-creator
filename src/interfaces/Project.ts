import { z } from 'zod';

export const ProjectSchema = z.object({
  id: z.string(),
  key: z.string(),
  name: z.string(),
  avatarUrls: z.object({
    '48x48': z.string(),
    '24x24': z.string(),
    '16x16': z.string(),
    '32x32': z.string()
  }),
  entityId: z.string().optional(),
  isPrivate: z.boolean(),
  projectTypeKey: z.string(),
  properties: z.record(z.unknown()),
  simplified: z.boolean(),
  style: z.string().optional(),
  uuid: z.string().optional()
});

export const ProjectsSchema = z.array(ProjectSchema);

export type IFormProject = z.infer<typeof ProjectSchema>;
