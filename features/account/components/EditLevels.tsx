'use client';

import { Modal } from '@/components/ui/Modal';
import { allBuildings } from '@/data/structures';
import { cn } from '@/utils/cn';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import { useState } from 'react';

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

export const EditLevels = ({ townHallLevel }: { townHallLevel: number }) => {
  const [buildingLevels, setBuildingLevels] = useState<BuildingLevel>([]);
  const [buildings, setBuildings] = useState<BuildingWithTownHallAmount[]>([]);

  const initializeBuildings = useCallback(() => {
    const filteredBuildings = allBuildings
      .filter(({ name, amount_per_town_hall }) => {
        const buildingLevel = amount_per_town_hall.find((th) => th.th === townHallLevel);
        return buildingLevel?.amount && !EXCLUDED_BUILDINGS.includes(name);
      })
      .map((building) => {
        let number_available = building.amount_per_town_hall.find((th) => th.th === townHallLevel)?.amount || 0;
        let prev_number_available = building.amount_per_town_hall.find((th) => th.th === townHallLevel - 1)?.amount || 0;

        const mergedBuildingName =
          building.name === 'Cannon' ? 'Ricochet Cannon' : building.name === 'Archer Tower' ? 'Multi-Archer Tower' : null;

        if (mergedBuildingName) {
          const mergedBuilding = allBuildings.find((b) => b.name === mergedBuildingName);
          if (mergedBuilding) {
            const prevMergedBuildingNumberAvailable =
              mergedBuilding.amount_per_town_hall.find((th) => th.th === townHallLevel - 1)?.amount || 0;
            number_available -= prevMergedBuildingNumberAvailable * 2;
            prev_number_available -= prevMergedBuildingNumberAvailable * 2;
          }
        }

        return {
          ...building,
          number_available,
          prev_number_available,
          levels: building.levels.filter((level) => level.town_hall <= townHallLevel),
        };
      });

    setBuildings(filteredBuildings);
    initializeBuildingLevels(filteredBuildings);
  }, [townHallLevel]);

  const initializeBuildingLevels = (buildings: BuildingWithTownHallAmount[]) => {
    const levels = buildings.map(({ name, prev_number_available, number_available }) => ({
      name,
      buildings: Array.from({ length: number_available }, (_, i) => ({
        index: i + 1,
        level: i < prev_number_available ? 1 : 0,
      })),
    }));
    setBuildingLevels(levels);
  };

  useEffect(() => {
    initializeBuildings();
  }, [initializeBuildings]);

  const handleMergedBuildings = useCallback((buildingName: string, currentLevel: number, newLevel: number) => {
    const specialBuildings = {
      'Multi-Archer Tower': 'Archer Tower',
      'Ricochet Cannon': 'Cannon',
    } as const;

    const linkedBuilding = specialBuildings[buildingName as keyof typeof specialBuildings];
    if (!linkedBuilding) return;

    if (newLevel > 0 && currentLevel === 0) updateBuildingAmount(linkedBuilding, 'remove');
    else if (newLevel === 0 && currentLevel > 0) updateBuildingAmount(linkedBuilding, 'add');
  }, []);

  const updateBuildingAmount = useCallback((buildingName: string, action: 'add' | 'remove') => {
    setBuildingLevels((prev) => {
      const buildingIndex = prev.findIndex((b) => b.name === buildingName);
      if (buildingIndex === -1) return prev;

      const prevBuilding = prev[buildingIndex];
      const newBuilding = { ...prevBuilding };
      const buildings = [...newBuilding.buildings];

      if (action === 'add') {
        const newBuildings = [
          { index: buildings.length + 1, level: 1 },
          { index: buildings.length + 2, level: 1 },
        ];
        const level0Buildings = buildings.filter((b) => b.level === 0);
        newBuilding.buildings = [...buildings.map((b) => ({ ...b, level: b.level === 0 ? 1 : b.level })), ...newBuildings];
        if (level0Buildings.length > 0) newBuilding.buildings[newBuilding.buildings.length - 1].level = 0;
      } else {
        newBuilding.buildings = buildings.slice(0, -2);
        const level0Buildings = buildings.filter((b) => b.level === 0);
        if (level0Buildings.length > 0) newBuilding.buildings[newBuilding.buildings.length - 1].level = 0;
      }

      const newState = [...prev];
      newState[buildingIndex] = newBuilding;
      return newState;
    });
  }, []);

  const updateLevel = useCallback(
    (buildingName: string, index: number, level: number, isNewBuilding: boolean) => {
      setBuildingLevels((prev) => {
        const updated = prev.map((building) => {
          if (building.name !== buildingName) return building;

          const currentLevel = building.buildings[index - 1].level;
          if (isNewBuilding) {
            handleMergedBuildings(buildingName, currentLevel, level);
          }

          return {
            ...building,
            buildings: building.buildings.map((b) => (b.index === index ? { ...b, level } : b)),
          };
        });
        return updated;
      });
    },
    [handleMergedBuildings]
  );

  return (
    <div className="border bg-background-dark border-primary rounded-2.5xl flex-1 overflow-y-auto scrollbar-slim grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid divide-x divide-y divide-primary">
      {buildings.map((building) => {
        const buildingState = buildingLevels.find((b) => b.name === building.name);
        if (!buildingState) return null;

        return (
          <div key={building.name} className="p-3">
            {building.name}
            {buildingState.buildings.map((b, index) => (
              <Building
                key={b.index}
                building={building}
                level={b.level}
                updateBuildingLevel={(level) => updateLevel(building.name, b.index, level, index >= building.prev_number_available)}
                isNewBuilding={index >= building.prev_number_available}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

const Building = ({
  building,
  level,
  updateBuildingLevel,
  isNewBuilding,
}: {
  building: BuildingWithTownHallAmount;
  level: number;
  updateBuildingLevel: (level: number) => void;
  isNewBuilding: boolean;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleIsModalOpen = () => setIsModalOpen((prev) => !prev);

  return (
    <>
      <div className="flex items-center gap-3 pt-3">
        <Image
          src={`/images${building.levels[level > 0 ? level - 1 : 0].image_name}`}
          alt={building.name}
          width={64}
          height={64}
          className={cn('object-contain border rounded-2.5xl p-2 aspect-square bg-background border-primary', level === 0 && 'opacity-50')}
        />
        <div className="flex items-center gap-2">
          <span className="text-sm text-primary-darker">Level</span> {level} <span className="text-sm"> / {building.levels.length}</span>
        </div>
        <div className="flex justify-end flex-1">
          <button
            onClick={toggleIsModalOpen}
            className="grid p-3 transition-colors border rounded-full place-items-center bg-primary border-primary hover:bg-primary-light"
          >
            <span className="icon-[solar--pen-linear] max-sm:text-xl" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <BuildingLevelSelect
            isNewBuilding={isNewBuilding}
            updateBuildingLevel={updateBuildingLevel}
            toggleModal={toggleIsModalOpen}
            selectedLevel={level}
            building={building}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const BuildingLevelSelect = ({
  isNewBuilding,
  updateBuildingLevel,
  toggleModal,
  selectedLevel,
  building,
}: {
  isNewBuilding: boolean;
  updateBuildingLevel: (level: number) => void;
  toggleModal: () => void;
  selectedLevel: number;
  building: BuildingWithTownHallAmount;
}) => {
  const handleLevelClick = (level: number) => {
    updateBuildingLevel(level);
    toggleModal();
  };

  return (
    <Modal
      close={toggleModal}
      className="w-full max-h-full sm:max-w-60 flex flex-col items-center divide-y divide-primary overflow-y-auto scrollbar-slim  border rounded-2.5xl border-primary bg-primary"
    >
      {isNewBuilding && (
        <button
          onClick={() => handleLevelClick(0)}
          key={0}
          className={cn(
            'flex items-center justify-center w-full gap-3 py-1 transition-colors hover:bg-primary-light',
            selectedLevel === 0 && 'bg-primary-light'
          )}
        >
          <Image
            src={`/images${building.levels[0].image_name}`}
            alt="image"
            width={32}
            height={32}
            className="object-contain aspect-square opacity-50"
          />
          <div>Level 0</div>
        </button>
      )}
      {building.levels.map((level) => (
        <button
          onClick={() => handleLevelClick(level.level)}
          key={level.level}
          className={cn(
            'flex items-center justify-center w-full gap-3 py-1 transition-colors hover:bg-primary-light',
            selectedLevel === level.level && 'bg-primary-light'
          )}
        >
          <Image src={`/images${level.image_name}`} alt="image" width={32} height={32} className="object-contain aspect-square" />
          <div>Level {level.level}</div>
        </button>
      ))}
    </Modal>
  );
};
