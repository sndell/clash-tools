'use client';

import { Modal } from '@/components/ui/Modal';
import { LoginForm } from './LoginForm';
import { useState } from 'react';
import { RegisterForm } from './RegisterForm';
import { AnimatePresence } from 'motion/react';

type Props = {
  close: () => void;
};

export const AuthModal = ({ close }: Props) => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const toggleAuthMode = () => setAuthMode(authMode === 'login' ? 'register' : 'login');

  return (
    <Modal close={close} className="bg-primary border p-3 border-primary rounded-[20px] space-y-3 overflow-hidden">
      <AnimatePresence initial={false}>
        {authMode === 'login' ? (
          <>
            <LoginForm />
            <div className="text-center text-primary-dark">
              No account?{' '}
              <button onClick={toggleAuthMode} className="transition-colors text-accent hover:text-accent-light">
                Register
              </button>
            </div>
          </>
        ) : (
          <>
            <RegisterForm />
            <div className="text-center text-primary-dark">
              Already registered?{' '}
              <button onClick={toggleAuthMode} className="transition-colors text-accent hover:text-accent-light">
                Login
              </button>
            </div>
          </>
        )}
      </AnimatePresence>
    </Modal>
  );
};
