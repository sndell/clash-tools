'use client';

import { allBuildings } from '@/data/structures';
import { useCallback, useEffect, useMemo } from 'react';
import { useState } from 'react';

type Action = 'add' | 'remove';
type Building = (typeof allBuildings)[number];
type BuildingWithAmount = Building & {
  number_available: number;
  prev_number_available: number;
  levels: Building['levels'];
};

const EXCLUDED_BUILDINGS = [
  'Inferno Artillery',
  'Giga Tesla',
  'Barracks',
  'Dark Barracks',
  'Spell Factory',
  'Dark Spell Factory',
  'Workshop',
  'Pet House',
  'Wall',
  'Town Hall',
];

const SPECIAL_BUILDINGS = {
  'Multi-Archer Tower': 'Archer Tower',
  'Ricochet Cannon': 'Cannon',
} as const;

export const useBuildings = (townHallLevel: number) => {
  const [buildingLevels, setBuildingLevels] = useState<BuildingLevel>([]);

  const buildings = useMemo(() => {
    return allBuildings
      .filter(({ name, amount_per_town_hall }) => {
        const buildingLevel = amount_per_town_hall.find((th) => th.th === townHallLevel);
        return buildingLevel?.amount && !EXCLUDED_BUILDINGS.includes(name);
      })
      .map((building): BuildingWithAmount => {
        const number_available = building.amount_per_town_hall.find((th) => th.th === townHallLevel)?.amount || 0;

        let prev_number_available = building.amount_per_town_hall.find((th) => th.th === townHallLevel - 1)?.amount || 0;

        if (building.name === 'Cannon' || building.name === 'Archer Tower') {
          const mergedBuildingName = building.name === 'Cannon' ? 'Ricochet Cannon' : 'Multi-Archer Tower';
          const mergedBuilding = allBuildings.find((b) => b.name === mergedBuildingName);

          if (mergedBuilding) {
            const prevMergedAmount = mergedBuilding.amount_per_town_hall.find((th) => th.th === townHallLevel - 1)?.amount || 0;
            prev_number_available -= prevMergedAmount * 2;
          }
        }

        return {
          ...building,
          number_available,
          prev_number_available,
          levels: building.levels.filter((level) => level.town_hall <= townHallLevel),
        };
      });
  }, [townHallLevel]);

  useEffect(() => {
    const levels = buildings.map(({ name, prev_number_available, number_available }) => ({
      name,
      buildings: Array.from({ length: number_available }, (_, i) => ({
        index: i + 1,
        level: i < prev_number_available ? 1 : 0,
      })),
    }));
    setBuildingLevels(levels);
  }, [buildings]);

  const updateBuildingAmount = useCallback((buildingName: string, action: Action) => {
    setBuildingLevels((prev) => {
      const buildingIndex = prev.findIndex((b) => b.name === buildingName);
      if (buildingIndex === -1) return prev;

      const building = prev[buildingIndex];
      const currentBuildings = [...building.buildings];

      const newBuildings =
        action === 'add'
          ? [
              ...currentBuildings.map((b) => ({ ...b, level: b.level === 0 ? 1 : b.level })),
              { index: currentBuildings.length + 1, level: 1 },
              { index: currentBuildings.length + 2, level: currentBuildings.some((b) => b.level === 0) ? 0 : 1 },
            ]
          : currentBuildings.slice(0, -2).map((b, i, arr) => ({
              ...b,
              level: i === arr.length - 1 && currentBuildings.some((b) => b.level === 0) ? 0 : b.level,
            }));

      return prev.map((b, i) => (i === buildingIndex ? { ...building, buildings: newBuildings } : b));
    });
  }, []);

  const handleMergedBuildings = useCallback(
    (buildingName: string, currentLevel: number, newLevel: number) => {
      const linkedBuilding = SPECIAL_BUILDINGS[buildingName as keyof typeof SPECIAL_BUILDINGS];
      if (!linkedBuilding) return;

      if (newLevel > 0 && currentLevel === 0) {
        updateBuildingAmount(linkedBuilding, 'remove');
      } else if (newLevel === 0 && currentLevel > 0) {
        updateBuildingAmount(linkedBuilding, 'add');
      }
    },
    [updateBuildingAmount]
  );

  const updateLevel = useCallback(
    (buildingName: string, index: number, level: number, isNewBuilding: boolean) => {
      setBuildingLevels((prev) =>
        prev.map((building) => {
          if (building.name !== buildingName) return building;
          if (isNewBuilding) handleMergedBuildings(buildingName, building.buildings[index - 1]?.level, level);
          return {
            ...building,
            buildings: building.buildings.map((b) => (b.index === index ? { ...b, level } : b)),
          };
        })
      );
    },
    [handleMergedBuildings]
  );

  return {
    buildings,
    buildingLevels,
    updateLevel,
  };
};
