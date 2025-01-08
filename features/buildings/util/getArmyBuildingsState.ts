import { barracks, darkBarracks, spellFactory, darkSpellFactory, workshop, petHouse } from '@/data/structures';
import { elixirTroops, darkTroops, elixirSpells, darkSpells, pets, siegeMachines } from '@/data/army';

const TROOP_CATEGORIES = {
  elixirTroops: { items: elixirTroops, building: barracks },
  darkTroops: { items: darkTroops, building: darkBarracks },
  elixirSpells: { items: elixirSpells, building: spellFactory },
  darkSpells: { items: darkSpells, building: darkSpellFactory },
  siegeMachines: { items: siegeMachines, building: workshop },
  pets: { items: pets, building: petHouse },
} as const;

const findTroopData = (troopName: string, troopList: ArmyItem[]) => troopList.find((t) => t.name === troopName);

const isTroopUnlocked = (playerTroop: Troop | Spell, troopData: ArmyItem) => playerTroop.level >= troopData.levels[0].level;

const getHighestUnlockLevel = (items: { troopData: ArmyItem }[]) =>
  items.reduce((highest, { troopData }) => Math.max(highest, troopData.unlock_building_level_required), 0);

const createBuildingState = (building: Building, level: number): BuildingState => ({
  name: building.name,
  buildings: [{ index: 1, level }],
});

const getUnlockedItems = (playerItems: (Troop | Spell)[], itemList: ArmyItem[], villageFilter: string = 'home') =>
  playerItems
    .filter((item) => item.village === villageFilter)
    .map((item) => {
      const troopData = findTroopData(item.name, itemList);
      return troopData && isTroopUnlocked(item, troopData) ? { troop: item, troopData } : null;
    })
    .filter(Boolean) as { troop: Troop | Spell; troopData: ArmyItem }[];

export const getArmyBuildingsState = (troops: Troop[], spells: Spell[]): BuildingState[] => {
  const unlockedItems = {
    elixirTroops: getUnlockedItems(troops, elixirTroops),
    darkTroops: getUnlockedItems(troops, darkTroops),
    elixirSpells: getUnlockedItems(spells ?? [], elixirSpells),
    darkSpells: getUnlockedItems(spells ?? [], darkSpells),
    siegeMachines: getUnlockedItems(troops, siegeMachines),
    pets: getUnlockedItems(troops, pets),
  };

  return Object.entries(TROOP_CATEGORIES)
    .map(([category, { building }]) => {
      const level = getHighestUnlockLevel(unlockedItems[category as keyof typeof unlockedItems]);
      const buildingLevel = building.levels.find((b) => b.level === level);
      return buildingLevel ? createBuildingState(building, buildingLevel.level) : null;
    })
    .filter(Boolean) as BuildingState[];
};
