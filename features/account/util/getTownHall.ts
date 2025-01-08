import {
  townHall,
  townHall12Weapon,
  townHall13Weapon,
  townHall14Weapon,
  townHall15Weapon,
  townHall17Weapon,
} from '@/data/structures';

const TOWN_HALL_WEAPON_CONFIGS = {
  12: townHall12Weapon,
  13: townHall13Weapon,
  14: townHall14Weapon,
  15: townHall15Weapon,
  17: townHall17Weapon,
} as const;

type TownHallLevel = keyof typeof TOWN_HALL_WEAPON_CONFIGS;

const createTownHallLevel = (level: number): BuildingState => ({
  name: 'Town Hall',
  buildings: [{ index: 1, level }],
});

const createWeaponLevel = (townHallLevel: number, weaponLevel: number): BuildingState | null => {
  if (!(townHallLevel in TOWN_HALL_WEAPON_CONFIGS)) {
    return null;
  }

  const weaponConfig = TOWN_HALL_WEAPON_CONFIGS[townHallLevel as TownHallLevel];
  const weaponLevelData = weaponConfig.levels.find((level) => level.level === weaponLevel);

  if (!weaponLevelData) {
    return null;
  }

  return {
    name: `TH${townHallLevel} Weapon`,
    buildings: [{ index: 1, level: weaponLevelData.level }],
  };
};

export const getTownHall = (townHallLevel: number, townhallWeaponLevel?: number): BuildingState[] => {
  const townHallBuildingLevel = townHall.levels.find((level) => level.level === townHallLevel);

  if (!townHallBuildingLevel) {
    throw new Error(`Town Hall level ${townHallLevel} not found`);
  }

  const thLevel = createTownHallLevel(townHallBuildingLevel.level);
  const weaponLevel = townhallWeaponLevel !== undefined ? createWeaponLevel(townHallLevel, townhallWeaponLevel) : null;

  return [thLevel, weaponLevel].filter((level): level is BuildingState => level !== null);
};
