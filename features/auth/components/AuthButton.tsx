'use client';
import { useState } from 'react';
import { AuthModal } from './AuthModal';
import { AnimatePresence } from 'motion/react';

export const AuthButton = () => {
  const [isAuthModelOpen, setIsAuthModelOpen] = useState(false);

  const toggleAuthModel = () => {
    setIsAuthModelOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={toggleAuthModel}
        className="px-4 py-2 max-sm:py-2.5 h-full block rounded-full border transition-colors bg-accent border-accent hover:bg-accent"
      >
        Login / Register
      </button>
      <AnimatePresence>{isAuthModelOpen && <AuthModal close={toggleAuthModel} />}</AnimatePresence>
    </>
  );
};
