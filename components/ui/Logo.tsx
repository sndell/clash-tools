import { cn } from "@/util/cn";

type Props = {
  className?: string;
};

export const Logo = ({ className }: Props) => (
  <div className={cn("flex gap-2 items-center py-2 text-xl font-bold", className)}>
    <span className="icon-[solar--sledgehammer-bold]" />
    <span>
      Clash<span className="text-accent">Tools</span>
    </span>
  </div>
);
