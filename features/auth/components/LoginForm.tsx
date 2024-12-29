'use client';

import { Input } from '@/components/form/Input';
import { LoginFormSchema, LoginFormValues } from '@/features/auth/schema';
import { authClient } from '@/lib/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(LoginFormSchema) });

  const onSubmit = (data: LoginFormValues) => signin(data.email, data.password);

  const signin = async (email: string, password: string) => {
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onSuccess: () => {
          router.refresh();
        },
        onError: (ctx) => {
          setIsLoading(false);
          if (ctx.error.code === 'INVALID_EMAIL_OR_PASSWORD') {
            setError('password', { message: 'Wrong email or password' });
            setError('email', { message: 'Wrong email or password' });
          }
        },
      }
    );
  };

  return (
    <motion.form
      initial={{ translateX: '32px' }}
      animate={{ translateX: '0' }}
      exit={{ translateX: '32px' }}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-3"
    >
      <Input registration={register('email')} error={errors.email} type="email" placeholder="Enter your email" />
      <Input
        registration={register('password')}
        error={errors.password}
        type="password"
        placeholder="Enter your password"
      />
      <button className="grid place-content-center py-2 max-sm:py-2.5 rounded-full border transition-colors bg-accent border-accent hover:bg-accent-light">
        {isLoading ? <span className="icon-[svg-spinners--3-dots-scale] text-2xl" /> : 'Login'}
      </button>
    </motion.form>
  );
};
