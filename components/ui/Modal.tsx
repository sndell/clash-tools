import { motion } from 'motion/react';

type Props = {
  children: React.ReactNode;
  close: () => void;
  className?: string;
};

export const Modal = ({ children, close, className }: Props) => {
  return (
    <div onMouseDown={close} className="absolute inset-0 z-10 grid px-3 place-items-center bg-black/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.1 }}
        onMouseDown={(e) => e.stopPropagation()}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
