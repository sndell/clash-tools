import { cn } from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  close: () => void;
  className?: string;
};

export const Modal = ({ children, close, className }: Props) => {
  return (
    <div onMouseDown={close} className="grid absolute inset-0 place-content-center bg-black/50">
      <div onMouseDown={(e) => e.stopPropagation()} className={className}>
        {children}
      </div>
    </div>
  );
};
