"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { CATEGORIES } from "../data";
import { allBuildings } from "@/data/structures";

type DisplayData = {
  name: string;
  instances: number[];
  category: string;
  levels: BuildingLevel[];
  superchargeLevels?: SuperchargeLevel[];
};

type TrackerContextType = {
  category: keyof typeof CATEGORIES;
  setCategory: (category: keyof typeof CATEGORIES) => void;
  displayData: DisplayData[];
};

const EXCLUDED_BUILDINGS = ["TH12 Weapon", "TH13 Weapon", "TH14 Weapon", "TH15 Weapon", "TH17 Weapon", "Town Hall"];

const TrackerContext = createContext<TrackerContextType | undefined>(undefined);

export const TrackerProvider = ({ children, village }: { children: ReactNode; village: FormattedPlayer }) => {
  const [category, setCategory] = useState<keyof typeof CATEGORIES>("Everything");
  const [displayData, setDisplayData] = useState<DisplayData[]>([]);

  const handleSetCategory = (category: keyof typeof CATEGORIES) => setCategory(category);

  useEffect(() => {
    switch (category) {
      case "Buildings":
        const buildings: DisplayData[] = allBuildings
          .map((building) => {
            const buildingData = village.buildings.find((b) => b.name === building.name);
            if (EXCLUDED_BUILDINGS.includes(building.name)) return null;

            if (!buildingData)
              return {
                name: building.name,
                instances: [],
                category: building.category,
                levels: building.levels,
                superchargeLevels: building.superchargeLevels,
              };

            return {
              name: building.name,
              instances: buildingData?.instances.map((instance) => instance.level) ?? [],
              category: building.category,
              levels: building.levels,
              superchargeLevels: building.superchargeLevels,
            };
          })
          .filter((data) => data !== null);
        console.log(buildings);

        setDisplayData(buildings);
        break;
      default:
        setDisplayData([]);
    }
  }, [category]);

  return (
    <TrackerContext.Provider value={{ category, setCategory: handleSetCategory, displayData }}>
      {children}
    </TrackerContext.Provider>
  );
};

export const useTracker = () => {
  const context = useContext(TrackerContext);
  if (context === undefined) throw new Error("useTracker must be used within a TrackerProvider");

  return context;
};
