import { z } from 'zod';

export const AddFormSchema = z.object({
  tag: z
    .string()
    .trim()
    .min(1, 'Enter a valid tag')
    .refine((value) => value.startsWith('#'), 'Tag must start with #'),
});

export type AddFormValues = z.infer<typeof AddFormSchema>;
