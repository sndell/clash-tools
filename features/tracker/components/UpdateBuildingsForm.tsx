"use client";

import { useState } from "react";
import { manualBuildings } from "@/data/structures";
import Image from "next/image";
import { createPortal } from "react-dom";
import { cn } from "@/util/cn";

type BuildingInstance = {
  level: number;
  isMerged: boolean;
  isNew: boolean;
};

type BuildingData = {
  name: string;
  instances: BuildingInstance[];
  levels: BuildingLevel[];
};

const EXTRA_BUILDINGS_BY_TH: Record<number, Record<string, number>> = {
  17: {
    Cannon: 4,
    "Archer Tower": 4,
  },
};

const MERGED_BUILDINGS: Record<string, Record<string, number>> = {
  "Multi-Archer Tower": { "Archer Tower": 2 },
  "Ricochet Cannon": { Cannon: 2 },
  "Multi-Gear Tower": { "Archer Tower": 1, Cannon: 1 },
};

function updateBuildingLevel(
  buildings: BuildingData[],
  buildingName: string,
  instanceIndex: number,
  level: number
): BuildingData[] {
  return buildings.map((building) =>
    building.name === buildingName
      ? {
          ...building,
          instances: building.instances.map((instance, idx) =>
            idx === instanceIndex ? { ...instance, level } : instance
          ),
        }
      : building
  );
}

function updateMergedStatus(instances: BuildingInstance[], amount: number, mode: "add" | "remove"): BuildingInstance[] {
  let mergedCount = 0;
  return instances.map((instance, i) => {
    if (mergedCount >= amount) return instance;

    if (mode === "add" && !instance.isMerged) {
      mergedCount++;
      return { ...instance, isMerged: true };
    } else if (mode === "remove" && instance.isMerged) {
      mergedCount++;
      return { ...instance, isMerged: false };
    }

    return instance;
  });
}

