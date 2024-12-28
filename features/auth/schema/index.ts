import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().toLowerCase().trim().email("Invalid email"),
  password: z.string().trim().min(3, "Must be at least 3 characters"),
});

export const RegisterFormSchema = LoginFormSchema.and(
  z.object({
    username: z
      .string()
      .trim()
      .min(3, "Must be at least 3 characters")
      .max(12, "Must be at most 12 characters")
  })
);

export type RegisterFormValues = z.infer<typeof RegisterFormSchema>;
export type LoginFormValues = z.infer<typeof LoginFormSchema>;
