'use client';

import { Modal } from '@/components/ui/Modal';
import { cn } from '@/utils/cn';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { useBuildings } from '../hooks/useBuildings';

export const EditBuildingLevels = ({
  townHallLevel,
  initialBuildingLevels,
  setInitialBuildingLevels,
}: {
  townHallLevel: number;
  initialBuildingLevels: BuildingState[];
  setInitialBuildingLevels: (levels: BuildingState[]) => void;
}) => {
  const { buildings, buildingLevels, updateLevel } = useBuildings(townHallLevel, initialBuildingLevels, setInitialBuildingLevels);
  return (
    <div className="border bg-background-dark border-primary rounded-2.5xl flex-1 overflow-y-auto scrollbar-slim grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid divide-x divide-y divide-primary">
      {buildings.map((building) => {
        const buildingState = buildingLevels.find((b) => b.name === building.name);
        if (!buildingState) return null;

        return (
          <div key={building.name} className="p-3">
            {building.name}
            {buildingState.buildings.map((b, index) => {
              const newNumberAvaiable = building.number_available - building.prev_number_available;
              const isNewBuilding = index >= buildingState.buildings.length - newNumberAvaiable;
              const superchargeLevel = buildingState.superchargeBuildings?.find((scb) => scb.index === b.index)?.level;

              return (
                <Building
                  key={b.index}
                  building={building}
                  level={b.level}
                  superchargeLevel={superchargeLevel || 0}
                  updateBuildingLevel={(level, supercharge) =>
                    updateLevel(
                      building.name,
                      b.index,
                      level,
                      index >= building.prev_number_available,
                      building.levels.length,
                      supercharge
                    )
                  }
                  isNewBuilding={isNewBuilding}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const Building = ({
  building,
  level,
  superchargeLevel,
  updateBuildingLevel,
  isNewBuilding,
}: {
  building: BuildingWithAmount;
  level: number;
  superchargeLevel: number;
  updateBuildingLevel: (level: number, supercharge?: boolean) => void;
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
          className={cn(
            'object-contain border rounded-2.5xl p-2 aspect-square bg-background border-primary',
            level === 0 && 'opacity-50'
          )}
        />
        <div className="flex items-center gap-2">
          <span className="text-sm text-primary-darker">Level</span> {level}{' '}
          <span className="text-sm"> / {building.levels.length}</span>
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
            selectedSuperchargeLevel={superchargeLevel || 0}
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
  selectedSuperchargeLevel,
  building,
}: {
  isNewBuilding: boolean;
  updateBuildingLevel: (level: number, supercharge?: boolean) => void;
  toggleModal: () => void;
  selectedLevel: number;
  selectedSuperchargeLevel: number;
  building: BuildingWithAmount;
}) => {
  const handleLevelClick = (level: number, supercharge?: boolean) => {
    updateBuildingLevel(level, supercharge);
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
            selectedLevel === 0 && selectedSuperchargeLevel === 0 && 'bg-primary-light'
          )}
        >
          <Image
            src={`/images${building.levels[0].image_name}`}
            alt="image"
            width={32}
            height={32}
            className="object-contain opacity-50 aspect-square"
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
            selectedLevel === level.level && selectedSuperchargeLevel === 0 && 'bg-primary-light'
          )}
        >
          <Image src={`/images${level.image_name}`} alt="image" width={32} height={32} className="object-contain aspect-square" />
          <div>Level {level.level}</div>
        </button>
      ))}
      {building.superchargeLevels &&
        building.superchargeLevels.map((level) => (
          <button
            onClick={() => handleLevelClick(level.level, true)}
            key={level.level}
            className={cn(
              'flex items-center justify-center w-full gap-3 py-1 transition-colors hover:bg-primary-light',
              selectedSuperchargeLevel === level.level && 'bg-primary-light'
            )}
          >
            <Image
              src={`/images${level.image_name}`}
              alt="image"
              width={32}
              height={32}
              className="object-contain aspect-square"
            />
            <div className="flex w-14">
              {Array.from({ length: level.level }).map((_, index) => (
                <Image
                  src="/images/misc/supercharge_icon.webp"
                  alt="supercharge"
                  width={20}
                  height={20}
                  key={index}
                  className="aspect-square object-contain"
                />
              ))}
            </div>
          </button>
        ))}
    </Modal>
  );
};
