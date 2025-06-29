"use client";

import { Divider } from "@/components/elements/Divider";
import Image from "next/image";
import { cn } from "@/util/cn";
import { CATEGORIES } from "../data";
import { RefObject, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "motion/react";
import { useTracker } from "../context/TrackerConctext";

export const VillageOverview = ({ name, tag, townHallLevel }: { name: string; tag: string; townHallLevel: number }) => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const handleRefresh = () => {
    // TODO: Implement refresh logic
  };

  const handleEdit = () => {
    // TODO: Implement edit logic
  };

  return (
    <article className="grid flex-1 rounded-xl border divide-x grid-cols-[auto_1fr] bg-primary border-primary divide-primary">
      <TownHallSection townHallLevel={townHallLevel} />

      <div className="w-full min-w-0">
        <VillageHeader name={name} tag={tag} onRefresh={handleRefresh} onEdit={handleEdit} />
        <Divider direction="horizontal" />
        <CategorySection isCategoryMenuOpen={isCategoryMenuOpen} setIsCategoryMenuOpen={setIsCategoryMenuOpen} />
      </div>
    </article>
  );
};

const TownHallSection = ({ townHallLevel }: { townHallLevel: number }) => (
  <div className="grid overflow-hidden flex-shrink-0 place-items-center p-3 h-full aspect-square">
    <Image
      src={`/images/town-hall/Town_Hall${townHallLevel}.webp`}
      alt="Town Hall Level 17"
      width={56}
      height={56}
      className="object-contain h-full aspect-square"
    />
  </div>
);

const VillageHeader = ({
  name,
  tag,
  onRefresh,
  onEdit,
}: {
  name: string;
  tag: string;
  onRefresh: () => void;
  onEdit: () => void;
}) => (
  <header className="flex divide-x divide-primary">
    <div className="flex flex-1 gap-2 items-center px-3 min-w-0">
      <span className="truncate">{name}</span>
      <span className="flex-shrink-0 text-sm text-primary-dark">#{tag}</span>
    </div>
    <ActionButton icon="icon-[solar--refresh-bold]" onClick={onRefresh} />
    <ActionButton icon="icon-[solar--pen-linear]" onClick={onEdit} />
  </header>
);

const ActionButton = ({
  icon,
  onClick,
  className,
  ref,
}: {
  icon: string;
  onClick?: () => void;
  className?: string;
  ref?: RefObject<HTMLButtonElement>;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "grid flex-shrink-0 place-content-center p-3 transition-colors cursor-pointer aspect-square hover:bg-primary-light",
      className
    )}
    ref={ref}
  >
    <span className={cn(icon, "max-sm:text-xl")} />
  </button>
);

const CategorySection = ({
  isCategoryMenuOpen,
  setIsCategoryMenuOpen,
}: {
  isCategoryMenuOpen: boolean;
  setIsCategoryMenuOpen: (isOpen: boolean) => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { category, setCategory } = useTracker();
  const progress = 50; // TODO: Calculate actual progress

  useOnClickOutside(menuRef as RefObject<HTMLElement>, (event) => {
    if (buttonRef.current?.contains(event.target as Node)) return;
    setIsCategoryMenuOpen(false);
  });

  const handleSelectCategory = (category: keyof typeof CATEGORIES) => {
    setCategory(category);
    setIsCategoryMenuOpen(false);
  };

  return (
    <div className="flex w-full divide-x divide-primary">
      <div className="flex relative flex-1 gap-2 justify-between items-center px-3 min-w-0 text-sm bg-secondary">
        <div className="absolute left-0 h-full bg-primary-light" style={{ width: `${progress}%` }} />
        <span className="relative z-10 truncate">{category}</span>
        <span className="relative z-10 flex-shrink-0 text-primary-dark">{progress}%</span>
        <AnimatePresence>
          {isCategoryMenuOpen && (
            <CategoryDropdown
              ref={menuRef}
              selectedCategory={category}
              onSelectCategory={handleSelectCategory}
              progress={progress}
            />
          )}
        </AnimatePresence>
      </div>
      <ActionButton
        icon="icon-[solar--alt-arrow-down-linear]"
        onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
        ref={buttonRef as RefObject<HTMLButtonElement>}
      />
    </div>
  );
};

const CategoryDropdown = ({
  selectedCategory,
  onSelectCategory,
  progress,
  ref,
}: {
  selectedCategory: keyof typeof CATEGORIES;
  onSelectCategory: (category: keyof typeof CATEGORIES) => void;
  progress: number;
  ref: RefObject<HTMLDivElement | null>;
}) => (
  <motion.div
    ref={ref}
    className="absolute top-11 sm:top-10 right-[-1px] w-[calc(100%+1.5px)] z-30 overflow-hidden bg-secondary border border-secondary rounded-b-xl"
    initial={{ height: 0 }}
    animate={{ height: "auto" }}
    exit={{ height: 0 }}
    transition={{ duration: 0.2 }}
  >
    <div className="flex flex-col divide-y divide-secondary">
      {Object.keys(CATEGORIES).map((category) => (
        <CategoryMenuItem
          key={category}
          category={category as keyof typeof CATEGORIES}
          isSelected={selectedCategory === category}
          onClick={onSelectCategory}
          progress={progress}
        />
      ))}
    </div>
  </motion.div>
);

const CategoryMenuItem = ({
  category,
  isSelected,
  onClick,
  progress,
}: {
  category: keyof typeof CATEGORIES;
  isSelected: boolean;
  onClick: (category: keyof typeof CATEGORIES) => void;
  progress: number;
}) => (
  <div className="relative w-full h-11 cursor-pointer sm:h-10 group" onClick={() => onClick(category)}>
    <div className="absolute left-0 h-full bg-primary-light" style={{ width: `${progress}%` }} />
    <div className="flex absolute top-0 left-0 gap-2 justify-center items-center w-full h-full">
      <span
        className={cn("hidden text-base icon-[solar--arrow-right-linear]", isSelected ? "block" : "group-hover:block")}
      />
      {category}
    </div>
  </div>
);
