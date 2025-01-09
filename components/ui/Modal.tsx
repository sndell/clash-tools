import { motion } from 'motion/react';

type Props = {
  children: React.ReactNode;
  close: () => void;
  className?: string;
};

export const Modal = ({ children, close, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onMouseDown={close}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center p-3 overflow-y-scroll scrollbar-slim bg-black/50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.15 }}
        onMouseDown={(e) => e.stopPropagation()}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
