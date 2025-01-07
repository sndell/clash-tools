'use client';
import { wall } from '@/data/structures';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export const EditWallLevels = ({ townHallLevel }: { townHallLevel: number }) => {
  const wallAmount = useMemo(() => wall.amount_per_town_hall.find((th) => th.th === townHallLevel)?.amount || 0, [townHallLevel]);
  const highestWall = useMemo(() => wall.levels.find((level) => level.town_hall === townHallLevel) || wall.levels[0], [townHallLevel]);
  const [wallLevels, setWallLevels] = useState<WallLevel>([]);

  const getWallImageByLevel = (level: number) => {
    return `/images${wall.levels.find((wallLevel) => wallLevel.level === level)?.image_name || ''}`;
  };

  useEffect(() => {
    const wallLevels = wall.levels
      .filter((level) => level.town_hall <= townHallLevel)
      .map((level) => ({
        level: level.level,
        amount: 0,
      }));
    setWallLevels(wallLevels);
  }, [townHallLevel]);

  const handleWallLevelChange = (level: number, amount: string) => {
    setWallLevels((prev) => prev.map((wallLevel) => (wallLevel.level === level ? { ...wallLevel, amount: parseInt(amount) } : wallLevel)));
  };

  return (
    <div className="mx-auto max-w-96 w-full flex flex-1 flex-col overflow-y-hidden rounded-2.5xl border border-primary">
      <div className="bg-background-dark rounded-2.5xl h-full flex items-center flex-col">
        <div className="border-b border-primary w-full p-3 flex flex-col gap-1 items-center">
          <div className="text-sm text-primary-dark">Walls available</div>
          <div className="flex items-center gap-2 text-xl">
            <Image src={getWallImageByLevel(highestWall.level)} alt="Wall" width={16} height={16} />
            {wallAmount}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto h-full w-full scrollbar-slim py-2">
          {wallLevels.map((wallLevel) => (
            <div key={wallLevel.level} className="flex items-center gap-2 py-1 px-2 justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={getWallImageByLevel(wallLevel.level)}
                  alt="Wall"
                  width={40}
                  height={40}
                  className="aspect-square object-contain"
                />
                <span>Level {wallLevel.level}</span>
              </div>
              <input
                type="number"
                value={wallLevel.amount}
                onChange={(e) => handleWallLevelChange(wallLevel.level, e.target.value)}
                min={0}
                max={wallAmount}
                className="w-16 bg-primary appearance-none rounded-full overflow-hidden outline-none text-center py-1 border border-primary"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
