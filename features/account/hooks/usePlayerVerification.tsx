import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AddFormSchema, AddFormValues } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { verifyAccount } from '../actions';

export const usePlayerVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [player, setPlayer] = useState<FormattedPlayer | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<AddFormValues>({
    resolver: zodResolver(AddFormSchema),
    defaultValues: {
      tag: '',
      token: '',
    },
  });

  const verifyPlayer = async (data: AddFormValues) => {
    setIsLoading(true);
    try {
      const result = await verifyAccount(data.tag, data.token);

      if (result.error || !result.data) {
        const errorMessage = 'Invalid API Token or Tag';
        setError('token', { message: errorMessage });
        setError('tag', { message: errorMessage });
        return null;
      }

      setPlayer(result.data);
      return result.data;
    } catch (error) {
      console.error('Error verifying account:', error);
      setError('token', { message: 'Verification failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const clearPlayer = useCallback(() => {
    setPlayer(null);
    reset();
  }, [reset]);

  return {
    isLoading,
    player,
    register,
    handleSubmit,
    errors,
    verifyPlayer,
    clearPlayer,
  };
};
