"use client";

import Image from "next/image";
import { useTracker } from "../context/TrackerConctext";
import { StatisticsOverview } from "./StatisticsOverview";
import { VillageOverview } from "./VillageOverview";
import { Divider } from "@/components/elements/Divider";

export const Tracker = ({ name, tag, townHallLevel }: { name: string; tag: string; townHallLevel: number }) => {
  const { displayData } = useTracker();

  return (
    <div>
      <div className="grid gap-3 px-3 max-md:grid-rows-2 md:grid-cols-2">
        <VillageOverview name={name} tag={tag} townHallLevel={townHallLevel} />
        <StatisticsOverview />
      </div>
      <div className="p-3 m-3 rounded-xl border bg-primary border-primary">hello</div>
      <div className="grid grid-cols-1 gap-3 m-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {displayData.map((data) => (
          <div key={data.name} className="flex rounded-xl border bg-secondary border-secondary">
            <div className="grid place-items-center p-3 h-20 sm:h-18 aspect-square">
              <Image
                src={`/images${data.levels[0].image_name}`}
                alt={data.name}
                width={64}
                height={64}
                className="object-contain w-full aspect-square"
              />
            </div>
            <Divider direction="vertical" className="divider-secondary" />
            <div className="flex-1">
              <div className="flex items-center px-3 h-10 text-sm sm:h-9">{data.name}</div>
              <Divider direction="horizontal" className="divider-secondary" />
              <div className="flex items-center px-3 h-10 text-sm sm:h-9">progress</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
