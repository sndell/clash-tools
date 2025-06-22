import { useState, useCallback } from "react";
import { manualBuildings } from "@/data/structures";

type BuildingInstance = {
  level: number;
  isMerged: boolean;
  isNew: boolean;
};

type BuildingData = {
  name: string;
  instances: BuildingInstance[];
  maxLevel: number;
};

const EXTRA_BUILDINGS_BY_TH: Record<number, Record<string, number>> = {
  17: {
    Cannon: 4,
    "Archer Tower": 4,
  },
};

const MERGED_BUILDINGS: Record<string, Record<string, number>> = {
  "Multi-Archer Tower": {
    "Archer Tower": 2,
  },
  "Ricochet Cannon": {
    Cannon: 2,
  },
  "Multi-Gear Tower": {
    "Archer Tower": 1,
    Cannon: 1,
  },
};

export const UpdateBuildingsForm = ({ townHallLevel }: { townHallLevel: number }) => {
  const [buildings, setBuildings] = useState<BuildingData[]>(() => {
    return manualBuildings.map((building) => {
      const currentAmount = building.amount_per_town_hall.find((a) => a.th === townHallLevel)?.amount ?? 0;
      const previousAmount = building.amount_per_town_hall.find((a) => a.th === townHallLevel - 1)?.amount ?? 0;
      const extraAmount = EXTRA_BUILDINGS_BY_TH[townHallLevel]?.[building.name] ?? 0;

      return {
        name: building.name,
        maxLevel: building.levels.filter((l) => l.town_hall <= townHallLevel).length,
        instances: Array.from({ length: currentAmount }, (_, index) => ({
          level: index + 1 + extraAmount > previousAmount ? 0 : 1,
          isMerged: false,
          isNew: index + 1 + extraAmount > previousAmount,
        })),
      };
    });
  });

  const handleMergedBuilding = useCallback(
    (buildingName: string, updatedBuildings: BuildingData[], mode: "add" | "remove") => {
      const buildingsToMerge = MERGED_BUILDINGS[buildingName];
      if (!buildingsToMerge) return;

      Object.entries(buildingsToMerge).forEach(([building, amount]) => {
        const buildingData = updatedBuildings.find((b) => b.name === building);
        if (!buildingData) return;

        let mergedCount = 0;
        for (let i = 0; i < buildingData.instances.length && mergedCount < amount; i++) {
          if (mode === "add" && !buildingData.instances[i].isMerged) {
            buildingData.instances[i].isMerged = true;
            mergedCount++;
          } else if (mode === "remove" && buildingData.instances[i].isMerged) {
            buildingData.instances[i].isMerged = false;
            mergedCount++;
          }
        }
      });

      setBuildings(updatedBuildings);
    },
    []
  );

  const handleUpdateLevel = useCallback(
    (buildingName: string, instanceIndex: number, level: number, isNew: boolean) => {
      const currentLevel = buildings.find((b) => b.name === buildingName)?.instances[instanceIndex].level;
      const updatedBuildings = buildings.map((building) =>
        building.name === buildingName
          ? {
              ...building,
              instances: building.instances.map((instance, idx) =>
                idx === instanceIndex ? { ...instance, level } : instance
              ),
            }
          : building
      );

      const shouldMerge = isNew && buildingName in MERGED_BUILDINGS;
      if (shouldMerge && (level === 0 || currentLevel === 0)) {
        handleMergedBuilding(buildingName, updatedBuildings, level > 0 ? "add" : "remove");
      } else {
        setBuildings(updatedBuildings);
      }
    },
    [buildings, handleMergedBuilding]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {buildings.map((building) => (
        <BuildingCard
          key={building.name}
          building={building}
          onUpdateLevel={(instanceIndex, level, isNew) => handleUpdateLevel(building.name, instanceIndex, level, isNew)}
          maxLevel={building.maxLevel}
        />
      ))}
    </div>
  );
};

const BuildingLevelSelect = ({
  buildingName,
  instance,
  instanceIndex,
  onChange,
}: {
  buildingName: string;
  instance: BuildingInstance;
  instanceIndex: number;
  onChange: (level: number) => void;
}) => {
  const buildingLevels = manualBuildings.find((b) => b.name === buildingName)?.levels ?? [];

  return (
    <div className="flex items-center gap-2">
      <div>
        Building #{instanceIndex + 1} - {instance.level}
      </div>
      <select
        value={instance.level}
        className="bg-primary py-2 px-3 border border-primary rounded-xl"
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {instance.isNew && <option value={0}>0</option>}
        {buildingLevels.map((level) => (
          <option key={level.level} value={level.level}>
            {level.level}
          </option>
        ))}
      </select>
    </div>
  );
};

const BuildingCard = ({
  building,
  onUpdateLevel,
}: {
  building: BuildingData;
  onUpdateLevel: (instanceIndex: number, level: number, isNew: boolean) => void;
  maxLevel: number;
}) => (
  <div className="p-3 bg-secondary border border-secondary rounded-xl">
    <div className="font-medium mb-2">{building.name}</div>
    <div className="space-y-2">
      {building.instances.map(
        (instance, index) =>
          !instance.isMerged && (
            <BuildingLevelSelect
              key={index}
              buildingName={building.name}
              instance={instance}
              instanceIndex={index}
              onChange={(level) => onUpdateLevel(index, level, instance.isNew)}
            />
          )
      )}
    </div>
  </div>
);
