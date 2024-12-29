'use client';

import { Input } from '@/components/form/Input';
import { RegisterFormSchema, RegisterFormValues } from '@/features/auth/schema';
import { authClient } from '@/lib/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValues>({ resolver: zodResolver(RegisterFormSchema) });

  const onSubmit = (data: RegisterFormValues) => signup(data.email, data.password, data.username);

  const signup = async (email: string, password: string, username: string) => {
    await authClient.signUp.email(
      {
        email,
        password,
        name: username,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          router.refresh();
        },
        onError: (ctx) => {
          console.log(ctx);

          setIsLoading(false);
          if (ctx.error.code === 'USER_ALREADY_EXISTS') {
            setError('email', { message: 'User already exists' });
          }
        },
      }
    );
  };

  return (
    <motion.form
      initial={{ translateX: '-32px' }}
      animate={{ translateX: '0' }}
      exit={{ translateX: '-32px' }}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-3"
    >
      <Input registration={register('username')} error={errors.username} type="text" placeholder="Enter a username" />
      <Input registration={register('email')} error={errors.email} type="email" placeholder="Enter your email" />
      <Input
        registration={register('password')}
        error={errors.password}
        type="password"
        placeholder="Enter a password"
      />
      <button className="grid py-2 transition-colors border rounded-full place-content-center bg-accent border-accent hover:bg-accent-light">
        {isLoading ? <span className="icon-[svg-spinners--3-dots-scale] text-2xl" /> : 'Register'}
      </button>
    </motion.form>
  );
};
