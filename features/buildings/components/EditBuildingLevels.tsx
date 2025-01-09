'use client';

import { Modal } from '@/components/ui/Modal';
import { cn } from '@/utils/cn';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useState, useCallback } from 'react';
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
          <div key={building.name} className="pb-1.5">
            <div className="p-3 pb-1.5">{building.name}</div>
            {buildingState.buildings.map((b, index) => {
              const newNumberAvailable = building.number_available - building.prev_number_available;
              const isNewBuilding = index >= buildingState.buildings.length - newNumberAvailable;
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
  const toggleModal = useCallback(() => setIsModalOpen((prev) => !prev), []);

  const handleLevelChange = useCallback(
    (direction: 'up' | 'down') => {
      if (superchargeLevel > 0) {
        const maxSuperchargeLevel = building.superchargeLevels?.length || 0;
        if (direction === 'up' && superchargeLevel < maxSuperchargeLevel) {
          updateBuildingLevel(superchargeLevel + 1, true);
        } else if (direction === 'down' && superchargeLevel > 1) {
          updateBuildingLevel(superchargeLevel - 1, true);
        } else if (direction === 'down' && superchargeLevel === 1) {
          updateBuildingLevel(building.levels.length);
        }
        return;
      }

      if (direction === 'up') {
        if (level < building.levels.length) {
          updateBuildingLevel(level + 1);
        } else if (building.superchargeLevels?.length) {
          updateBuildingLevel(1, true);
        }
      } else {
        const minLevel = isNewBuilding ? 0 : 1;
        if (level > minLevel) {
          updateBuildingLevel(level - 1);
        }
      }
    },
    [building.levels.length, building.superchargeLevels?.length, isNewBuilding, level, superchargeLevel, updateBuildingLevel]
  );

  return (
    <>
      <div
        onClick={toggleModal}
        className="flex items-center gap-3 px-3 py-1.5 transition-colors cursor-pointer hover:bg-background"
      >
        <Image
          src={`/images${building.levels[level > 0 ? level - 1 : 0].image_name}`}
          alt="supercharge"
          width={64}
          height={64}
          className={cn(
            'object-contain border rounded-2.5xl p-2 aspect-square bg-background border-primary',
            level === 0 && 'opacity-50'
          )}
        />

        <div className="flex flex-col">
          <div className="text-sm text-primary-darker">{superchargeLevel > 0 ? 'Supercharge' : 'Level'}</div>
          {superchargeLevel > 0 ? (
            <SuperchargeLevelIndicator level={superchargeLevel} />
          ) : (
            <div className="flex items-center gap-1.5">
              {level} <span className="text-sm"> / {building.levels.length}</span>
            </div>
          )}
        </div>

        <div className="flex justify-end flex-1 gap-3">
          <LevelControls onIncrease={() => handleLevelChange('up')} onDecrease={() => handleLevelChange('down')} />
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <BuildingLevelSelect
            isNewBuilding={isNewBuilding}
            updateBuildingLevel={updateBuildingLevel}
            toggleModal={toggleModal}
            selectedLevel={level}
            selectedSuperchargeLevel={superchargeLevel}
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
      className="w-full max-h-full sm:max-w-60 flex flex-col items-center divide-y divide-primary overflow-y-auto scrollbar-slim border rounded-2.5xl border-primary bg-primary"
    >
      {isNewBuilding && (
        <LevelSelectButton
          level={0}
          building={building}
          isSelected={selectedLevel === 0 && selectedSuperchargeLevel === 0}
          onClick={() => handleLevelClick(0)}
          isNewBuilding
        />
      )}

      {building.levels.map((level) => (
        <LevelSelectButton
          key={`level-${level.level}`}
          level={level.level}
          building={building}
          isSelected={selectedLevel === level.level && selectedSuperchargeLevel === 0}
          onClick={() => handleLevelClick(level.level)}
        />
      ))}

      {building.superchargeLevels?.map((level) => (
        <LevelSelectButton
          key={`supercharge-${level.level}`}
          level={level.level}
          building={building}
          isSelected={selectedSuperchargeLevel === level.level}
          onClick={() => handleLevelClick(level.level, true)}
          supercharge
        />
      ))}
    </Modal>
  );
};

const LevelSelectButton = ({
  level,
  building,
  isSelected,
  onClick,
  isNewBuilding,
  supercharge,
}: {
  level: number;
  building: BuildingWithAmount;
  isSelected: boolean;
  onClick: () => void;
  isNewBuilding?: boolean;
  supercharge?: boolean;
}) => (
  <button
    onClick={onClick}
    className={cn(
      'flex items-center justify-center w-full gap-3 py-1 transition-colors hover:bg-primary-light',
      isSelected && 'bg-primary-light'
    )}
  >
    <Image
      src={`/images${
        supercharge ? building.superchargeLevels![level - 1].image_name : building.levels[level > 0 ? level - 1 : 0].image_name
      }`}
      alt="Building"
      width={32}
      height={32}
      className={cn('object-contain aspect-square', isNewBuilding && 'opacity-50')}
    />
    <div className="flex items-center gap-1.5">
      {supercharge ? (
        <SuperchargeLevelIndicator level={level} className="w-14" />
      ) : (
        <>
          <span className="text-sm text-primary-dark">Level</span> {level}
        </>
      )}
    </div>
  </button>
);

const SuperchargeLevelIndicator = ({ level, className }: { level: number; className?: string }) => (
  <div className={cn('flex items-center', className)}>
    {Array.from({ length: level }).map((_, index) => (
      <Image
        key={index}
        src="/images/misc/supercharge_icon.webp"
        alt="supercharge"
        width={20}
        height={20}
        className="object-contain mt-1 aspect-square"
      />
    ))}
  </div>
);

const LevelControls = ({ onIncrease, onDecrease }: { onIncrease: () => void; onDecrease: () => void }) => (
  <div className="flex overflow-hidden border divide-x rounded-full divide-primary bg-primary border-primary">
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDecrease();
      }}
      className="grid p-3 pl-4 transition-colors place-content-center active:hover:bg-primary-light"
    >
      <span className="icon-[solar--arrow-down-linear] max-sm:text-xl" />
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onIncrease();
      }}
      className="grid p-3 pr-4 transition-colors place-content-center active:hover:bg-primary-light"
    >
      <span className="icon-[solar--arrow-up-linear] max-sm:text-xl" />
    </button>
  </div>
);
