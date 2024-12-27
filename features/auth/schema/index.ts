import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().toLowerCase().trim().email("Invalid email"),
    password: z.string().trim().min(3, "Password must be at least 3 characters long"),
});

export const RegisterFormSchema = LoginFormSchema.and(
    z.object({
        username: z.string().trim().min(3, "Username must be at least 3 characters long"),
    })
)

export type RegisterFormValues = z.infer<typeof RegisterFormSchema>;
export type LoginFormValues = z.infer<typeof LoginFormSchema>;