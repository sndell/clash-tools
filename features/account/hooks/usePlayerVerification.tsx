import { useState } from 'react';
import { verifyAccount } from '../actions';

export const usePlayerVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [player, setPlayer] = useState<FormattedPlayer | null>(null);

  const verifyPlayer = async (tag: string) => {
    setIsLoading(true);
    try {
      const result = await verifyAccount(tag);
      if (result.error || !result.data) {
        return { error: 'Invalid API Token or Tag' };
      }
      setPlayer(result.data);
      return { data: result.data };
    } catch (error) {
      console.error('Error verifying account:', error);
      return { error: 'Verification failed' };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, player, setPlayer, verifyPlayer };
};
