'use client';

import { pets, labItems, heroes } from '@/data/army';
import { heroHall, laboratory, petHouse } from '@/data/structures';

const getLevelProgression = (levels: ArmyItem['levels']) => {
  return levels.reduce(
    (acc, level) => {
      const cost = level.cost.elixir || level.cost.dark || 0;
      const resourceType = level.cost.elixir ? 'elixir' : 'dark';
      const newResouces = { ...acc.resources, [resourceType]: acc.resources[resourceType] + cost };
      return { ...acc, resources: newResouces, time: acc.time + level.upgrade_time };
    },
    { resources: { elixir: 0, dark: 0 }, time: 0 }
  );
};

const getProgression = (items: (Troop | Spell)[] | Troop[], highestLevel: number, mode: 'lab' | 'pet' | 'hero') => {
  const initial = {
    resources: { elixir: 0, dark: 0 },
    time: 0,
    upgrades: { completed: 0, total: 0 },
  };

  return items.reduce((acc, troop) => {
    const foundItem =
      mode === 'lab'
        ? labItems.find((item) => item.name === troop.name)
        : mode === 'pet'
        ? pets.find((item) => item.name === troop.name)
        : heroes.find((item) => item.name === troop.name);

    if (!foundItem) return acc;

    const startLevel = foundItem.levels[0].level;
    const maxLevel = foundItem.levels[foundItem.levels.length - 1].level;
    const totalPossibleUpgrades = maxLevel - startLevel;

    const completedUpgrades = Math.max(0, troop.level - startLevel);

    const nextTroopLevel = troop.level + 1;

    const filteredLevels = {
      ...foundItem,
      levels: foundItem.levels
        .filter((level) => level.level >= nextTroopLevel)
        .filter((level) => level.upgrade_building_level_required <= highestLevel),
    };

    const newUpgrades = {
      completed: acc.upgrades.completed + completedUpgrades,
      total: acc.upgrades.total + totalPossibleUpgrades,
    };

    if (filteredLevels.levels.length === 0) {
      return { ...acc, upgrades: newUpgrades };
    }

    const { resources, time } = getLevelProgression(filteredLevels.levels);

    return {
      ...acc,
      resources: {
        elixir: resources.elixir + acc.resources.elixir,
        dark: resources.dark + acc.resources.dark,
      },
      time: time + acc.time,
      upgrades: newUpgrades,
    };
  }, initial);
};

export const getArmyProgression = (troops: Troop[], spells: Spell[], heroes: Hero[], townHallLevel: number) => {
  const highestLabLevel = laboratory.levels.find((level) => level.town_hall === townHallLevel)?.level || 0;
  const highestPethouseLevel = petHouse.levels.find((level) => level.town_hall === townHallLevel)?.level || 0;
  const highestHeroHallLevel = heroHall.levels.find((level) => level.town_hall === townHallLevel)?.level || 0;

  const labProgression = getProgression([...troops, ...spells], highestLabLevel, 'lab');
  const petProgression = getProgression(troops, highestPethouseLevel, 'pet');
  const heroProgression = getProgression(heroes, highestHeroHallLevel, 'hero');

  const formatProgress = (progress: typeof labProgression) => ({
    resources: progress.resources,
    time: progress.time,
    upgrades: progress.upgrades,
  });

  return {
    lab: formatProgress(labProgression),
    pets: formatProgress(petProgression),
    heroes: formatProgress(heroProgression),
  };
};
