import { z } from 'zod';

export const AddFormSchema = z.object({
  tag: z.string().trim().min(1, 'Enter a valid tag'),
  token: z.string().trim().min(8, 'Enter a valid token'),
});

export type AddFormValues = z.infer<typeof AddFormSchema>;
