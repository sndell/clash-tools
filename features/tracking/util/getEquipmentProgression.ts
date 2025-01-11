import {
  barbarianKingEquipment,
  archerQueenEquipment,
  minionPrincessEquipment,
  grandWardenEquipment,
  royalChampionEquipment,
  equipmentCost,
} from '@/data/equipment';
import { blacksmith } from '@/data/structures';

const HERO_EQUIPMENT_MAP = {
  'Barbarian King': barbarianKingEquipment,
  'Archer Queen': archerQueenEquipment,
  'Minion Princess': minionPrincessEquipment,
  'Grand Warden': grandWardenEquipment,
  'Royal Champion': royalChampionEquipment,
} as const;

const getEquipmentForHeroes = (heroNames: string[]): Equipment[] => {
  return heroNames.flatMap((heroName) => HERO_EQUIPMENT_MAP[heroName as keyof typeof HERO_EQUIPMENT_MAP] || []);
};

const sumResources = (a: OreCost, b: OreCost): OreCost => ({
  shiny: a.shiny + b.shiny,
  glowy: a.glowy + b.glowy,
  starry: a.starry + b.starry,
});

export const getEquipmentProgression = (heroEquipment: HeroEquipment[], heros: Hero[], townHallLevel: number) => {
  const maxBlacksmithLevel = blacksmith.levels.reduce((acc, level) => {
    if (level.town_hall <= townHallLevel) return Math.max(acc, level.level);
    return acc;
  }, 0);

  const heroNames = heros.map((hero) => hero.name);
  const allEquipment = getEquipmentForHeroes(heroNames);

  const avaiableEquipment = allEquipment.filter((equipment) => {
    return equipment.levels.some((level) => level.blacksmithLevelRequired <= maxBlacksmithLevel);
  });

  const initial = {
    resources: {
      shiny: 0,
      glowy: 0,
      starry: 0,
    },
    upgrades: {
      completed: 0,
      total: 0,
    },
  };

  const { resources, upgrades } = avaiableEquipment.reduce((acc, e) => {
    const equipmentLevel = heroEquipment.find((heroEquipment) => heroEquipment.name === e.name)?.level || 0;
    const availableLevels = e.levels.filter((level) => level.level > equipmentLevel);
    const totalLevels = e.levels.length;
    const completedLevels = totalLevels - availableLevels.length;

    const levelResouces = availableLevels.reduce(
      (acc, level) => {
        const { shiny, glowy, starry } = equipmentCost[e.type].get(level.level) || { shiny: 0, glowy: 0, starry: 0 };
        return sumResources(acc, { shiny, glowy, starry });
      },
      { shiny: 0, glowy: 0, starry: 0 }
    );

    const newResources = sumResources(acc.resources, levelResouces);

    const newUpgrades = {
      completed: acc.upgrades.completed + completedLevels,
      total: acc.upgrades.total + totalLevels,
    };

    return {
      resources: newResources,
      upgrades: newUpgrades,
    };
  }, initial);

  return { resources, upgrades };
};
