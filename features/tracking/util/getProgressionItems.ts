import { getArmyProgression } from './getArmyProgreesion';
import { getBuildingsProgress } from './getBuildingProgress';
import { getEquipmentProgression } from './getEquipmentProgression';
import { getWallProgression } from './getWallProgression';
import type { ClashAccount } from '@prisma/client';

export const getProgressionItems = (account: ClashAccount) => {
  const parsedWalls = JSON.parse(account.walls as string);
  const parsedTroops = JSON.parse(account.troops as string);
  const parsedSpells = JSON.parse(account.spells as string);
  const parsedHeroes = JSON.parse(account.heroes as string);
  const parsedBuildings = [...JSON.parse(account.buildings as string), ...JSON.parse(account.caluclatedBuildings as string)];
  const parsedCaluclatedBuildings = JSON.parse(account.caluclatedBuildings as string);
  const parsedEquipment = JSON.parse(account.equipment as string);

  const wall = getWallProgression(parsedWalls, account.townHallLevel);
  const { lab, pets, heroes } = getArmyProgression(parsedTroops, parsedSpells, parsedHeroes, account.townHallLevel);
  const equipment = getEquipmentProgression(parsedEquipment, parsedHeroes, account.townHallLevel);
  const { building, supercharge } = getBuildingsProgress(
    [...parsedBuildings, ...parsedCaluclatedBuildings],
    account.townHallLevel
  );

  return { wall, lab, pets, heroes, equipment, building, supercharge };
};
