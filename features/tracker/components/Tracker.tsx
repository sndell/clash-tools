"use client";

import { useState } from "react";
import { StatisticsOverview } from "./StatisticsOverview";
import { VillageOverview } from "./VillageOverview";
import { CATEGORIES } from "../data";

export const Tracker = ({ name, tag }: { name: string; tag: string }) => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof CATEGORIES>(CATEGORIES.Everything);

  return (
    <div className="grid grid-rows-2 gap-3 px-3 md:grid-cols-2">
      <VillageOverview
        name={name}
        tag={tag}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <StatisticsOverview />
    </div>
  );
};
