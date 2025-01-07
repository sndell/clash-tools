'use client';
import { wall } from '@/data/structures';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const EditWallLevels = ({
  townHallLevel,
  onWallStatusChange,
}: {
  townHallLevel: number;
  onWallStatusChange: (isValid: boolean) => void;
}) => {
  const wallAmount = useMemo(() => wall.amount_per_town_hall.find((th) => th.th === townHallLevel)?.amount ?? 0, [townHallLevel]);

  const highestWall = useMemo(() => wall.levels.find((level) => level.town_hall === townHallLevel) ?? wall.levels[0], [townHallLevel]);

  const [wallLevels, setWallLevels] = useState<WallLevels>([]);

  const builtWallsAmount = useMemo(() => wallLevels.reduce((acc, wallLevel) => acc + wallLevel.amount, 0), [wallLevels]);

  const getWallImageByLevel = useCallback((level: number): string => {
    return `/images/wall/Wall${level}.webp`;
  }, []);

  useEffect(() => {
    const availableWallLevels = wall.levels
      .filter((level) => level.town_hall <= townHallLevel)
      .map((level) => ({
        level: level.level,
        amount: 0,
      }));
    setWallLevels(availableWallLevels);
  }, [townHallLevel]);

  const handleWallLevelChange = useCallback(
    (level: number, newAmount: number) => {
      setWallLevels((prev) =>
        prev.map((wallLevel) =>
          wallLevel.level === level ? { ...wallLevel, amount: Math.min(Math.max(0, newAmount), wallAmount) } : wallLevel
        )
      );
    },
    [wallAmount]
  );

  useEffect(() => {
    onWallStatusChange(wallAmount === builtWallsAmount);
  }, [builtWallsAmount, wallAmount, onWallStatusChange]);

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
