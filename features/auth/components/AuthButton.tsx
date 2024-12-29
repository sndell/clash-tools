'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AuthModal } from './AuthModal';

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
      {isAuthModelOpen && createPortal(<AuthModal close={toggleAuthModel} />, document.body)}
    </>
  );
};
