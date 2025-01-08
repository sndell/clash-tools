'use client';

import { useCallback, useEffect, useState } from 'react';
import { wall } from '@/data/structures';
import { useMemo } from 'react';

export const useWalls = (
  townHallLevel: number,
  onWallStatusChange: (isValid: boolean) => void,
  initialWallLevels: WallState[] = [],
  setInitialWallLevels: (levels: WallState[]) => void
) => {
  const wallAmount = useMemo(() => wall.amount_per_town_hall.find((th) => th.th === townHallLevel)?.amount ?? 0, [townHallLevel]);
  const highestWall = useMemo(
    () => wall.levels.find((level) => level.town_hall === townHallLevel) ?? wall.levels[0],
    [townHallLevel]
  );
  const [wallLevels, setWallLevels] = useState<WallState[]>(initialWallLevels);
  const builtWallsAmount = useMemo(() => wallLevels.reduce((acc, wallLevel) => acc + wallLevel.amount, 0), [wallLevels]);

  const getWallImageByLevel = useCallback((level: number): string => {
    return `/images/wall/Wall${level}.webp`;
  }, []);

  useEffect(() => {
    setInitialWallLevels(wallLevels);
  }, [wallLevels, setInitialWallLevels]);

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

  return {
    wallLevels,
    handleWallLevelChange,
    getWallImageByLevel,
    highestWall,
    builtWallsAmount,
    wallAmount,
  };
};
