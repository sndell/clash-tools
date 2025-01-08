'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useWalls } from '../hooks/useWalls';

export const EditWallLevels = ({
  townHallLevel,
  onWallStatusChange,
  initialWallLevels,
  setInitialWallLevels,
}: {
  townHallLevel: number;
  onWallStatusChange: (isValid: boolean) => void;
  initialWallLevels: WallState[];
  setInitialWallLevels: (levels: WallState[]) => void;
}) => {
  const { wallLevels, handleWallLevelChange, getWallImageByLevel, highestWall, builtWallsAmount, wallAmount } = useWalls(
    townHallLevel,
    onWallStatusChange,
    initialWallLevels,
    setInitialWallLevels
  );

  return (
    <div className="mx-auto max-w-96 w-full flex flex-1 flex-col overflow-y-hidden rounded-2.5xl border border-primary">
      <div className="bg-background-dark rounded-2.5xl h-full flex items-center flex-col">
        <header className="flex flex-col items-center w-full gap-1 p-3 border-b border-primary">
          <h2 className="text-sm text-primary-dark">Walls built</h2>
          <div className="flex items-center gap-2 text-xl">
            <Image
              src={getWallImageByLevel(highestWall.level)}
              alt={`Level ${highestWall.level} Wall`}
              width={16}
              height={16}
              className="object-contain aspect-square"
            />
            <span aria-label={`${builtWallsAmount} out of ${wallAmount} walls built`}>
              {builtWallsAmount} / {wallAmount}
            </span>
          </div>
        </header>

        <div className="flex-1 w-full h-full py-2 overflow-y-auto scrollbar-slim">
          {wallLevels.map((wallLevel) => (
            <WallItem
              key={wallLevel.level}
              level={wallLevel.level}
              amount={wallLevel.amount}
              maxAmount={wallAmount}
              onWallLevelChange={handleWallLevelChange}
              imagePath={getWallImageByLevel(wallLevel.level)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const WallItem = ({
  level,
  amount,
  maxAmount,
  onWallLevelChange,
  imagePath,
}: {
  level: number;
  amount: number;
  maxAmount: number;
  onWallLevelChange: (level: number, amount: number) => void;
  imagePath: string;
}) => {
  const [placeholderText, setPlaceholderText] = useState<'0' | ''>('0');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const parsedAmount = value === '' ? 0 : parseInt(value, 10);

    if (!isNaN(parsedAmount)) {
      onWallLevelChange(level, parsedAmount);
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 px-2 py-1">
      <div className="flex items-center gap-2">
        <Image src={imagePath} alt={`Wall Level ${level}`} width={40} height={40} className="object-contain aspect-square" />
        <span>Level {level}</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={amount === 0 ? '' : amount}
          onChange={handleChange}
          onFocus={() => setPlaceholderText('')}
          onBlur={() => setPlaceholderText('0')}
          min={0}
          max={maxAmount}
          step={1}
          placeholder={placeholderText}
          aria-label={`Wall level ${level} amount`}
          className="w-16 py-1 overflow-hidden text-center border rounded-full outline-none appearance-none text-primary placeholder:text-primary bg-primary border-primary"
        />
      </div>
    </div>
  );
};
