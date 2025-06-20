import { cn } from "@/util/cn";

type Props = {
  direction?: "horizontal" | "vertical";
  className?: string;
};

export const Divider = ({ direction = "horizontal", className }: Props) => {
  const variants = {
    horizontal: "h-[1px] w-full",
    vertical: "h-full w-[1px]",
  };

  return <div className={cn("bg-divider", variants[direction], className)} />;
};
