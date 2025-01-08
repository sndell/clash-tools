export const EquipmentCost = {
  common: new Map([
    [1, { shiny: 0, glowy: 0, starry: 0 }],
    [2, { shiny: 120, glowy: 0, starry: 0 }],
    [3, { shiny: 240, glowy: 20, starry: 0 }],
    [4, { shiny: 400, glowy: 0, starry: 0 }],
    [5, { shiny: 600, glowy: 0, starry: 0 }],
    [6, { shiny: 840, glowy: 100, starry: 0 }],
    [7, { shiny: 1120, glowy: 0, starry: 0 }],
    [8, { shiny: 1440, glowy: 0, starry: 0 }],
    [9, { shiny: 1800, glowy: 200, starry: 0 }],
    [10, { shiny: 1900, glowy: 0, starry: 0 }],
    [11, { shiny: 2000, glowy: 0, starry: 0 }],
    [12, { shiny: 2100, glowy: 400, starry: 0 }],
    [13, { shiny: 2200, glowy: 0, starry: 0 }],
    [14, { shiny: 2300, glowy: 0, starry: 0 }],
    [15, { shiny: 2400, glowy: 600, starry: 0 }],
    [16, { shiny: 2500, glowy: 0, starry: 0 }],
    [17, { shiny: 2600, glowy: 0, starry: 0 }],
    [18, { shiny: 2700, glowy: 600, starry: 0 }],
  ]),
  epic: new Map([
    [1, { shiny: 0, glowy: 0, starry: 0 }],
    [2, { shiny: 120, glowy: 0, starry: 0 }],
    [3, { shiny: 240, glowy: 20, starry: 0 }],
    [4, { shiny: 400, glowy: 0, starry: 0 }],
    [5, { shiny: 600, glowy: 0, starry: 0 }],
    [6, { shiny: 840, glowy: 100, starry: 0 }],
    [7, { shiny: 1120, glowy: 0, starry: 0 }],
    [8, { shiny: 1440, glowy: 0, starry: 0 }],
    [9, { shiny: 1800, glowy: 200, starry: 10 }],
    [10, { shiny: 1900, glowy: 0, starry: 0 }],
    [11, { shiny: 2000, glowy: 0, starry: 0 }],
    [12, { shiny: 2100, glowy: 400, starry: 20 }],
    [13, { shiny: 2200, glowy: 0, starry: 0 }],
    [14, { shiny: 2300, glowy: 0, starry: 0 }],
    [15, { shiny: 2400, glowy: 600, starry: 30 }],
    [16, { shiny: 2500, glowy: 0, starry: 0 }],
    [17, { shiny: 2600, glowy: 0, starry: 0 }],
    [18, { shiny: 2700, glowy: 600, starry: 50 }],
    [19, { shiny: 2800, glowy: 0, starry: 0 }],
    [20, { shiny: 2900, glowy: 0, starry: 0 }],
    [21, { shiny: 3000, glowy: 600, starry: 100 }],
    [22, { shiny: 3100, glowy: 0, starry: 0 }],
    [23, { shiny: 3200, glowy: 0, starry: 0 }],
    [24, { shiny: 3300, glowy: 600, starry: 120 }],
    [25, { shiny: 3400, glowy: 0, starry: 0 }],
    [26, { shiny: 3500, glowy: 0, starry: 0 }],
    [27, { shiny: 3600, glowy: 600, starry: 150 }],
  ]),
};

export const barbarianKingEquipment: Equipment[] = [
  {
    name: 'Barbarian Puppet',
    type: 'common',
  },
  {
    name: 'Rage Vial',
    type: 'common',
  },
  {
    name: 'Earthquake Boots',
    type: 'common',
  },
  {
    name: 'Vampstache',
    type: 'common',
  },
  {
    name: 'Giant Gauntlet',
    type: 'epic',
  },
  {
    name: 'Spiky Ball',
    type: 'epic',
  },
];

export const archerQueenEquipment: Equipment[] = [
  {
    name: 'Archer Puppet',
    type: 'common',
  },
  {
    name: 'Invisibility Vial',
    type: 'common',
  },
  {
    name: 'Giant Arrow',
    type: 'common',
  },
  {
    name: 'Healer Puppet',
    type: 'common',
  },
  {
    name: 'Frozen Arrow',
    type: 'epic',
  },
  {
    name: 'Magic Mirror',
    type: 'epic',
  },
];

export const minionPrincessEquipment: Equipment[] = [
  {
    name: 'Henchmen Puppet',
    type: 'common',
  },
  {
    name: 'Dark Orb',
    type: 'common',
  },
];

export const grandWardenEquipment: Equipment[] = [
  {
    name: 'Eternal Tome',
    type: 'common',
  },
  {
    name: 'Life Gem',
    type: 'common',
  },
  {
    name: 'Rage Gem',
    type: 'common',
  },
  {
    name: 'Healing Tome',
    type: 'common',
  },
  {
    name: 'Fireball',
    type: 'epic',
  },
  {
    name: 'Lavaloon Puppet',
    type: 'epic',
  },
];

export const royalChampionEquipment: Equipment[] = [
  {
    name: 'Royal Gem',
    type: 'common',
  },
  {
    name: 'Seeking Shield',
    type: 'common',
  },
  {
    name: 'Hog Rider Puppet',
    type: 'common',
  },
  {
    name: 'Haste Vial',
    type: 'common',
  },
  {
    name: 'Rocket Spear',
    type: 'epic',
  },
  {
    name: 'Electro Boots',
    type: 'epic',
  },
];

export const allEquipment = [
  ...barbarianKingEquipment,
  ...archerQueenEquipment,
  ...minionPrincessEquipment,
  ...grandWardenEquipment,
  ...royalChampionEquipment,
];
