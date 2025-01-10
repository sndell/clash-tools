import { wall as wallData } from '@/data/structures';

export const getWallProgression = (walls: WallState[], townHallLevel: number) => {
  const initial = {
    resources: { mixed: 0, gold: 0 },
    wallAmount: 0,
    upgrades: { completed: 0, total: 0 },
  };

  const { resources, upgrades } = walls.reduce((acc, wall, index) => {
    if (index === townHallLevel) return acc;

    const wallLevel = wallData.levels.find((level) => level.level === wall.level);
    const nextLevel = wallData.levels.find((level) => level.level === wall.level + 1);
    const townHallWallAmount = wallData.amount_per_town_hall.find((w) => w.th === wallLevel?.town_hall)?.amount || 0;

    const newUpgrades = {
      completed: townHallWallAmount - wall.amount + acc.upgrades.completed,
      total: townHallWallAmount + acc.upgrades.total,
    };

    if (!wall.amount || !nextLevel) return { ...acc, upgrades: newUpgrades };

    const totalWalls = acc.wallAmount + wall.amount;
    const cost = nextLevel.cost.gold || nextLevel.cost.mixed || 0;
    const resourceType = nextLevel.cost.gold ? 'gold' : 'mixed';
    const newResources = { ...acc.resources, [resourceType]: acc.resources[resourceType] + cost * totalWalls };

    return { ...acc, resources: newResources, wallAmount: totalWalls, upgrades: newUpgrades };
  }, initial);

  const progression = (upgrades.completed / upgrades.total) * 100;
  return { resources, progression };
};
