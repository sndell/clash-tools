"use client";

import { Input } from "@/components/form/Input";
import { LoginFormSchema, LoginFormValues } from "@/features/auth/schema";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  //   const handleRegisterErrors = (error: string) => {
  //     switch (error) {
  //       case 'email-not-found':
  //         setError('email', { message: 'Emailen är inte registrerad' });
  //         break;
  //       case 'incorrect-password':
  //         setError('password', { message: 'Fel lösenord' });
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  const signup = async (email: string, password: string) => {
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: (ctx) => {
          console.log(ctx);
        },
        onSuccess: (ctx) => {
          console.log(ctx);
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(LoginFormSchema) });

  const onSubmit = (data: LoginFormValues) => signup(data.email, data.password);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-3">
      <Input registration={register("email")} error={errors.email} isRequired placeholder="Enter your email" />
      <Input
        registration={register("password")}
        error={errors.password}
        type="password"
        placeholder="Enter your password"
      />
      <button className="grid h-10 py-2 rounded-full place-content-center bg-accent text-secondary border border-accent">
        Login
        {/* {login.isPending ? <span className="icon-[svg-spinners--3-dots-scale] text-3xl" /> : "Login"} */}
      </button>
      <div className="text-sm text-center">
        Glömt ditt lösenord?{" "}
        <button type="button" className="font-medium text-accent hover:underline">
          Återställ
        </button>
      </div>
    </form>
  );
};
