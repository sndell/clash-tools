import { townHall } from '@/data/structures';

export const getTownHallImage = (level: number) => {
  const townHallLevel = townHall.levels.find((th) => th.level === level);
  return `/images${townHallLevel?.image_name}`;
};
