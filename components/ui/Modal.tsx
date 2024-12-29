type Props = {
  children: React.ReactNode;
  close: () => void;
  className?: string;
};

export const Modal = ({ children, close, className }: Props) => {
  return (
    <div onMouseDown={close} className="absolute inset-0 grid px-3 place-items-center bg-black/50">
      <div onMouseDown={(e) => e.stopPropagation()} className={className}>
        {children}
      </div>
    </div>
  );
};
