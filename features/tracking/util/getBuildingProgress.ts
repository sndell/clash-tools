import { allBuildings } from '@/data/structures';

const getBuildingProgress = (buildings: BuildingState['buildings'], availableLevels: BuildingLevel[]) => {
  return buildings.reduce(
    (acc, b) => {
      const maxLevel = availableLevels.length;

      const { resources, time } = availableLevels.reduce(
        (acc, level) => {
          const cost = level.cost.gold || level.cost.elixir || level.cost.dark || 0;
          const resourceType = level.cost.gold ? 'gold' : level.cost.elixir ? 'elixir' : 'dark';
          const newResouces = { ...acc.resources, [resourceType]: acc.resources[resourceType] + cost };
          return { ...acc, resources: newResouces, time: acc.time + level.build_time };
        },
        { resources: { gold: 0, elixir: 0, dark: 0 }, time: 0 }
      );

      const newUpgrades = {
        completed: b.level + acc.upgrades.completed,
        total: maxLevel + acc.upgrades.total,
      };

      const newResouces = {
        gold: resources.gold + acc.resources.gold,
        elixir: resources.elixir + acc.resources.elixir,
        dark: resources.dark + acc.resources.dark,
      };

      return {
        ...acc,
        upgrades: newUpgrades,
        resources: newResouces,
        time: time + acc.time,
      };
    },
    { resources: { gold: 0, elixir: 0, dark: 0 }, upgrades: { completed: 0, total: 0 }, time: 0 }
  );
};

export const getBuildingsProgress = (buildings: BuildingState[], townHallLevel: number) => {
  const initial = {
    building: {
      resources: { gold: 0, elixir: 0, dark: 0 },
      upgrades: { completed: 0, total: 0 },
      time: 0,
    },
    supercharge: {
      resources: { gold: 0, elixir: 0, dark: 0 },
      upgrades: { completed: 0, total: 0 },
      time: 0,
    },
  };

  const { building, supercharge } = buildings.reduce((acc, building) => {
    const foundItem = allBuildings.find((b) => b.name === building.name);
    const availableLevels = foundItem?.levels.filter((level) => level.town_hall <= townHallLevel);

    if (!foundItem || !availableLevels || foundItem.name === 'Town Hall') return acc;

    const buildingProgress = getBuildingProgress(building.buildings, availableLevels);
    const superchargeBuildingProgress = getBuildingProgress(building.superchargeBuildings || [], availableLevels);

    const newBuildingUpgrades = {
      completed: acc.building.upgrades.completed + buildingProgress.upgrades.completed,
      total: acc.building.upgrades.total + buildingProgress.upgrades.total,
    };

    const newSuperchargeUpgrades = {
      completed: acc.supercharge.upgrades.completed + superchargeBuildingProgress.upgrades.completed,
      total: acc.supercharge.upgrades.total + superchargeBuildingProgress.upgrades.total,
    };

    const newResouces = {
      gold: acc.building.resources.gold + buildingProgress.resources.gold,
      elixir: acc.building.resources.elixir + buildingProgress.resources.elixir,
      dark: acc.building.resources.dark + buildingProgress.resources.dark,
    };

    const newSuperchargeResouces = {
      gold: acc.supercharge.resources.gold + superchargeBuildingProgress.resources.gold,
      elixir: acc.supercharge.resources.elixir + superchargeBuildingProgress.resources.elixir,
      dark: acc.supercharge.resources.dark + superchargeBuildingProgress.resources.dark,
    };

    return {
      ...acc,
      building: {
        ...acc.building,
        resources: newResouces,
        upgrades: newBuildingUpgrades,
        time: acc.building.time + buildingProgress.time,
      },
      supercharge: {
        ...acc.supercharge,
        resources: newSuperchargeResouces,
        upgrades: newSuperchargeUpgrades,
        time: acc.supercharge.time + superchargeBuildingProgress.time,
      },
    };
  }, initial);

  return { building, supercharge };
};
