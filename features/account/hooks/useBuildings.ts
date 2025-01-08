'use client';

import { allBuildings } from '@/data/structures';
import { useCallback, useEffect, useMemo, useState } from 'react';

// Constants
const EXCLUDED_BUILDINGS = [
  'TH12 Weapon',
  'TH13 Weapon',
  'TH14 Weapon',
  'TH15 Weapon',
  'TH17 Weapon',
  'Barracks',
  'Dark Barracks',
  'Spell Factory',
  'Dark Spell Factory',
  'Workshop',
  'Pet House',
  'Wall',
  'Town Hall',
] as string[];

const SPECIAL_BUILDINGS = {
  'Multi-Archer Tower': 'Archer Tower',
  'Ricochet Cannon': 'Cannon',
} as const;

type SpecialBuildingKey = keyof typeof SPECIAL_BUILDINGS;

const getAvailableAmount = (building: Building, townHallLevel: number) =>
  building.amount_per_town_hall.find((th) => th.th === townHallLevel)?.amount || 0;

const getPreviousAmount = (building: Building, townHallLevel: number) =>
  building.amount_per_town_hall.find((th) => th.th === townHallLevel - 1)?.amount || 0;

const adjustPreviousAmountForSpecialBuildings = (building: Building, prevAmount: number, townHallLevel: number): number => {
  const isSpecialBuilding = building.name === 'Cannon' || building.name === 'Archer Tower';
  if (!isSpecialBuilding) return prevAmount;

  const specialBuildingName = building.name === 'Cannon' ? 'Ricochet Cannon' : 'Multi-Archer Tower';
  const specialBuilding = allBuildings.find((b) => b.name === specialBuildingName);

  if (specialBuilding) {
    const previousSpecialBuildingAmount = getPreviousAmount(specialBuilding, townHallLevel);
    return prevAmount - previousSpecialBuildingAmount * 2;
  }

  return prevAmount;
};

const createInitialBuildingLevels = (buildings: BuildingWithAmount[]): BuildingState[] => {
  return buildings.map(({ name, prev_number_available, number_available }) => ({
    name,
    buildings: Array.from({ length: number_available }, (_, i) => ({
      index: i + 1,
      level: i < prev_number_available ? 1 : 0,
    })),
  }));
};

const handleSpecialBuildingConversion = (
  currentBuildings: { index: number; level: number }[],
  isConvertingToSpecial: boolean
) => {
  const hasUnbuiltBuildings = currentBuildings.some((b) => b.level === 0);

  if (isConvertingToSpecial) {
    const buildingsAfterConversion = currentBuildings.slice(0, -2);
    return buildingsAfterConversion.map((b, i, arr) => ({
      ...b,
      level: i === arr.length - 1 && hasUnbuiltBuildings ? 0 : b.level,
    }));
  } else {
    return [
      ...currentBuildings.map((b) => ({
        ...b,
        level: b.level === 0 ? 1 : b.level,
      })),
      {
        index: currentBuildings.length + 1,
        level: 1,
      },
      {
        index: currentBuildings.length + 2,
        level: hasUnbuiltBuildings ? 0 : 1,
      },
    ];
  }
};

const updateSpecialBuildings = (
  updatedLevels: BuildingState[],
  buildingName: string,
  index: number,
  newLevel: number,
  currentState: BuildingState[]
): BuildingState[] => {
  const linkedBuilding = SPECIAL_BUILDINGS[buildingName as SpecialBuildingKey];
  if (!linkedBuilding) return updatedLevels;

  const buildingIndex = currentState.findIndex((b) => b.name === buildingName);
  const currentLevel = currentState[buildingIndex]?.buildings[index - 1]?.level ?? 0;

  const isConversion = (newLevel > 0 && currentLevel === 0) || (newLevel === 0 && currentLevel > 0);
  if (!isConversion) return updatedLevels;

  const linkedBuildingIndex = updatedLevels.findIndex((b) => b.name === linkedBuilding);
  if (linkedBuildingIndex === -1) return updatedLevels;

  const building = updatedLevels[linkedBuildingIndex];
  const isConvertingToSpecial = newLevel > 0;

  const newBuildings = handleSpecialBuildingConversion([...building.buildings], isConvertingToSpecial);

  updatedLevels[linkedBuildingIndex] = {
    ...building,
    buildings: newBuildings,
  };

  return updatedLevels;
};

export const useBuildings = (
  townHallLevel: number,
  initialBuildingLevels: BuildingState[] = [],
  setInitialBuildingLevels: (levels: BuildingState[]) => void
) => {
  const [buildingLevels, setBuildingLevels] = useState<BuildingState[]>(initialBuildingLevels);

  // Sync building levels with parent state
  useEffect(() => {
    setInitialBuildingLevels(buildingLevels);
  }, [buildingLevels, setInitialBuildingLevels]);

  // Calculate available buildings based on town hall level
  const buildings = useMemo(() => {
    return allBuildings
      .filter(({ name, amount_per_town_hall }) => {
        const amount = getAvailableAmount({ name, amount_per_town_hall } as Building, townHallLevel);
        return amount && !EXCLUDED_BUILDINGS.includes(name);
      })
      .map((building): BuildingWithAmount => {
        const number_available = getAvailableAmount(building, townHallLevel);
        const rawPrevAmount = getPreviousAmount(building, townHallLevel);
        const prev_number_available = adjustPreviousAmountForSpecialBuildings(building, rawPrevAmount, townHallLevel);

        return {
          ...building,
          number_available,
          prev_number_available,
          levels: building.levels.filter((level) => level.town_hall <= townHallLevel),
        };
      });
  }, [townHallLevel]);

  // Initialize building levels when buildings change
  useEffect(() => {
    const levels = createInitialBuildingLevels(buildings);
    setBuildingLevels(levels);
  }, [buildings]);

  // Update building levels
  const updateLevel = useCallback((buildingName: string, index: number, newLevel: number, isNewBuilding: boolean) => {
    setBuildingLevels((prevLevels) => {
      const updatedLevels = [...prevLevels];
      const buildingIndex = updatedLevels.findIndex((b) => b.name === buildingName);

      if (buildingIndex !== -1) {
        updatedLevels[buildingIndex] = {
          ...updatedLevels[buildingIndex],
          buildings: updatedLevels[buildingIndex].buildings.map((b) => (b.index === index ? { ...b, level: newLevel } : b)),
        };
      }

      return isNewBuilding ? updateSpecialBuildings(updatedLevels, buildingName, index, newLevel, prevLevels) : updatedLevels;
    });
  }, []);

  return {
    buildings,
    buildingLevels,
    updateLevel,
  };
};
