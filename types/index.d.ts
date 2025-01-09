type Building = {
  category: 'defence' | 'trap' | 'army' | 'resource' | 'wall' | 'town_hall';
  name: string;
  amount_per_town_hall: {
    th: number;
    amount: number;
  }[];
  levels: BuildingLevel[];
  superchargeLevels?: SuperchargeLevel[];
};

type BuildingLevel = {
  level: number;
  cost: {
    gold?: number;
    elixir?: number;
    dark?: number;
  };
  build_time: number; // sec
  town_hall: number;
  image_name: string;
};

type SuperchargeLevel = {
  level: number;
  cost: {
    gold?: number;
    elixir?: number;
    dark?: number;
  };
  build_time: number; // sec
  town_hall: number;
  image_name: string;
};

type ArmyItem = {
  category: 'troop' | 'pet' | 'spell' | 'siege_machine' | 'hero';
  unlock_building_level_required: number;
  name: string;
  levels: {
    level: number;
    cost: {
      gold?: number;
      elixir?: number;
      dark?: number;
    };
    upgrade_time: number; // sec
    upgrade_building_level_required: number;
  }[];
};

type OreCost = {
  shiny: number;
  glowy: number;
  starry: number;
};

type LevelCostMap = Map<number, OreCost>;

type EquipmentCostType = {
  common: LevelCostMap;
  epic: LevelCostMap;
};

type Equipment = {
  name: string;
  type: 'common' | 'epic';
};
