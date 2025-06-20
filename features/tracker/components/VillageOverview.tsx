"use client";

import { Divider } from "@/components/elements/Divider";
import Image from "next/image";
import { cn } from "@/util/cn";

export const VillageOverview = () => {
  const handleRefresh = () => {
    // TODO: Implement refresh logic
  };

  const handleEdit = () => {
    // TODO: Implement edit logic
  };

  return (
    <article className="grid flex-1 grid-cols-[auto_1fr] overflow-hidden rounded-xl border divide-x bg-primary border-primary divide-primary">
      <TownHallImage />
      <div className="w-full min-w-0">
        <header className="flex divide-x divide-primary">
          <PlayerInfo name="Phuni" id="2LUCULPQ2" />
          <IconButton icon="icon-[solar--refresh-bold]" onClick={handleRefresh} />
          <IconButton icon="icon-[solar--pen-linear]" onClick={handleEdit} />
        </header>

        <Divider direction="horizontal" />
        <CategoryProgress category="Buildings" progress={50} />
      </div>
    </article>
  );
};

const IconButton = ({ icon, onClick, className }: { icon: string; onClick?: () => void; className?: string }) => (
  <button
    onClick={onClick}
    className={cn(
      "grid flex-shrink-0 place-content-center p-3 transition-colors cursor-pointer aspect-square hover:bg-primary-light",
      className
    )}
  >
    <span className={cn(icon, "max-xs:text-xl")} />
  </button>
);

const TownHallImage = () => (
  <div className="grid overflow-hidden flex-shrink-0 place-items-center p-3 h-full aspect-square">
    <Image
      src="/images/th17.webp"
      alt="Town Hall Level 17"
      width={56}
      height={56}
      className="object-contain h-full aspect-square"
    />
  </div>
);

const CategoryProgress = ({ category, progress }: { category: string; progress: number }) => (
  <div className="flex divide-x divide-primary">
    <div className="flex relative flex-1 gap-2 justify-between items-center px-3 min-w-0 text-sm bg-secondary">
      <div className="absolute left-0 h-full bg-primary-light" style={{ width: `${progress}%` }} />
      <span className="relative z-10 truncate">{category}</span>
      <span className="relative z-10 flex-shrink-0 text-primary-dark">{progress}%</span>
    </div>
    <IconButton icon="icon-[solar--alt-arrow-down-linear]" />
  </div>
);

const PlayerInfo = ({ name, id }: { name: string; id: string }) => (
  <div className="flex flex-1 gap-2 items-center px-3 min-w-0">
    <span className="truncate">{name}</span>
    <span className="flex-shrink-0 text-sm text-primary-dark">#{id}</span>
  </div>
);