export const UpdateBuildingsForm = ({ townHallLevel }: { townHallLevel: number }) => {
  const [buildings, setBuildings] = useState<BuildingData[]>(() => initializeBuildings(townHallLevel));

  const handleMergedBuilding = (buildingName: string, updatedBuildings: BuildingData[], mode: "add" | "remove") => {
    const buildingsToMerge = MERGED_BUILDINGS[buildingName];
    if (!buildingsToMerge) return;

    const finalBuildings = updatedBuildings.map((building) => {
      const amountToMerge = buildingsToMerge[building.name];
      if (amountToMerge) {
        return {
          ...building,
          instances: updateMergedStatus(building.instances, amountToMerge, mode),
        };
      }
      return building;
    });

    setBuildings(finalBuildings);
  };

  const updateLevel = (buildingName: string, instanceIndex: number, level: number, isNew: boolean) => {
    const currentLevel = buildings.find((b) => b.name === buildingName)?.instances[instanceIndex].level;
    const updatedBuildings = updateBuildingLevel(buildings, buildingName, instanceIndex, level);

    const shouldMerge = isNew && buildingName in MERGED_BUILDINGS;
    if (shouldMerge && (level === 0 || currentLevel === 0)) {
      handleMergedBuilding(buildingName, updatedBuildings, level > 0 ? "add" : "remove");
    } else {
      setBuildings(updatedBuildings);
    }
  };

  const updateAllLevels = (buildingName: string, level: number) => {
    const building = buildings.find((b) => b.name === buildingName);
    if (!building) return;

    const updatedBuildings = buildings.map((b) =>
      b.name === buildingName
        ? {
            ...b,
            instances: b.instances.map((instance) => ({
              ...instance,
              level,
            })),
          }
        : b
    );

    // Check if this building type can be merged and handle accordingly
    const shouldMerge = buildingName in MERGED_BUILDINGS;
    if (shouldMerge) {
      // Check if any instances are being set to 0 or from 0
      const hasInstancesChangingToZero = building.instances.some(
        (instance) => instance.isNew && instance.level !== 0 && level === 0
      );
      const hasInstancesChangingFromZero = building.instances.some(
        (instance) => instance.isNew && instance.level === 0 && level > 0
      );

      if (hasInstancesChangingToZero) {
        handleMergedBuilding(buildingName, updatedBuildings, "remove");
      } else if (hasInstancesChangingFromZero) {
        handleMergedBuilding(buildingName, updatedBuildings, "add");
      } else {
        setBuildings(updatedBuildings);
      }
    } else {
      setBuildings(updatedBuildings);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {buildings.map((building) => (
        <BuildingCard
          key={building.name}
          building={building}
          onUpdateLevel={(instanceIndex, level, isNew) => updateLevel(building.name, instanceIndex, level, isNew)}
          onUpdateAllLevels={(level) => updateAllLevels(building.name, level)}
        />
      ))}
    </div>
  );
};

const BuildingCard = ({
  building,
  onUpdateLevel,
  onUpdateAllLevels,
}: {
  building: BuildingData;
  onUpdateLevel: (instanceIndex: number, level: number, isNew: boolean) => void;
  onUpdateAllLevels: (level: number) => void;
}) => {
  const [isChangeAllModalOpen, setIsChangeAllModalOpen] = useState(false);

  const handleChangeAllSelect = (level: number) => {
    setIsChangeAllModalOpen(false);
    onUpdateAllLevels(level);
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl border divide-y bg-secondary border-secondary divide-secondary">
        <div className="flex justify-between items-center p-3">
          <div className="font-medium">
            {building.name}{" "}
            <span className="text-sm text-primary-dark">
              {building.instances.filter((instance) => !instance.isMerged).length}
            </span>
          </div>
          {building.instances.filter((instance) => !instance.isMerged).length > 0 && (
            <button
              className="text-sm transition-colors cursor-pointer text-primary-dark hover:text-primary"
              onClick={() => setIsChangeAllModalOpen(true)}
            >
              Change all
            </button>
          )}
        </div>
        {building.instances.map(
          (instance, index) =>
            !instance.isMerged && (
              <BuildingLevelSelect
                key={index}
                buildingName={building.name}
                instance={instance}
                instanceIndex={index}
                levels={building.levels}
                onChange={(level) => onUpdateLevel(index, level, instance.isNew)}
              />
            )
        )}
      </div>

      {isChangeAllModalOpen && (
        <LevelSelectModal
          levels={building.levels}
          isNew={false}
          onClose={() => setIsChangeAllModalOpen(false)}
          onSelect={handleChangeAllSelect}
        />
      )}
    </>
  );
};

const BuildingLevelSelect = ({
  buildingName,
  instance,
  instanceIndex,
  levels,
  onChange,
}: {
  buildingName: string;
  instance: BuildingInstance;
  instanceIndex: number;
  levels: BuildingLevel[];
  onChange: (level: number) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const adjustLevel = (direction: "up" | "down", e: React.MouseEvent) => {
    e.stopPropagation();

    const isAtMaxLevel = instance.level === levels.length;
    const isAtMinLevel = (!instance.isNew && instance.level === 1) || (instance.isNew && instance.level === 0);

    if ((direction === "up" && isAtMaxLevel) || (direction === "down" && isAtMinLevel)) return;

    onChange(instance.level + (direction === "up" ? 1 : -1));
  };

  const currentLevelImage = levels[instance.level > 0 ? instance.level - 1 : 0];

  return (
    <>
      <div
        className="flex justify-between items-center px-3 py-3 w-full transition-colors hover:bg-background"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex gap-3 items-center">
          <div className="flex justify-center items-center p-3 h-16 rounded-xl border bg-background border-secondary aspect-square">
            <Image
              src={`/images${currentLevelImage.image_name}`}
              alt={buildingName}
              width={40}
              height={40}
              className={cn(instance.level === 0 && "opacity-35")}
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="text-sm text-primary-dark">Level</div>
            <div>
              {instance.level} <span className="text-sm">/ {levels.length}</span>
            </div>
          </div>
        </div>
        <LevelControls onAdjust={adjustLevel} />
      </div>

      {isModalOpen && (
        <LevelSelectModal
          levels={levels}
          isNew={instance.isNew}
          onClose={() => setIsModalOpen(false)}
          onSelect={onChange}
        />
      )}
    </>
  );
};

const LevelControls = ({ onAdjust }: { onAdjust: (direction: "up" | "down", e: React.MouseEvent) => void }) => (
  <div className="flex overflow-hidden rounded-xl border divide-x bg-background divide-primary border-primary">
    <button
      className="flex justify-center items-center p-3 transition-colors hover:bg-primary"
      onClick={(e) => onAdjust("down", e)}
    >
      <span className="icon-[solar--arrow-down-bold]" />
    </button>
    <button
      className="flex justify-center items-center p-3 transition-colors hover:bg-primary"
      onClick={(e) => onAdjust("up", e)}
    >
      <span className="icon-[solar--arrow-up-bold]" />
    </button>
  </div>
);

const LevelSelectModal = ({
  levels,
  isNew,
  onClose,
  onSelect,
}: {
  levels: BuildingLevel[];
  isNew: boolean;
  onClose: () => void;
  onSelect: (level: number) => void;
}) => {
  const handleSelect = (level: number) => {
    onClose();
    onSelect(level);
  };

  return createPortal(
    <div
      className="flex fixed inset-0 z-50 flex-col justify-center items-center px-3 py-3 bg-black/50 h-dvh"
      onClick={onClose}
    >
      <div
        className="flex overflow-y-auto flex-col w-80 rounded-xl border divide-y bg-secondary border-secondary divide-secondary"
        onClick={(e) => e.stopPropagation()}
      >
        {isNew && (
          <LevelOption level={0} image={levels[0].image_name} isDisabled={true} onClick={() => handleSelect(0)} />
        )}
        {levels.map((level) => (
          <LevelOption
            key={level.level}
            level={level.level}
            image={level.image_name}
            onClick={() => handleSelect(level.level)}
          />
        ))}
      </div>
    </div>,
    document.body
  );
};

const LevelOption = ({
  level,
  image,
  isDisabled = false,
  onClick,
}: {
  level: number;
  image: string;
  isDisabled?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex gap-3 justify-center items-center py-1 transition-colors hover:bg-background"
  >
    <div>
      <Image
        src={`/images${image}`}
        alt={`Level ${level}`}
        width={40}
        height={40}
        className={cn("aspect-square object-contain", isDisabled && "opacity-50")}
      />
    </div>
    <span className="text-primary-dark">Level</span>
    {level}
  </button>
);

// Helper functions
function initializeBuildings(townHallLevel: number): BuildingData[] {
  const buildings = manualBuildings.map((building) => {
    const currentAmount = building.amount_per_town_hall.find((a) => a.th === townHallLevel)?.amount ?? 0;
    const previousAmount = building.amount_per_town_hall.find((a) => a.th === townHallLevel - 1)?.amount ?? 0;
    const extraAmount = EXTRA_BUILDINGS_BY_TH[townHallLevel]?.[building.name] ?? 0;

    return {
      name: building.name,
      levels: building.levels.filter((l) => l.town_hall <= townHallLevel),
      instances: Array.from({ length: currentAmount }, (_, index) => ({
        level: index + 1 + extraAmount > previousAmount ? 0 : 1,
        isMerged: false,
        isNew: index + 1 + extraAmount > previousAmount,
      })),
    };
  });

  return buildings.filter((b) => b.instances.length > 0);
}
