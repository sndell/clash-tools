"use client";

import { StatisticsOverview } from "./StatisticsOverview";
import { VillageOverview } from "./VillageOverview";

export const Tracker = ({ name, tag }: { name: string; tag: string }) => {
  return (
    <div className="grid grid-rows-2 gap-3 px-3 md:grid-cols-2">
      <VillageOverview name={name} tag={tag} />
      <StatisticsOverview />
    </div>
  );
};
