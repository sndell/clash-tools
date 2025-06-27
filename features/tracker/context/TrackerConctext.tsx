"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { CATEGORIES } from "../data";
import { InferSelectModel } from "drizzle-orm";
import { clashVillage } from "@/lib/db/schema";
import { allBuildings } from "@/data/structures";
import { DbPlayer } from "../types";

type DisplayData = {
  name: string;
  levels: number | { [key: number]: number; imageUrl?: string }[];
  category: string;
};

type TrackerContextType = {
  category: keyof typeof CATEGORIES;
  setCategory: (category: keyof typeof CATEGORIES) => void;
  displayData: DisplayData[];
};

const TrackerContext = createContext<TrackerContextType | undefined>(undefined);

export const TrackerProvider = ({ children, village }: { children: ReactNode; village: DbPlayer }) => {
  const [category, setCategory] = useState<keyof typeof CATEGORIES>("Everything");
  const [displayData, setDisplayData] = useState<DisplayData[]>([]);

  const handleSetCategory = (category: keyof typeof CATEGORIES) => setCategory(category);

  useEffect(() => {
    switch (category) {
      case "Buildings":
        const buildings: DisplayData[] = allBuildings.map((building) => {
          const buildingData = village.buildings.find((b) => b.name === building.name);
          return {
            name: building.name,
            levels: buildingData?.instances.map((instance) => instance.level) ?? [],
            category: building.category,
          };
        });
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
