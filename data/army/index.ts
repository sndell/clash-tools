export const barbarian: ArmyItem = {
  category: 'troop',
  name: 'Barbarian',
  unlock_building_level_required: 1,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 20000 },
      upgrade_time: 2 * 3600, // 2 hours in seconds
      upgrade_building_level_required: 1,
    },
    {
      level: 3,
      cost: { elixir: 60000 },
      upgrade_time: 4 * 3600, // 4 hours in seconds
      upgrade_building_level_required: 3,
    },
    {
      level: 4,
      cost: { elixir: 200000 },
      upgrade_time: 6 * 3600, // 6 hours in seconds
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: { elixir: 650000 },
      upgrade_time: 12 * 3600, // 12 hours in seconds
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: { elixir: 1400000 },
      upgrade_time: 18 * 3600, // 18 hours in seconds
      upgrade_building_level_required: 7,
    },
    {
      level: 7,
      cost: { elixir: 2100000 },
      upgrade_time: 24 * 3600, // 1 day in seconds
      upgrade_building_level_required: 8,
    },
    {
      level: 8,
      cost: { elixir: 2800000 },
      upgrade_time: 2 * 24 * 3600, // 2 days in seconds
      upgrade_building_level_required: 9,
    },
    {
      level: 9,
      cost: { elixir: 3500000 },
      upgrade_time: 2 * 24 * 3600 + 12 * 3600, // 2 days 12 hours in seconds
      upgrade_building_level_required: 10,
    },
    {
      level: 10,
      cost: { elixir: 4300000 },
      upgrade_time: 4 * 24 * 3600, // 4 days in seconds
      upgrade_building_level_required: 12,
    },
    {
      level: 11,
      cost: { elixir: 6000000 },
      upgrade_time: 5 * 24 * 3600, // 5 days in seconds
      upgrade_building_level_required: 13,
    },
    {
      level: 12,
      cost: { elixir: 12000000 },
      upgrade_time: 9 * 24 * 3600, // 9 days in seconds
      upgrade_building_level_required: 14,
    },
  ],
};

export const archer: ArmyItem = {
  category: 'troop',
  name: 'Archer',
  unlock_building_level_required: 2,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 30000 },
      upgrade_time: 3 * 3600, // 3 hours in seconds
      upgrade_building_level_required: 1,
    },
    {
      level: 3,
      cost: { elixir: 80000 },
      upgrade_time: 5 * 3600, // 5 hours in seconds
      upgrade_building_level_required: 3,
    },
    {
      level: 4,
      cost: { elixir: 300000 },
      upgrade_time: 7 * 3600, // 7 hours in seconds
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: { elixir: 800000 },
      upgrade_time: 14 * 3600, // 14 hours in seconds
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: { elixir: 2000000 },
      upgrade_time: 18 * 3600, // 18 hours in seconds
      upgrade_building_level_required: 7,
    },
    {
      level: 7,
      cost: { elixir: 2500000 },
      upgrade_time: 24 * 3600, // 1 day in seconds
      upgrade_building_level_required: 8,
    },
    {
      level: 8,
      cost: { elixir: 3200000 },
      upgrade_time: 2 * 24 * 3600, // 2 days in seconds
      upgrade_building_level_required: 9,
    },
    {
      level: 9,
      cost: { elixir: 4000000 },
      upgrade_time: 3 * 24 * 3600, // 3 days in seconds
      upgrade_building_level_required: 10,
    },
    {
      level: 10,
      cost: { elixir: 4500000 },
      upgrade_time: 4 * 24 * 3600, // 4 days in seconds
      upgrade_building_level_required: 12,
    },
    {
      level: 11,
      cost: { elixir: 8000000 },
      upgrade_time: 5 * 24 * 3600, // 5 days in seconds
      upgrade_building_level_required: 13,
    },
    {
      level: 12,
      cost: { elixir: 14000000 },
      upgrade_time: 9 * 24 * 3600, // 9 days in seconds
      upgrade_building_level_required: 14,
    },
  ],
};

export const giant: ArmyItem = {
  category: 'troop',
  name: 'Giant',
  unlock_building_level_required: 3,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 40000 },
      upgrade_time: 4 * 3600, // 4 hours in seconds
      upgrade_building_level_required: 2,
    },
    {
      level: 3,
      cost: { elixir: 150000 },
      upgrade_time: 8 * 3600, // 8 hours in seconds
      upgrade_building_level_required: 4,
    },
    {
      level: 4,
      cost: { elixir: 500000 },
      upgrade_time: 12 * 3600, // 12 hours in seconds
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: { elixir: 1200000 },
      upgrade_time: 16 * 3600, // 16 hours in seconds
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: { elixir: 2000000 },
      upgrade_time: 1 * 24 * 3600, // 1 day in seconds
      upgrade_building_level_required: 7,
    },
    {
      level: 7,
      cost: { elixir: 3000000 },
      upgrade_time: 1 * 24 * 3600 + 12 * 3600, // 1 day 12 hours in seconds
      upgrade_building_level_required: 8,
    },
    {
      level: 8,
      cost: { elixir: 3500000 },
      upgrade_time: 2 * 24 * 3600 + 12 * 3600, // 2 days 12 hours in seconds
      upgrade_building_level_required: 9,
    },
    {
      level: 9,
      cost: { elixir: 4000000 },
      upgrade_time: 3 * 24 * 3600, // 3 days in seconds
      upgrade_building_level_required: 10,
    },
    {
      level: 10,
      cost: { elixir: 6000000 },
      upgrade_time: 4 * 24 * 3600 + 12 * 3600, // 4 days 12 hours in seconds
      upgrade_building_level_required: 11,
    },
    {
      level: 11,
      cost: { elixir: 9000000 },
      upgrade_time: 5 * 24 * 3600 + 12 * 3600, // 5 days 12 hours in seconds
      upgrade_building_level_required: 13,
    },
    {
      level: 12,
      cost: { elixir: 15500000 },
      upgrade_time: 10 * 24 * 3600 + 12 * 3600, // 10 days 12 hours in seconds
      upgrade_building_level_required: 14,
    },
    {
      level: 13,
      cost: { elixir: 18500000 },
      upgrade_time: 13 * 24 * 3600 + 12 * 3600, // 13 days 12 hours in seconds
      upgrade_building_level_required: 15,
    },
  ],
};

export const goblin: ArmyItem = {
  category: 'troop',
  name: 'Goblin',
  unlock_building_level_required: 4,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 45000,
      },
      upgrade_time: 14400, // 4h
      upgrade_building_level_required: 1,
    },
    {
      level: 3,
      cost: {
        elixir: 100000,
      },
      upgrade_time: 21600, // 6h
      upgrade_building_level_required: 3,
    },
    {
      level: 4,
      cost: {
        elixir: 500000,
      },
      upgrade_time: 43200, // 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: {
        elixir: 1200000,
      },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: {
        elixir: 2000000,
      },
      upgrade_time: 129600, // 1d 6h
      upgrade_building_level_required: 7,
    },
    {
      level: 7,
      cost: {
        elixir: 3000000,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 8,
      cost: {
        elixir: 4200000,
      },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 10,
    },
    {
      level: 9,
      cost: {
        elixir: 10000000,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 13,
    },
  ],
};

export const wallBreaker: ArmyItem = {
  category: 'troop',
  name: 'Wall Breaker',
  unlock_building_level_required: 5,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 100000,
      },
      upgrade_time: 21600, // 6 hours
      upgrade_building_level_required: 2,
    },
    {
      level: 3,
      cost: {
        elixir: 250000,
      },
      upgrade_time: 32400, // 9 hours
      upgrade_building_level_required: 4,
    },
    {
      level: 4,
      cost: {
        elixir: 600000,
      },
      upgrade_time: 50400, // 14 hours
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: {
        elixir: 1200000,
      },
      upgrade_time: 64800, // 18 hours
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: {
        elixir: 2500000,
      },
      upgrade_time: 126000, // 1 day 6 hours
      upgrade_building_level_required: 8,
    },
    {
      level: 7,
      cost: {
        elixir: 3400000,
      },
      upgrade_time: 172800, // 2 days
      upgrade_building_level_required: 9,
    },
    {
      level: 8,
      cost: {
        elixir: 4500000,
      },
      upgrade_time: 259200, // 3 days
      upgrade_building_level_required: 10,
    },
    {
      level: 9,
      cost: {
        elixir: 6000000,
      },
      upgrade_time: 388800, // 4 days 12 hours
      upgrade_building_level_required: 11,
    },
    {
      level: 10,
      cost: {
        elixir: 6500000,
      },
      upgrade_time: 604800, // 7 days
      upgrade_building_level_required: 12,
    },
    {
      level: 11,
      cost: {
        elixir: 13000000,
      },
      upgrade_time: 691200, // 8 days
      upgrade_building_level_required: 13,
    },
    {
      level: 12,
      cost: {
        elixir: 16000000,
      },
      upgrade_time: 912000, // 10 days 12 hours
      upgrade_building_level_required: 14,
    },
    {
      level: 13,
      cost: {
        elixir: 20000000,
      },
      upgrade_time: 1209600, // 14 days
      upgrade_building_level_required: 15,
    },
  ],
};

export const balloon: ArmyItem = {
  category: 'troop',
  name: 'Balloon',
  unlock_building_level_required: 6,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 125000,
      },
      upgrade_time: 28800, // 8 hours
      upgrade_building_level_required: 2,
    },
    {
      level: 3,
      cost: {
        elixir: 400000,
      },
      upgrade_time: 43200, // 12 hours
      upgrade_building_level_required: 4,
    },
    {
      level: 4,
      cost: {
        elixir: 720000,
      },
      upgrade_time: 64800, // 18 hours
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: {
        elixir: 1300000,
      },
      upgrade_time: 86400, // 1 day
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: {
        elixir: 2750000,
      },
      upgrade_time: 259200, // 3 days
      upgrade_building_level_required: 7,
    },
    {
      level: 7,
      cost: {
        elixir: 4500000,
      },
      upgrade_time: 302400, // 3 days 12 hours
      upgrade_building_level_required: 9,
    },
    {
      level: 8,
      cost: {
        elixir: 5000000,
      },
      upgrade_time: 345600, // 4 days
      upgrade_building_level_required: 10,
    },
    {
      level: 9,
      cost: {
        elixir: 8000000,
      },
      upgrade_time: 691200, // 8 days
      upgrade_building_level_required: 11,
    },
    {
      level: 10,
      cost: {
        elixir: 10000000,
      },
      upgrade_time: 1036800, // 12 days
      upgrade_building_level_required: 12,
    },
    {
      level: 11,
      cost: {
        elixir: 18000000,
      },
      upgrade_time: 1123200, // 13 days
      upgrade_building_level_required: 14,
    },
  ],
};

export const wizard: ArmyItem = {
  category: 'troop',
  name: 'Wizard',
  unlock_building_level_required: 7,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 120000,
      },
      upgrade_time: 28800, // 8h
      upgrade_building_level_required: 3,
    },
    {
      level: 3,
      cost: {
        elixir: 320000,
      },
      upgrade_time: 36000, // 10h
      upgrade_building_level_required: 4,
    },
    {
      level: 4,
      cost: {
        elixir: 620000,
      },
      upgrade_time: 57600, // 16h
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: {
        elixir: 1200000,
      },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: {
        elixir: 2200000,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 7,
      cost: {
        elixir: 3500000,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 8,
      cost: {
        elixir: 4000000,
      },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 9,
      cost: {
        elixir: 5000000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 10,
    },
    {
      level: 10,
      cost: {
        elixir: 7200000,
      },
      upgrade_time: 432000, // 5d 12h
      upgrade_building_level_required: 11,
    },
    {
      level: 11,
      cost: {
        elixir: 13500000,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 13,
    },
    {
      level: 12,
      cost: {
        elixir: 16500000,
      },
      upgrade_time: 950400, // 11d
      upgrade_building_level_required: 14,
    },
    {
      level: 13,
      cost: {
        elixir: 21000000,
      },
      upgrade_time: 1209600, // 14d
      upgrade_building_level_required: 15,
    },
  ],
};

export const healer: ArmyItem = {
  category: 'troop',
  name: 'Healer',
  unlock_building_level_required: 8,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 450000,
      },
      upgrade_time: 43200, // 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 3,
      cost: {
        elixir: 900000,
      },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 6,
    },
    {
      level: 4,
      cost: {
        elixir: 2700000,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 7,
    },
    {
      level: 5,
      cost: {
        elixir: 4200000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 9,
    },
    {
      level: 6,
      cost: {
        elixir: 7000000,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 11,
    },
    {
      level: 7,
      cost: {
        elixir: 9500000,
      },
      upgrade_time: 756000, // 8d 12h
      upgrade_building_level_required: 12,
    },
    {
      level: 8,
      cost: {
        elixir: 14800000,
      },
      upgrade_time: 828000, // 9d 12h
      upgrade_building_level_required: 13,
    },
    {
      level: 9,
      cost: {
        elixir: 16800000,
      },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 14,
    },
  ],
};

export const dragon: ArmyItem = {
  category: 'troop',
  name: 'Dragon',
  unlock_building_level_required: 9,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 1000000,
      },
      upgrade_time: 64800, // 18h
      upgrade_building_level_required: 5,
    },
    {
      level: 3,
      cost: {
        elixir: 2000000,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 4,
      cost: {
        elixir: 3000000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 7,
    },
    {
      level: 5,
      cost: {
        elixir: 3800000,
      },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 8,
    },
    {
      level: 6,
      cost: {
        elixir: 4900000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 9,
    },
    {
      level: 7,
      cost: {
        elixir: 5000000,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 10,
    },
    {
      level: 8,
      cost: {
        elixir: 7500000,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 11,
    },
    {
      level: 9,
      cost: {
        elixir: 10500000,
      },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 12,
    },
    {
      level: 10,
      cost: {
        elixir: 15000000,
      },
      upgrade_time: 918000, // 10d 14h
      upgrade_building_level_required: 13,
    },
    {
      level: 11,
      cost: {
        elixir: 17200000,
      },
      upgrade_time: 1123200, // 13d
      upgrade_building_level_required: 14,
    },
    {
      level: 12,
      cost: {
        elixir: 22000000,
      },
      upgrade_time: 1262400, // 14d 16h
      upgrade_building_level_required: 15,
    },
  ],
};

export const pekka: ArmyItem = {
  category: 'troop',
  name: 'P.E.K.K.A',
  unlock_building_level_required: 10,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 1000000,
      },
      upgrade_time: 43200, // 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 3,
      cost: {
        elixir: 1800000,
      },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 6,
    },
    {
      level: 4,
      cost: {
        elixir: 2800000,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 5,
      cost: {
        elixir: 3200000,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 6,
      cost: {
        elixir: 3600000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 8,
    },
    {
      level: 7,
      cost: {
        elixir: 4500000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 9,
    },
    {
      level: 8,
      cost: {
        elixir: 6200000,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 10,
    },
    {
      level: 9,
      cost: {
        elixir: 7000000,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 11,
    },
    {
      level: 10,
      cost: {
        elixir: 12000000,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 13,
    },
    {
      level: 11,
      cost: {
        elixir: 17000000,
      },
      upgrade_time: 998400, // 11d 12h
      upgrade_building_level_required: 14,
    },
  ],
};

export const babyDragon: ArmyItem = {
  category: 'troop',
  name: 'Baby Dragon',
  unlock_building_level_required: 11,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 2000000,
      },
      upgrade_time: 90000, // 1d 6h
      upgrade_building_level_required: 7,
    },
    {
      level: 3,
      cost: {
        elixir: 2500000,
      },
      upgrade_time: 126000, // 1d 18h
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: {
        elixir: 3400000,
      },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 8,
    },
    {
      level: 5,
      cost: {
        elixir: 3900000,
      },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 6,
      cost: {
        elixir: 5500000,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 10,
    },
    {
      level: 7,
      cost: {
        elixir: 7200000,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 11,
    },
    {
      level: 8,
      cost: {
        elixir: 9500000,
      },
      upgrade_time: 774000, // 8d 12h
      upgrade_building_level_required: 12,
    },
    {
      level: 9,
      cost: {
        elixir: 14500000,
      },
      upgrade_time: 864000, // 10d
      upgrade_building_level_required: 13,
    },
    {
      level: 10,
      cost: {
        elixir: 16000000,
      },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 14,
    },
    {
      level: 11,
      cost: {
        elixir: 22500000,
      },
      upgrade_time: 1296000, // 15d
      upgrade_building_level_required: 15,
    },
  ],
};

export const miner: ArmyItem = {
  category: 'troop',
  name: 'Miner',
  unlock_building_level_required: 12,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 2500000,
      },
      upgrade_time: 86400, // 1 day
      upgrade_building_level_required: 8,
    },
    {
      level: 3,
      cost: {
        elixir: 3200000,
      },
      upgrade_time: 172800, // 2 days
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: {
        elixir: 3800000,
      },
      upgrade_time: 259200, // 3 days
      upgrade_building_level_required: 9,
    },
    {
      level: 5,
      cost: {
        elixir: 4000000,
      },
      upgrade_time: 302400, // 3 days 12 hours
      upgrade_building_level_required: 9,
    },
    {
      level: 6,
      cost: {
        elixir: 5500000,
      },
      upgrade_time: 388800, // 4 days 12 hours
      upgrade_building_level_required: 10,
    },
    {
      level: 7,
      cost: {
        elixir: 6500000,
      },
      upgrade_time: 432000, // 5 days
      upgrade_building_level_required: 11,
    },
    {
      level: 8,
      cost: {
        elixir: 9000000,
      },
      upgrade_time: 691200, // 8 days
      upgrade_building_level_required: 12,
    },
    {
      level: 9,
      cost: {
        elixir: 14000000,
      },
      upgrade_time: 777600, // 9 days
      upgrade_building_level_required: 13,
    },
    {
      level: 10,
      cost: {
        elixir: 16400000,
      },
      upgrade_time: 1036800, // 12 days
      upgrade_building_level_required: 14,
    },
  ],
};

export const electroDragon: ArmyItem = {
  category: 'troop',
  name: 'Electro Dragon',
  unlock_building_level_required: 13,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 6300000,
      },
      upgrade_time: 432000, // 5 days
      upgrade_building_level_required: 9,
    },
    {
      level: 3,
      cost: {
        elixir: 7000000,
      },
      upgrade_time: 468000, // 5 days 12 hours
      upgrade_building_level_required: 10,
    },
    {
      level: 4,
      cost: {
        elixir: 9000000,
      },
      upgrade_time: 777600, // 9 days
      upgrade_building_level_required: 11,
    },
    {
      level: 5,
      cost: {
        elixir: 11000000,
      },
      upgrade_time: 864000, // 10 days
      upgrade_building_level_required: 12,
    },
    {
      level: 6,
      cost: {
        elixir: 16000000,
      },
      upgrade_time: 1036800, // 12 days
      upgrade_building_level_required: 13,
    },
    {
      level: 7,
      cost: {
        elixir: 17600000,
      },
      upgrade_time: 1123200, // 13 days
      upgrade_building_level_required: 14,
    },
    {
      level: 8,
      cost: {
        elixir: 23000000,
      },
      upgrade_time: 1296000, // 15 days
      upgrade_building_level_required: 15,
    },
  ],
};

export const yeti: ArmyItem = {
  category: 'troop',
  name: 'Yeti',
  unlock_building_level_required: 14,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 6000000,
      },
      upgrade_time: 388800, // 4 days 12 hours
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: {
        elixir: 7000000,
      },
      upgrade_time: 518400, // 6 days
      upgrade_building_level_required: 11,
    },
    {
      level: 4,
      cost: {
        elixir: 10000000,
      },
      upgrade_time: 777600, // 9 days
      upgrade_building_level_required: 12,
    },
    {
      level: 5,
      cost: {
        elixir: 14000000,
      },
      upgrade_time: 864000, // 10 days
      upgrade_building_level_required: 13,
    },
    {
      level: 6,
      cost: {
        elixir: 16800000,
      },
      upgrade_time: 1080000, // 12 days 12 hours
      upgrade_building_level_required: 14,
    },
  ],
};

export const dragonRider: ArmyItem = {
  category: 'troop',
  name: 'Dragon Rider',
  unlock_building_level_required: 15,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 7500000,
      },
      upgrade_time: 691200, // 8 days
      upgrade_building_level_required: 11,
    },
    {
      level: 3,
      cost: {
        elixir: 12000000,
      },
      upgrade_time: 907200, // 10 days 12 hours
      upgrade_building_level_required: 12,
    },
    {
      level: 4,
      cost: {
        elixir: 17200000,
      },
      upgrade_time: 1123200, // 13 days
      upgrade_building_level_required: 14,
    },
    {
      level: 5,
      cost: {
        elixir: 22500000,
      },
      upgrade_time: 1344000, // 15 days 12 hours
      upgrade_building_level_required: 15,
    },
  ],
};

export const electroTitan: ArmyItem = {
  category: 'troop',
  name: 'Electro Titan',
  unlock_building_level_required: 16,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 14000000,
      },
      upgrade_time: 1036800, // 12 days
      upgrade_building_level_required: 12,
    },
    {
      level: 3,
      cost: {
        elixir: 18000000,
      },
      upgrade_time: 1123200, // 13 days
      upgrade_building_level_required: 13,
    },
    {
      level: 4,
      cost: {
        elixir: 18500000,
      },
      upgrade_time: 1166400, // 13 days 12 hours
      upgrade_building_level_required: 14,
    },
  ],
};

export const rootRider: ArmyItem = {
  category: 'troop',
  name: 'Root Rider',
  unlock_building_level_required: 17,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 17000000,
      },
      upgrade_time: 1036800, // 12 days
      upgrade_building_level_required: 13,
    },
    {
      level: 3,
      cost: {
        elixir: 17600000,
      },
      upgrade_time: 1123200, // 13 days
      upgrade_building_level_required: 14,
    },
  ],
};

export const thrower: ArmyItem = {
  category: 'troop',
  name: 'Thrower',
  unlock_building_level_required: 18,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 14,
    },
    {
      level: 2,
      cost: { elixir: 21000000 },
      upgrade_time: 1209600, // 14d
      upgrade_building_level_required: 14,
    },
    {
      level: 3,
      cost: { elixir: 23000000 },
      upgrade_time: 1382400, // 16d
      upgrade_building_level_required: 15,
    },
  ],
};

export const minion: ArmyItem = {
  category: 'troop',
  name: 'Minion',
  unlock_building_level_required: 1,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 1000 },
      upgrade_time: 28800, // 8 hours
      upgrade_building_level_required: 5,
    },
    {
      level: 3,
      cost: { dark: 2500 },
      upgrade_time: 43200, // 12 hours
      upgrade_building_level_required: 6,
    },
    {
      level: 4,
      cost: { dark: 5000 },
      upgrade_time: 64800, // 18 hours
      upgrade_building_level_required: 6,
    },
    {
      level: 5,
      cost: { dark: 10000 },
      upgrade_time: 86400, // 1 day
      upgrade_building_level_required: 7,
    },
    {
      level: 6,
      cost: { dark: 15000 },
      upgrade_time: 172800, // 2 days
      upgrade_building_level_required: 8,
    },
    {
      level: 7,
      cost: { dark: 31500 },
      upgrade_time: 216000, // 2 days 12 hours
      upgrade_building_level_required: 9,
    },
    {
      level: 8,
      cost: { dark: 47500 },
      upgrade_time: 302400, // 3 days 12 hours
      upgrade_building_level_required: 10,
    },
    {
      level: 9,
      cost: { dark: 75000 },
      upgrade_time: 432000, // 5 days
      upgrade_building_level_required: 11,
    },
    {
      level: 10,
      cost: { dark: 100000 },
      upgrade_time: 518400, // 6 days
      upgrade_building_level_required: 12,
    },
    {
      level: 11,
      cost: { dark: 115000 },
      upgrade_time: 604800, // 7 days
      upgrade_building_level_required: 13,
    },
    {
      level: 12,
      cost: { dark: 160000 },
      upgrade_time: 950400, // 11 days
      upgrade_building_level_required: 14,
    },
    {
      level: 13,
      cost: { dark: 255000 },
      upgrade_time: 1209600, // 14 days
      upgrade_building_level_required: 15,
    },
  ],
};

export const hogRider: ArmyItem = {
  category: 'troop',
  name: 'Hog Rider',
  unlock_building_level_required: 2,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 2000 },
      upgrade_time: 36000, // 10 hours
      upgrade_building_level_required: 5,
    },
    {
      level: 3,
      cost: { dark: 3500 },
      upgrade_time: 64800, // 18 hours
      upgrade_building_level_required: 6,
    },
    {
      level: 4,
      cost: { dark: 5000 },
      upgrade_time: 86400, // 1 day
      upgrade_building_level_required: 6,
    },
    {
      level: 5,
      cost: { dark: 10000 },
      upgrade_time: 172800, // 2 days
      upgrade_building_level_required: 7,
    },
    {
      level: 6,
      cost: { dark: 18500 },
      upgrade_time: 216000, // 2 days 6 hours
      upgrade_building_level_required: 8,
    },
    {
      level: 7,
      cost: { dark: 35000 },
      upgrade_time: 259200, // 3 days
      upgrade_building_level_required: 9,
    },
    {
      level: 8,
      cost: { dark: 47500 },
      upgrade_time: 345600, // 4 days
      upgrade_building_level_required: 10,
    },
    {
      level: 9,
      cost: { dark: 50000 },
      upgrade_time: 432000, // 5 days
      upgrade_building_level_required: 10,
    },
    {
      level: 10,
      cost: { dark: 87500 },
      upgrade_time: 475200, // 5 days 12 hours
      upgrade_building_level_required: 11,
    },
    {
      level: 11,
      cost: { dark: 107500 },
      upgrade_time: 756000, // 6 days 12 hours
      upgrade_building_level_required: 12,
    },
    {
      level: 12,
      cost: { dark: 125000 },
      upgrade_time: 777600, // 9 days
      upgrade_building_level_required: 13,
    },
    {
      level: 13,
      cost: { dark: 175000 },
      upgrade_time: 994800, // 11 days 12 hours
      upgrade_building_level_required: 14,
    },
  ],
};

export const valkyrie: ArmyItem = {
  category: 'troop',
  name: 'Valkyrie',
  unlock_building_level_required: 3,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 3000 },
      upgrade_time: 43200, // 12 hours
      upgrade_building_level_required: 6,
    },
    {
      level: 3,
      cost: { dark: 5000 },
      upgrade_time: 86400, // 1 day
      upgrade_building_level_required: 7,
    },
    {
      level: 4,
      cost: { dark: 10000 },
      upgrade_time: 172800, // 2 days
      upgrade_building_level_required: 7,
    },
    {
      level: 5,
      cost: { dark: 16000 },
      upgrade_time: 216000, // 2 days 12 hours
      upgrade_building_level_required: 8,
    },
    {
      level: 6,
      cost: { dark: 31500 },
      upgrade_time: 302400, // 3 days 12 hours
      upgrade_building_level_required: 9,
    },
    {
      level: 7,
      cost: { dark: 55000 },
      upgrade_time: 345600, // 4 days
      upgrade_building_level_required: 10,
    },
    {
      level: 8,
      cost: { dark: 77500 },
      upgrade_time: 432000, // 5 days
      upgrade_building_level_required: 11,
    },
    {
      level: 9,
      cost: { dark: 107500 },
      upgrade_time: 604800, // 7 days
      upgrade_building_level_required: 12,
    },
    {
      level: 10,
      cost: { dark: 120000 },
      upgrade_time: 828000, // 9 days 12 hours
      upgrade_building_level_required: 13,
    },
    {
      level: 11,
      cost: { dark: 170000 },
      upgrade_time: 950400, // 11 days
      upgrade_building_level_required: 14,
    },
  ],
};

export const golem: ArmyItem = {
  category: 'troop',
  name: 'Golem',
  unlock_building_level_required: 4,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 4000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 6,
    },
    {
      level: 3,
      cost: { dark: 6000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 7,
    },
    {
      level: 4,
      cost: { dark: 10000 },
      upgrade_time: 216000, // 2d 6h
      upgrade_building_level_required: 7,
    },
    {
      level: 5,
      cost: { dark: 18500 },
      upgrade_time: 259200, // 2d 12h
      upgrade_building_level_required: 8,
    },
    {
      level: 6,
      cost: { dark: 26500 },
      upgrade_time: 288000, // 2d 20h
      upgrade_building_level_required: 9,
    },
    {
      level: 7,
      cost: { dark: 38500 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 9,
    },
    {
      level: 8,
      cost: { dark: 50000 },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 10,
    },
    {
      level: 9,
      cost: { dark: 62500 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 10,
    },
    {
      level: 10,
      cost: { dark: 80000 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 11,
    },
    {
      level: 11,
      cost: { dark: 105000 },
      upgrade_time: 648000, // 7d 12h
      upgrade_building_level_required: 12,
    },
    {
      level: 12,
      cost: { dark: 122500 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 13,
    },
    {
      level: 13,
      cost: { dark: 175000 },
      upgrade_time: 950400, // 11d
      upgrade_building_level_required: 14,
    },
  ],
};

export const witch: ArmyItem = {
  category: 'troop',
  name: 'Witch',
  unlock_building_level_required: 5,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 20000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 7,
    },
    {
      level: 3,
      cost: { dark: 29000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: { dark: 45000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 9,
    },
    {
      level: 5,
      cost: { dark: 62500 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 10,
    },
    {
      level: 6,
      cost: { dark: 150000 },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 13,
    },
    {
      level: 7,
      cost: { dark: 180000 },
      upgrade_time: 1123200, // 13d
      upgrade_building_level_required: 14,
    },
  ],
};

export const lavaHound: ArmyItem = {
  category: 'troop',
  name: 'Lava Hound',
  unlock_building_level_required: 6,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 14000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 7,
    },
    {
      level: 3,
      cost: { dark: 21500 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: { dark: 42500 },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 5,
      cost: { dark: 60000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 10,
    },
    {
      level: 6,
      cost: { dark: 80000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 11,
    },
  ],
};

export const bowler: ArmyItem = {
  category: 'troop',
  name: 'Bowler',
  unlock_building_level_required: 7,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 32500 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 3,
      cost: { dark: 44000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 9,
    },
    {
      level: 4,
      cost: { dark: 62500 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 10,
    },
    {
      level: 5,
      cost: { dark: 85000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 11,
    },
    {
      level: 6,
      cost: { dark: 110000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 12,
    },
    {
      level: 7,
      cost: { dark: 145000 },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 13,
    },
    {
      level: 8,
      cost: { dark: 175000 },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 14,
    },
  ],
};

export const iceGolem: ArmyItem = {
  category: 'troop',
  name: 'Ice Golem',
  unlock_building_level_required: 8,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 27500 },
      upgrade_time: 252000, // 2d 20h
      upgrade_building_level_required: 9,
    },
    {
      level: 3,
      cost: { dark: 42500 },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 4,
      cost: { dark: 50000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 10,
    },
    {
      level: 5,
      cost: { dark: 62500 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 10,
    },
    {
      level: 6,
      cost: { dark: 110000 },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 12,
    },
    {
      level: 7,
      cost: { dark: 140000 },
      upgrade_time: 864000, // 10d
      upgrade_building_level_required: 13,
    },
    {
      level: 8,
      cost: { dark: 180000 },
      upgrade_time: 1080000, // 12d 12h
      upgrade_building_level_required: 14,
    },
  ],
};

export const headhunter: ArmyItem = {
  category: 'troop',
  name: 'Headhunter',
  unlock_building_level_required: 9,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 57500 },
      upgrade_time: 309600, // 8d 6h
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: { dark: 90000 },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 11,
    },
  ],
};

export const apprenticeWarden: ArmyItem = {
  category: 'troop',
  name: 'Apprentice Warden',
  unlock_building_level_required: 10,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 90000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 11,
    },
    {
      level: 3,
      cost: { dark: 135000 },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 12,
    },
    {
      level: 4,
      cost: { dark: 160000 },
      upgrade_time: 950400, // 11d
      upgrade_building_level_required: 13,
    },
  ],
};

export const druid: ArmyItem = {
  category: 'troop',
  name: 'Druid',
  unlock_building_level_required: 11,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 125000 },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 12,
    },
    {
      level: 3,
      cost: { dark: 175000 },
      upgrade_time: 1209600, // 14d
      upgrade_building_level_required: 13,
    },
    {
      level: 4,
      cost: { dark: 187500 },
      upgrade_time: 1296000, // 15d
      upgrade_building_level_required: 14,
    },
  ],
};

export const lightningSpell: ArmyItem = {
  category: 'spell',
  name: 'Lightning Spell',
  unlock_building_level_required: 1,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 50000 },
      upgrade_time: 14400, // 4h
      upgrade_building_level_required: 1,
    },
    {
      level: 3,
      cost: { elixir: 100000 },
      upgrade_time: 28800, // 8h
      upgrade_building_level_required: 2,
    },
    {
      level: 4,
      cost: { elixir: 200000 },
      upgrade_time: 43200, // 12h
      upgrade_building_level_required: 3,
    },
    {
      level: 5,
      cost: { elixir: 600000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: { elixir: 1500000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 7,
    },
    {
      level: 7,
      cost: { elixir: 2500000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 8,
    },
    {
      level: 8,
      cost: { elixir: 4200000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 9,
    },
    {
      level: 9,
      cost: { elixir: 6300000 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 10,
    },
    {
      level: 10,
      cost: { elixir: 10000000 },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 13,
    },
    {
      level: 11,
      cost: { elixir: 13500000 },
      upgrade_time: 950400, // 11d
      upgrade_building_level_required: 14,
    },
    {
      level: 12,
      cost: { elixir: 18500000 },
      upgrade_time: 1209600, // 14d
      upgrade_building_level_required: 15,
    },
  ],
};

export const healingSpell: ArmyItem = {
  category: 'spell',
  name: 'Healing Spell',
  unlock_building_level_required: 2,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 75000 },
      upgrade_time: 18000, // 5h
      upgrade_building_level_required: 2,
    },
    {
      level: 3,
      cost: { elixir: 150000 },
      upgrade_time: 36000, // 10h
      upgrade_building_level_required: 4,
    },
    {
      level: 4,
      cost: { elixir: 300000 },
      upgrade_time: 72000, // 20h
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: { elixir: 900000 },
      upgrade_time: 144000, // 1d 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: { elixir: 1800000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 7,
    },
    {
      level: 7,
      cost: { elixir: 3000000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 8,
    },
    {
      level: 8,
      cost: { elixir: 6000000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 11,
    },
    {
      level: 9,
      cost: { elixir: 11000000 },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 13,
    },
    {
      level: 10,
      cost: { elixir: 14000000 },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 14,
    },
    {
      level: 11,
      cost: { elixir: 19000000 },
      upgrade_time: 1296000, // 15d
      upgrade_building_level_required: 15,
    },
  ],
};

export const rageSpell: ArmyItem = {
  category: 'spell',
  name: 'Rage Spell',
  unlock_building_level_required: 3,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 400000 },
      upgrade_time: 43200, // 12h
      upgrade_building_level_required: 3,
    },
    {
      level: 3,
      cost: { elixir: 800000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 4,
    },
    {
      level: 4,
      cost: { elixir: 1600000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: { elixir: 2400000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: { elixir: 5000000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 10,
    },
  ],
};

export const jumpSpell: ArmyItem = {
  category: 'spell',
  name: 'Jump Spell',
  unlock_building_level_required: 4,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 1000000 },
      upgrade_time: 144000, // 1d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 3,
      cost: { elixir: 2000000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: { elixir: 5000000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 11,
    },
    {
      level: 5,
      cost: { elixir: 8000000 },
      upgrade_time: 576000, // 6d 12h
      upgrade_building_level_required: 13,
    },
  ],
};

export const freezeSpell: ArmyItem = {
  category: 'spell',
  name: 'Freeze Spell',
  unlock_building_level_required: 4,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 1200000 },
      upgrade_time: 144000, // 1d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 3,
      cost: { elixir: 1700000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: { elixir: 3000000 },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 8,
    },
    {
      level: 5,
      cost: { elixir: 4200000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 8,
    },
    {
      level: 6,
      cost: { elixir: 6000000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 9,
    },
    {
      level: 7,
      cost: { elixir: 7000000 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 10,
    },
  ],
};

export const cloneSpell: ArmyItem = {
  category: 'spell',
  name: 'Clone Spell',
  unlock_building_level_required: 5,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 1500000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 8,
    },
    {
      level: 3,
      cost: { elixir: 2500000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: { elixir: 3000000 },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 5,
      cost: { elixir: 4000000 },
      upgrade_time: 345600, // 3d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 6,
      cost: { elixir: 5000000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 11,
    },
    {
      level: 7,
      cost: { elixir: 8000000 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 12,
    },
    {
      level: 8,
      cost: { elixir: 9000000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 13,
    },
  ],
};

export const invincibilitySpell: ArmyItem = {
  category: 'spell',
  name: 'Invincibility Spell',
  unlock_building_level_required: 6,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 5000000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 9,
    },
    {
      level: 3,
      cost: { elixir: 6000000 },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 10,
    },
    {
      level: 4,
      cost: { elixir: 7000000 },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 11,
    },
  ],
};

export const recallSpell: ArmyItem = {
  category: 'spell',
  name: 'Recall Spell',
  unlock_building_level_required: 7,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 7500000 },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 11,
    },
    {
      level: 3,
      cost: { elixir: 8000000 },
      upgrade_time: 994800, // 11d 12h
      upgrade_building_level_required: 12,
    },
    {
      level: 4,
      cost: { elixir: 9000000 },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 13,
    },
    {
      level: 5,
      cost: { elixir: 13000000 },
      upgrade_time: 1123200, // 13d
      upgrade_building_level_required: 14,
    },
    {
      level: 6,
      cost: { elixir: 21000000 },
      upgrade_time: 1296000, // 15d
      upgrade_building_level_required: 15,
    },
  ],
};

export const reviveSpell: ArmyItem = {
  category: 'spell',
  name: 'Revive Spell',
  unlock_building_level_required: 8,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { elixir: 18000000 },
      upgrade_time: 864000, // 10d
      upgrade_building_level_required: 13,
    },
    {
      level: 3,
      cost: { elixir: 20000000 },
      upgrade_time: 1209600, // 14d
      upgrade_building_level_required: 14,
    },
    {
      level: 4,
      cost: { elixir: 22000000 },
      upgrade_time: 1382400, // 16d
      upgrade_building_level_required: 15,
    },
  ],
};

export const poisonSpell: ArmyItem = {
  category: 'spell',
  name: 'Poison Spell',
  unlock_building_level_required: 1,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 5000 },
      upgrade_time: 28800, // 8h
      upgrade_building_level_required: 6,
    },
    {
      level: 3,
      cost: { dark: 10000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 7,
    },
    {
      level: 4,
      cost: { dark: 21500 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 5,
      cost: { dark: 35000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 9,
    },
    {
      level: 6,
      cost: { dark: 55000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 10,
    },
    {
      level: 7,
      cost: { dark: 77500 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 11,
    },
    {
      level: 8,
      cost: { dark: 100000 },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 12,
    },
    {
      level: 9,
      cost: { dark: 135000 },
      upgrade_time: 864000, // 10d
      upgrade_building_level_required: 13,
    },
    {
      level: 10,
      cost: { dark: 175000 },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 14,
    },
  ],
};

export const earthquakeSpell: ArmyItem = {
  category: 'spell',
  name: 'Earthquake Spell',
  unlock_building_level_required: 2,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 6000 },
      upgrade_time: 64800, // 18h
      upgrade_building_level_required: 6,
    },
    {
      level: 3,
      cost: { dark: 12000 },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 4,
      cost: { dark: 25500 },
      upgrade_time: 396000, // 4d 6h
      upgrade_building_level_required: 8,
    },
    {
      level: 5,
      cost: { dark: 42000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 9,
    },
  ],
};

export const hasteSpell: ArmyItem = {
  category: 'spell',
  name: 'Haste Spell',
  unlock_building_level_required: 3,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 8000 },
      upgrade_time: 43200, // 1d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 3,
      cost: { dark: 17000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: { dark: 30000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 8,
    },
    {
      level: 5,
      cost: { dark: 38500 },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 9,
    },
  ],
};

export const skeletonSpell: ArmyItem = {
  category: 'spell',
  name: 'Skeleton Spell',
  unlock_building_level_required: 4,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 11000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 8,
    },
    {
      level: 3,
      cost: { dark: 17000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: { dark: 25000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 9,
    },
    {
      level: 5,
      cost: { dark: 40000 },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 10,
    },
    {
      level: 6,
      cost: { dark: 50000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 10,
    },
    {
      level: 7,
      cost: { dark: 75000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 11,
    },
    {
      level: 8,
      cost: { dark: 135000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 13,
    },
  ],
};

export const batSpell: ArmyItem = {
  category: 'spell',
  name: 'Bat Spell',
  unlock_building_level_required: 5,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 13000 },
      upgrade_time: 90000, // 1d 6h
      upgrade_building_level_required: 8,
    },
    {
      level: 3,
      cost: { dark: 25500 },
      upgrade_time: 172800, // 2d 8h
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: { dark: 35000 },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 5,
      cost: { dark: 47500 },
      upgrade_time: 345600, // 4d 12h
      upgrade_building_level_required: 10,
    },
    {
      level: 6,
      cost: { dark: 140000 },
      upgrade_time: 734400, // 8d 12h
      upgrade_building_level_required: 13,
    },
  ],
};

export const overgrowthSpell: ArmyItem = {
  category: 'spell',
  name: 'Overgrowth Spell',
  unlock_building_level_required: 6,
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: { dark: 62500 },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: { dark: 125000 },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 12,
    },
    {
      level: 4,
      cost: { dark: 175000 },
      upgrade_time: 1123200, // 13d
      upgrade_building_level_required: 14,
    },
  ],
};

export const wallWrecker: ArmyItem = {
  category: 'siege_machine',
  unlock_building_level_required: 1,
  name: 'Wall Wrecker',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 2500000,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: {
        elixir: 3500000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 10,
    },
    {
      level: 4,
      cost: {
        elixir: 6500000,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 11,
    },
    {
      level: 5,
      cost: {
        elixir: 10000000,
      },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 13,
    },
  ],
};

export const battleBlimp: ArmyItem = {
  category: 'siege_machine',
  unlock_building_level_required: 2,
  name: 'Battle Blimp',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 2500000,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: {
        elixir: 3500000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 10,
    },
    {
      level: 4,
      cost: {
        elixir: 6500000,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 11,
    },
  ],
};

export const stoneSlammer: ArmyItem = {
  category: 'siege_machine',
  unlock_building_level_required: 3,
  name: 'Stone Slammer',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 2500000,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: {
        elixir: 3500000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 10,
    },
    {
      level: 4,
      cost: {
        elixir: 6500000,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 11,
    },
    {
      level: 5,
      cost: {
        elixir: 10000000,
      },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 13,
    },
  ],
};

export const siegeBarracks: ArmyItem = {
  category: 'siege_machine',
  unlock_building_level_required: 4,
  name: 'Siege Barracks',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 3500000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: {
        elixir: 5000000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 10,
    },
    {
      level: 4,
      cost: {
        elixir: 8000000,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 11,
    },
    {
      level: 5,
      cost: {
        elixir: 18000000,
      },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 14,
    },
  ],
};

export const logLauncher: ArmyItem = {
  category: 'siege_machine',
  unlock_building_level_required: 5,
  name: 'Log Launcher',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 3200000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: {
        elixir: 4500000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 10,
    },
    {
      level: 4,
      cost: {
        elixir: 7500000,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 11,
    },
    {
      level: 5,
      cost: {
        elixir: 18000000,
      },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 14,
    },
  ],
};

export const flameFlinger: ArmyItem = {
  category: 'siege_machine',
  unlock_building_level_required: 6,
  name: 'Flame Flinger',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 5500000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: {
        elixir: 8000000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 10,
    },
    {
      level: 4,
      cost: {
        elixir: 10000000,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 11,
    },
    {
      level: 5,
      cost: {
        elixir: 18000000,
      },
      upgrade_time: 1036800, // 12d
      upgrade_building_level_required: 14,
    },
  ],
};

export const battleDrill: ArmyItem = {
  category: 'siege_machine',
  unlock_building_level_required: 7,
  name: 'Battle Drill',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 0,
    },
    {
      level: 2,
      cost: {
        elixir: 6000000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 13,
    },
    {
      level: 3,
      cost: {
        elixir: 8500000,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 13,
    },
    {
      level: 4,
      cost: {
        elixir: 10000000,
      },
      upgrade_time: 777600, // 9d
      upgrade_building_level_required: 13,
    },
    {
      level: 5,
      cost: {
        elixir: 19000000,
      },
      upgrade_time: 1185600, // 13d 12h
      upgrade_building_level_required: 15,
    },
  ],
};

export const lassi: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 1,
  name: 'L.A.S.S.I',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 1,
    },
    {
      level: 2,
      cost: {
        dark: 67500,
      },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 1,
    },
    {
      level: 3,
      cost: {
        dark: 75000,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 1,
    },
    {
      level: 4,
      cost: {
        dark: 82500,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 1,
    },
    {
      level: 5,
      cost: {
        dark: 90000,
      },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 1,
    },
    {
      level: 6,
      cost: {
        dark: 97500,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 1,
    },
    {
      level: 7,
      cost: {
        dark: 105000,
      },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 1,
    },
    {
      level: 8,
      cost: {
        dark: 112500,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 1,
    },
    {
      level: 9,
      cost: {
        dark: 120000,
      },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 1,
    },
    {
      level: 10,
      cost: {
        dark: 127500,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 1,
    },
    {
      level: 11,
      cost: {
        dark: 135000,
      },
      upgrade_time: 475200, // 5d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 12,
      cost: {
        dark: 142500,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 5,
    },
    {
      level: 13,
      cost: {
        dark: 150000,
      },
      upgrade_time: 561600, // 6d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 14,
      cost: {
        dark: 157500,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 5,
    },
    {
      level: 15,
      cost: {
        dark: 165000,
      },
      upgrade_time: 648000, // 7d 12h
      upgrade_building_level_required: 5,
    },
  ],
};

export const electroOwl: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 2,
  name: 'Electro Owl',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 2,
    },
    {
      level: 2,
      cost: {
        dark: 86250,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 2,
    },
    {
      level: 3,
      cost: {
        dark: 97500,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 2,
    },
    {
      level: 4,
      cost: {
        dark: 105000,
      },
      upgrade_time: 207360, // 2d 12h
      upgrade_building_level_required: 2,
    },
    {
      level: 5,
      cost: {
        dark: 116250,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 2,
    },
    {
      level: 6,
      cost: {
        dark: 123750,
      },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 2,
    },
    {
      level: 7,
      cost: {
        dark: 135000,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 2,
    },
    {
      level: 8,
      cost: {
        dark: 142500,
      },
      upgrade_time: 460800, // 5d 22h
      upgrade_building_level_required: 2,
    },
    {
      level: 9,
      cost: {
        dark: 153750,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 2,
    },
    {
      level: 10,
      cost: {
        dark: 161250,
      },
      upgrade_time: 567000, // 6d 12h
      upgrade_building_level_required: 2,
    },
    {
      level: 11,
      cost: {
        dark: 172500,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 9,
    },
    {
      level: 12,
      cost: {
        dark: 187500,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 13,
      cost: {
        dark: 198750,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 14,
      cost: {
        dark: 213750,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 15,
      cost: {
        dark: 225000,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
  ],
};

export const mightyYak: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 3,
  name: 'Mighty Yak',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 3,
    },
    {
      level: 2,
      cost: {
        dark: 90000,
      },
      upgrade_time: 129600, // 1d
      upgrade_building_level_required: 3,
    },
    {
      level: 3,
      cost: {
        dark: 97500,
      },
      upgrade_time: 172800, // 1d 12h
      upgrade_building_level_required: 3,
    },
    {
      level: 4,
      cost: {
        dark: 105000,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 3,
    },
    {
      level: 5,
      cost: {
        dark: 112500,
      },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 3,
    },
    {
      level: 6,
      cost: {
        dark: 120000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 3,
    },
    {
      level: 7,
      cost: {
        dark: 127500,
      },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 3,
    },
    {
      level: 8,
      cost: {
        dark: 135000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 3,
    },
    {
      level: 9,
      cost: {
        dark: 142500,
      },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 3,
    },
    {
      level: 10,
      cost: {
        dark: 150000,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 3,
    },
    {
      level: 11,
      cost: {
        dark: 157500,
      },
      upgrade_time: 475200, // 5d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 12,
      cost: {
        dark: 165000,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 7,
    },
    {
      level: 13,
      cost: {
        dark: 172500,
      },
      upgrade_time: 561600, // 6d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 14,
      cost: {
        dark: 180000,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 7,
    },
    {
      level: 15,
      cost: {
        dark: 187500,
      },
      upgrade_time: 648000, // 7d 12h
      upgrade_building_level_required: 7,
    },
  ],
};

export const unicorn: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 4,
  name: 'Unicorn',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 4,
    },
    {
      level: 2,
      cost: {
        dark: 135000,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 4,
    },
    {
      level: 3,
      cost: {
        dark: 142500,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 4,
    },
    {
      level: 4,
      cost: {
        dark: 150000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 4,
    },
    {
      level: 5,
      cost: {
        dark: 157500,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 4,
    },
    {
      level: 6,
      cost: {
        dark: 165000,
      },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 4,
    },
    {
      level: 7,
      cost: {
        dark: 172500,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 4,
    },
    {
      level: 8,
      cost: {
        dark: 180000,
      },
      upgrade_time: 460800, // 5d 22h
      upgrade_building_level_required: 4,
    },
    {
      level: 9,
      cost: {
        dark: 187500,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 4,
    },
    {
      level: 10,
      cost: {
        dark: 195000,
      },
      upgrade_time: 567000, // 6d 12h
      upgrade_building_level_required: 4,
    },
  ],
};

export const frosty: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 5,
  name: 'Frosty',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 5,
    },
    {
      level: 2,
      cost: {
        dark: 135000,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 3,
      cost: {
        dark: 142500,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 5,
    },
    {
      level: 4,
      cost: {
        dark: 146250,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 5,
    },
    {
      level: 5,
      cost: {
        dark: 150000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 5,
    },
    {
      level: 6,
      cost: {
        dark: 157500,
      },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 7,
      cost: {
        dark: 161250,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 5,
    },
    {
      level: 8,
      cost: {
        dark: 168750,
      },
      upgrade_time: 460800, // 5d 22h
      upgrade_building_level_required: 5,
    },
    {
      level: 9,
      cost: {
        dark: 172500,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 5,
    },
    {
      level: 10,
      cost: {
        dark: 180000,
      },
      upgrade_time: 567000, // 6d 12h
      upgrade_building_level_required: 5,
    },
  ],
};

export const diggy: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 6,
  name: 'Diggy',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 6,
    },
    {
      level: 2,
      cost: {
        dark: 138750,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 3,
      cost: {
        dark: 146250,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 6,
    },
    {
      level: 4,
      cost: {
        dark: 150000,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 6,
    },
    {
      level: 5,
      cost: {
        dark: 157500,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 6,
    },
    {
      level: 6,
      cost: {
        dark: 161250,
      },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 7,
      cost: {
        dark: 168750,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 6,
    },
    {
      level: 8,
      cost: {
        dark: 172500,
      },
      upgrade_time: 460800, // 5d 22h
      upgrade_building_level_required: 6,
    },
    {
      level: 9,
      cost: {
        dark: 180000,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 6,
    },
    {
      level: 10,
      cost: {
        dark: 183750,
      },
      upgrade_time: 567000, // 6d 12h
      upgrade_building_level_required: 6,
    },
  ],
};

export const poisonLizard: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 7,
  name: 'Poison Lizard',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 7,
    },
    {
      level: 2,
      cost: {
        dark: 120000,
      },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 7,
    },
    {
      level: 3,
      cost: {
        dark: 123750,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 4,
      cost: {
        dark: 127500,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 7,
    },
    {
      level: 5,
      cost: {
        dark: 131250,
      },
      upgrade_time: 259200, // 2d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 6,
      cost: {
        dark: 135000,
      },
      upgrade_time: 345600, // 3d
      upgrade_building_level_required: 7,
    },
    {
      level: 7,
      cost: {
        dark: 138750,
      },
      upgrade_time: 432000, // 3d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 8,
      cost: {
        dark: 142500,
      },
      upgrade_time: 460800, // 4d
      upgrade_building_level_required: 7,
    },
    {
      level: 9,
      cost: {
        dark: 146250,
      },
      upgrade_time: 518400, // 4d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 10,
      cost: {
        dark: 150000,
      },
      upgrade_time: 576000, // 5d
      upgrade_building_level_required: 7,
    },
  ],
};

export const phoenix: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 8,
  name: 'Phoenix',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 8,
    },
    {
      level: 2,
      cost: {
        dark: 146250,
      },
      upgrade_time: 129600, // 1d 12h
      upgrade_building_level_required: 8,
    },
    {
      level: 3,
      cost: {
        dark: 153750,
      },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 8,
    },
    {
      level: 4,
      cost: {
        dark: 157500,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 8,
    },
    {
      level: 5,
      cost: {
        dark: 165000,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 8,
    },
    {
      level: 6,
      cost: {
        dark: 168750,
      },
      upgrade_time: 388800, // 4d 12h
      upgrade_building_level_required: 8,
    },
    {
      level: 7,
      cost: {
        dark: 176250,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 8,
    },
    {
      level: 8,
      cost: {
        dark: 180000,
      },
      upgrade_time: 460800, // 5d 22h
      upgrade_building_level_required: 8,
    },
    {
      level: 9,
      cost: {
        dark: 187500,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 8,
    },
    {
      level: 10,
      cost: {
        dark: 191250,
      },
      upgrade_time: 567000, // 6d 12h
      upgrade_building_level_required: 8,
    },
  ],
};

export const spiritFox: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 9,
  name: 'Spirit Fox',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 9,
    },
    {
      level: 2,
      cost: {
        dark: 168750,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 9,
    },
    {
      level: 3,
      cost: {
        dark: 176250,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 9,
    },
    {
      level: 4,
      cost: {
        dark: 183750,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 9,
    },
    {
      level: 5,
      cost: {
        dark: 191250,
      },
      upgrade_time: 475200, // 5d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 6,
      cost: {
        dark: 198750,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 9,
    },
    {
      level: 7,
      cost: {
        dark: 206250,
      },
      upgrade_time: 567000, // 6d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 8,
      cost: {
        dark: 213750,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 9,
    },
    {
      level: 9,
      cost: {
        dark: 221250,
      },
      upgrade_time: 648000, // 7d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 10,
      cost: {
        dark: 236250,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
  ],
};

export const angryJelly: ArmyItem = {
  category: 'pet',
  unlock_building_level_required: 10,
  name: 'Angry Jelly',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 0,
      upgrade_building_level_required: 10,
    },
    {
      level: 2,
      cost: {
        dark: 168750,
      },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 10,
    },
    {
      level: 3,
      cost: {
        dark: 176250,
      },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 10,
    },
    {
      level: 4,
      cost: {
        dark: 183750,
      },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 10,
    },
    {
      level: 5,
      cost: {
        dark: 191250,
      },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 10,
    },
    {
      level: 6,
      cost: {
        dark: 198750,
      },
      upgrade_time: 604800, // 7d
      upgrade_building_level_required: 10,
    },
    {
      level: 7,
      cost: {
        dark: 206250,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 10,
    },
    {
      level: 8,
      cost: {
        dark: 213750,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 10,
    },
    {
      level: 9,
      cost: {
        dark: 221250,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 10,
    },
    {
      level: 10,
      cost: {
        dark: 236250,
      },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 10,
    },
  ],
};

export const barbarianKing: ArmyItem = {
  category: 'hero',
  unlock_building_level_required: 1,
  name: 'Barbarian King',
  levels: [
    {
      level: 1,
      cost: {},
      upgrade_time: 600,
      upgrade_building_level_required: 1,
    },
    {
      level: 2,
      cost: { dark: 5000 },
      upgrade_time: 7200, // 2h
      upgrade_building_level_required: 1,
    },
    {
      level: 3,
      cost: { dark: 5500 },
      upgrade_time: 14400, // 4h
      upgrade_building_level_required: 1,
    },
    {
      level: 4,
      cost: { dark: 6000 },
      upgrade_time: 28800, // 8h
      upgrade_building_level_required: 1,
    },
    {
      level: 5,
      cost: { dark: 6500 },
      upgrade_time: 36000, // 10h
      upgrade_building_level_required: 1,
    },
    {
      level: 6,
      cost: { dark: 7000 },
      upgrade_time: 43200, // 12h
      upgrade_building_level_required: 1,
    },
    {
      level: 7,
      cost: { dark: 7500 },
      upgrade_time: 50400, // 14h
      upgrade_building_level_required: 1,
    },
    {
      level: 8,
      cost: { dark: 8000 },
      upgrade_time: 57600, // 16h
      upgrade_building_level_required: 1,
    },
    {
      level: 9,
      cost: { dark: 8500 },
      upgrade_time: 64800, // 18h
      upgrade_building_level_required: 1,
    },
    {
      level: 10,
      cost: { dark: 10000 },
      upgrade_time: 72000, // 20h
      upgrade_building_level_required: 1,
    },
    {
      level: 11,
      cost: { dark: 10500 },
      upgrade_time: 79200, // 22h
      upgrade_building_level_required: 2,
    },
    {
      level: 12,
      cost: { dark: 11000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 2,
    },
    {
      level: 13,
      cost: { dark: 11500 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 2,
    },
    {
      level: 14,
      cost: { dark: 12000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 2,
    },
    {
      level: 15,
      cost: { dark: 12500 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 2,
    },
    {
      level: 16,
      cost: { dark: 13000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 2,
    },
    {
      level: 17,
      cost: { dark: 13500 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 2,
    },
    {
      level: 18,
      cost: { dark: 14000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 2,
    },
    {
      level: 19,
      cost: { dark: 14500 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 2,
    },
    {
      level: 20,
      cost: { dark: 15000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 2,
    },
    {
      level: 21,
      cost: { dark: 17000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 3,
    },
    {
      level: 22,
      cost: { dark: 19000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 3,
    },
    {
      level: 23,
      cost: { dark: 21000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 3,
    },
    {
      level: 24,
      cost: { dark: 23000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 3,
    },
    {
      level: 25,
      cost: { dark: 25000 },
      upgrade_time: 86400, // 1d
      upgrade_building_level_required: 3,
    },
    {
      level: 26,
      cost: { dark: 27000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 3,
    },
    {
      level: 27,
      cost: { dark: 29000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 3,
    },
    {
      level: 28,
      cost: { dark: 31000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 3,
    },
    {
      level: 29,
      cost: { dark: 33000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 3,
    },
    {
      level: 30,
      cost: { dark: 35000 },
      upgrade_time: 172800, // 2d
      upgrade_building_level_required: 3,
    },
    {
      level: 31,
      cost: { dark: 37000 },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 4,
    },
    {
      level: 32,
      cost: { dark: 39000 },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 4,
    },
    {
      level: 33,
      cost: { dark: 41000 },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 4,
    },
    {
      level: 34,
      cost: { dark: 43000 },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 4,
    },
    {
      level: 35,
      cost: { dark: 45000 },
      upgrade_time: 216000, // 2d 12h
      upgrade_building_level_required: 4,
    },
    {
      level: 36,
      cost: { dark: 47000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 4,
    },
    {
      level: 37,
      cost: { dark: 49000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 4,
    },
    {
      level: 38,
      cost: { dark: 51000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 4,
    },
    {
      level: 39,
      cost: { dark: 53000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 4,
    },
    {
      level: 40,
      cost: { dark: 55000 },
      upgrade_time: 259200, // 3d
      upgrade_building_level_required: 4,
    },
    {
      level: 41,
      cost: { dark: 58000 },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 42,
      cost: { dark: 61000 },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 43,
      cost: { dark: 64000 },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 44,
      cost: { dark: 67000 },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 45,
      cost: { dark: 70000 },
      upgrade_time: 302400, // 3d 12h
      upgrade_building_level_required: 5,
    },
    {
      level: 46,
      cost: { dark: 73000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 5,
    },
    {
      level: 47,
      cost: { dark: 76000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 5,
    },
    {
      level: 48,
      cost: { dark: 79000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 5,
    },
    {
      level: 49,
      cost: { dark: 82000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 5,
    },
    {
      level: 50,
      cost: { dark: 85000 },
      upgrade_time: 345600, // 4d
      upgrade_building_level_required: 5,
    },
    {
      level: 51,
      cost: { dark: 88000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 6,
    },
    {
      level: 52,
      cost: { dark: 91000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 6,
    },
    {
      level: 53,
      cost: { dark: 94000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 6,
    },
    {
      level: 54,
      cost: { dark: 97000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 6,
    },
    {
      level: 55,
      cost: { dark: 100000 },
      upgrade_time: 432000, // 5d
      upgrade_building_level_required: 6,
    },
    {
      level: 56,
      cost: { dark: 103000 },
      upgrade_time: 432000, // 5d 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 57,
      cost: { dark: 106000 },
      upgrade_time: 432000, // 5d 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 58,
      cost: { dark: 109000 },
      upgrade_time: 432000, // 5d 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 59,
      cost: { dark: 112000 },
      upgrade_time: 432000, // 5d 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 60,
      cost: { dark: 115000 },
      upgrade_time: 432000, // 5d 12h
      upgrade_building_level_required: 6,
    },
    {
      level: 61,
      cost: { dark: 119000 },
      upgrade_time: 432000, // 5d 18h
      upgrade_building_level_required: 6,
    },
    {
      level: 62,
      cost: { dark: 123000 },
      upgrade_time: 432000, // 5d 18h
      upgrade_building_level_required: 6,
    },
    {
      level: 63,
      cost: { dark: 127000 },
      upgrade_time: 432000, // 5d 18h
      upgrade_building_level_required: 6,
    },
    {
      level: 64,
      cost: { dark: 131000 },
      upgrade_time: 432000, // 5d 18h
      upgrade_building_level_required: 6,
    },
    {
      level: 65,
      cost: { dark: 135000 },
      upgrade_time: 432000, // 5d 18h
      upgrade_building_level_required: 6,
    },
    {
      level: 66,
      cost: { dark: 139000 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 7,
    },
    {
      level: 67,
      cost: { dark: 143000 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 7,
    },
    {
      level: 68,
      cost: { dark: 147000 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 7,
    },
    {
      level: 69,
      cost: { dark: 151000 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 7,
    },
    {
      level: 70,
      cost: { dark: 155000 },
      upgrade_time: 518400, // 6d
      upgrade_building_level_required: 7,
    },
    {
      level: 71,
      cost: { dark: 160000 },
      upgrade_time: 552000, // 6d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 72,
      cost: { dark: 165000 },
      upgrade_time: 552000, // 6d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 73,
      cost: { dark: 170000 },
      upgrade_time: 552000, // 6d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 74,
      cost: { dark: 175000 },
      upgrade_time: 552000, // 6d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 75,
      cost: { dark: 180000 },
      upgrade_time: 552000, // 6d 12h
      upgrade_building_level_required: 7,
    },
    {
      level: 76,
      cost: { dark: 185000 },
      upgrade_time: 576000, // 7d
      upgrade_building_level_required: 8,
    },
    {
      level: 77,
      cost: { dark: 190000 },
      upgrade_time: 576000, // 7d
      upgrade_building_level_required: 8,
    },
    {
      level: 78,
      cost: { dark: 195000 },
      upgrade_time: 576000, // 7d
      upgrade_building_level_required: 8,
    },
    {
      level: 79,
      cost: { dark: 200000 },
      upgrade_time: 576000, // 7d
      upgrade_building_level_required: 8,
    },
    {
      level: 80,
      cost: { dark: 205000 },
      upgrade_time: 576000, // 7d
      upgrade_building_level_required: 8,
    },
    {
      level: 81,
      cost: { dark: 210000 },
      upgrade_time: 622080, // 7d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 82,
      cost: { dark: 215000 },
      upgrade_time: 622080, // 7d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 83,
      cost: { dark: 220000 },
      upgrade_time: 622080, // 7d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 84,
      cost: { dark: 225000 },
      upgrade_time: 622080, // 7d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 85,
      cost: { dark: 230000 },
      upgrade_time: 622080, // 7d 12h
      upgrade_building_level_required: 9,
    },
    {
      level: 86,
      cost: { dark: 240000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 87,
      cost: { dark: 245000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 88,
      cost: { dark: 250000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 89,
      cost: { dark: 255000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 90,
      cost: { dark: 260000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 91,
      cost: { dark: 270000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 92,
      cost: { dark: 275000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 93,
      cost: { dark: 280000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 94,
      cost: { dark: 290000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 95,
      cost: { dark: 295000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 96,
      cost: { dark: 300000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 97,
      cost: { dark: 310000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 98,
      cost: { dark: 320000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 99,
      cost: { dark: 330000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
    {
      level: 100,
      cost: { dark: 340000 },
      upgrade_time: 691200, // 8d
      upgrade_building_level_required: 9,
    },
  ],
};

export const archerQueen: ArmyItem = {
  category: 'hero',
  unlock_building_level_required: 2,
  name: 'Archer Queen',
  levels: [
    { level: 1, cost: { dark: 0 }, upgrade_time: 600, upgrade_building_level_required: 2 }, // 10m
    { level: 2, cost: { dark: 5000 }, upgrade_time: 7200, upgrade_building_level_required: 2 }, // 2h
    { level: 3, cost: { dark: 5500 }, upgrade_time: 14400, upgrade_building_level_required: 2 }, // 4h
    { level: 4, cost: { dark: 6000 }, upgrade_time: 28800, upgrade_building_level_required: 2 }, // 8h
    { level: 5, cost: { dark: 6500 }, upgrade_time: 36000, upgrade_building_level_required: 2 }, // 10h
    { level: 6, cost: { dark: 7000 }, upgrade_time: 43200, upgrade_building_level_required: 2 }, // 12h
    { level: 7, cost: { dark: 7500 }, upgrade_time: 50400, upgrade_building_level_required: 2 }, // 14h
    { level: 8, cost: { dark: 8000 }, upgrade_time: 57600, upgrade_building_level_required: 2 }, // 16h
    { level: 9, cost: { dark: 8500 }, upgrade_time: 64800, upgrade_building_level_required: 2 }, // 18h
    { level: 10, cost: { dark: 10000 }, upgrade_time: 72000, upgrade_building_level_required: 2 }, // 20h
    { level: 11, cost: { dark: 10500 }, upgrade_time: 79200, upgrade_building_level_required: 3 }, // 22h
    { level: 12, cost: { dark: 11000 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 13, cost: { dark: 11500 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 14, cost: { dark: 12000 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 15, cost: { dark: 12500 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 16, cost: { dark: 13000 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 17, cost: { dark: 13500 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 18, cost: { dark: 14000 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 19, cost: { dark: 14500 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 20, cost: { dark: 15000 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 21, cost: { dark: 17000 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 22, cost: { dark: 19000 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 23, cost: { dark: 21000 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 24, cost: { dark: 23000 }, upgrade_time: 86400, upgrade_building_level_required: 3 }, // 1d
    { level: 25, cost: { dark: 25000 }, upgrade_time: 90000, upgrade_building_level_required: 3 }, // 1d 6h
    { level: 26, cost: { dark: 27000 }, upgrade_time: 172800, upgrade_building_level_required: 3 }, // 2d
    { level: 27, cost: { dark: 29000 }, upgrade_time: 172800, upgrade_building_level_required: 3 }, // 2d
    { level: 28, cost: { dark: 31000 }, upgrade_time: 172800, upgrade_building_level_required: 3 }, // 2d
    { level: 29, cost: { dark: 33000 }, upgrade_time: 172800, upgrade_building_level_required: 3 }, // 2d
    { level: 30, cost: { dark: 35000 }, upgrade_time: 172800, upgrade_building_level_required: 3 }, // 2d
    { level: 31, cost: { dark: 37000 }, upgrade_time: 216000, upgrade_building_level_required: 4 }, // 2d 12h
    { level: 32, cost: { dark: 39000 }, upgrade_time: 216000, upgrade_building_level_required: 4 }, // 2d 12h
    { level: 33, cost: { dark: 41000 }, upgrade_time: 216000, upgrade_building_level_required: 4 }, // 2d 12h
    { level: 34, cost: { dark: 43000 }, upgrade_time: 216000, upgrade_building_level_required: 4 }, // 2d 12h
    { level: 35, cost: { dark: 45000 }, upgrade_time: 216000, upgrade_building_level_required: 4 }, // 2d 12h
    { level: 36, cost: { dark: 47000 }, upgrade_time: 259200, upgrade_building_level_required: 4 }, // 3d
    { level: 37, cost: { dark: 49000 }, upgrade_time: 259200, upgrade_building_level_required: 4 }, // 3d
    { level: 38, cost: { dark: 51000 }, upgrade_time: 259200, upgrade_building_level_required: 4 }, // 3d
    { level: 39, cost: { dark: 53000 }, upgrade_time: 259200, upgrade_building_level_required: 4 }, // 3d
    { level: 40, cost: { dark: 55000 }, upgrade_time: 259200, upgrade_building_level_required: 4 }, // 3d
    { level: 41, cost: { dark: 58000 }, upgrade_time: 345600, upgrade_building_level_required: 5 }, // 4d
    { level: 42, cost: { dark: 61000 }, upgrade_time: 345600, upgrade_building_level_required: 5 }, // 4d
    { level: 43, cost: { dark: 64000 }, upgrade_time: 345600, upgrade_building_level_required: 5 }, // 4d
    { level: 44, cost: { dark: 67000 }, upgrade_time: 345600, upgrade_building_level_required: 5 }, // 4d
    { level: 45, cost: { dark: 70000 }, upgrade_time: 345600, upgrade_building_level_required: 5 }, // 4d
    { level: 46, cost: { dark: 73000 }, upgrade_time: 432000, upgrade_building_level_required: 5 }, // 5d
    { level: 47, cost: { dark: 76000 }, upgrade_time: 432000, upgrade_building_level_required: 5 }, // 5d
    { level: 48, cost: { dark: 79000 }, upgrade_time: 432000, upgrade_building_level_required: 5 }, // 5d
    { level: 49, cost: { dark: 82000 }, upgrade_time: 432000, upgrade_building_level_required: 5 }, // 5d
    { level: 50, cost: { dark: 85000 }, upgrade_time: 432000, upgrade_building_level_required: 5 }, // 5d
    { level: 51, cost: { dark: 88000 }, upgrade_time: 468000, upgrade_building_level_required: 6 }, // 5d 12h
    { level: 52, cost: { dark: 91000 }, upgrade_time: 468000, upgrade_building_level_required: 6 }, // 5d 12h
    { level: 53, cost: { dark: 94000 }, upgrade_time: 468000, upgrade_building_level_required: 6 }, // 5d 12h
    { level: 54, cost: { dark: 97000 }, upgrade_time: 468000, upgrade_building_level_required: 6 }, // 5d 12h
    { level: 55, cost: { dark: 100000 }, upgrade_time: 468000, upgrade_building_level_required: 6 }, // 5d 12h
    { level: 56, cost: { dark: 103000 }, upgrade_time: 504000, upgrade_building_level_required: 6 }, // 5d 18h
    { level: 57, cost: { dark: 106000 }, upgrade_time: 504000, upgrade_building_level_required: 6 }, // 5d 18h
    { level: 58, cost: { dark: 109000 }, upgrade_time: 504000, upgrade_building_level_required: 6 }, // 5d 18h
    { level: 59, cost: { dark: 112000 }, upgrade_time: 504000, upgrade_building_level_required: 6 }, // 5d 18h
    { level: 60, cost: { dark: 115000 }, upgrade_time: 504000, upgrade_building_level_required: 6 }, // 5d 18h
    { level: 61, cost: { dark: 119000 }, upgrade_time: 518400, upgrade_building_level_required: 6 }, // 6d
    { level: 62, cost: { dark: 123000 }, upgrade_time: 518400, upgrade_building_level_required: 6 }, // 6d
    { level: 63, cost: { dark: 127000 }, upgrade_time: 518400, upgrade_building_level_required: 6 }, // 6d
    { level: 64, cost: { dark: 131000 }, upgrade_time: 518400, upgrade_building_level_required: 6 }, // 6d
    { level: 65, cost: { dark: 135000 }, upgrade_time: 518400, upgrade_building_level_required: 6 }, // 6d
    { level: 66, cost: { dark: 139000 }, upgrade_time: 576000, upgrade_building_level_required: 7 }, // 6d 12h
    { level: 67, cost: { dark: 143000 }, upgrade_time: 576000, upgrade_building_level_required: 7 }, // 6d 12h
    { level: 68, cost: { dark: 147000 }, upgrade_time: 576000, upgrade_building_level_required: 7 }, // 6d 12h
    { level: 69, cost: { dark: 151000 }, upgrade_time: 576000, upgrade_building_level_required: 7 }, // 6d 12h
    { level: 70, cost: { dark: 155000 }, upgrade_time: 576000, upgrade_building_level_required: 7 }, // 6d 12h
    { level: 71, cost: { dark: 160000 }, upgrade_time: 604800, upgrade_building_level_required: 7 }, // 7d
    { level: 72, cost: { dark: 165000 }, upgrade_time: 604800, upgrade_building_level_required: 7 }, // 7d
    { level: 73, cost: { dark: 170000 }, upgrade_time: 604800, upgrade_building_level_required: 7 }, // 7d
    { level: 74, cost: { dark: 175000 }, upgrade_time: 604800, upgrade_building_level_required: 7 }, // 7d
    { level: 75, cost: { dark: 180000 }, upgrade_time: 604800, upgrade_building_level_required: 7 }, // 7d
    { level: 76, cost: { dark: 185000 }, upgrade_time: 648000, upgrade_building_level_required: 8 }, // 7d 12h
    { level: 77, cost: { dark: 190000 }, upgrade_time: 648000, upgrade_building_level_required: 8 }, // 7d 12h
    { level: 78, cost: { dark: 195000 }, upgrade_time: 648000, upgrade_building_level_required: 8 }, // 7d 12h
    { level: 79, cost: { dark: 200000 }, upgrade_time: 648000, upgrade_building_level_required: 8 }, // 7d 12h
    { level: 80, cost: { dark: 205000 }, upgrade_time: 648000, upgrade_building_level_required: 8 }, // 7d 12h
    { level: 81, cost: { dark: 210000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 82, cost: { dark: 215000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 83, cost: { dark: 220000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 84, cost: { dark: 225000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 85, cost: { dark: 230000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 86, cost: { dark: 240000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 87, cost: { dark: 250000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 88, cost: { dark: 260000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 89, cost: { dark: 270000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 90, cost: { dark: 280000 }, upgrade_time: 691200, upgrade_building_level_required: 8 }, // 8d
    { level: 91, cost: { dark: 290000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 92, cost: { dark: 300000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 93, cost: { dark: 320000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 94, cost: { dark: 320000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 95, cost: { dark: 330000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 96, cost: { dark: 340000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 97, cost: { dark: 350000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 98, cost: { dark: 360000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 99, cost: { dark: 370000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 100, cost: { dark: 380000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
  ],
};

export const minionPrince: ArmyItem = {
  category: 'hero',
  unlock_building_level_required: 3,
  name: 'Minion Prince',
  levels: [
    { level: 1, cost: { dark: 0 }, upgrade_time: 0, upgrade_building_level_required: 3 },
    { level: 2, cost: { dark: 5000 }, upgrade_time: 7200, upgrade_building_level_required: 3 }, // 2h
    { level: 3, cost: { dark: 5500 }, upgrade_time: 14400, upgrade_building_level_required: 3 }, // 4h
    { level: 4, cost: { dark: 6000 }, upgrade_time: 28800, upgrade_building_level_required: 3 }, // 8h
    { level: 5, cost: { dark: 6500 }, upgrade_time: 36000, upgrade_building_level_required: 3 }, // 10h
    { level: 6, cost: { dark: 7000 }, upgrade_time: 43200, upgrade_building_level_required: 3 }, // 12h
    { level: 7, cost: { dark: 7500 }, upgrade_time: 50400, upgrade_building_level_required: 3 }, // 14h
    { level: 8, cost: { dark: 8000 }, upgrade_time: 57600, upgrade_building_level_required: 3 }, // 16h
    { level: 9, cost: { dark: 8500 }, upgrade_time: 64800, upgrade_building_level_required: 3 }, // 18h
    { level: 10, cost: { dark: 10000 }, upgrade_time: 72000, upgrade_building_level_required: 3 }, // 20h
    { level: 11, cost: { dark: 10500 }, upgrade_time: 79200, upgrade_building_level_required: 4 }, // 22h
    { level: 12, cost: { dark: 11000 }, upgrade_time: 86400, upgrade_building_level_required: 4 }, // 1d
    { level: 13, cost: { dark: 11500 }, upgrade_time: 86400, upgrade_building_level_required: 4 }, // 1d
    { level: 14, cost: { dark: 12000 }, upgrade_time: 86400, upgrade_building_level_required: 4 }, // 1d
    { level: 15, cost: { dark: 12500 }, upgrade_time: 86400, upgrade_building_level_required: 4 }, // 1d
    { level: 16, cost: { dark: 13000 }, upgrade_time: 86400, upgrade_building_level_required: 4 }, // 1d
    { level: 17, cost: { dark: 13500 }, upgrade_time: 86400, upgrade_building_level_required: 4 }, // 1d
    { level: 18, cost: { dark: 14000 }, upgrade_time: 86400, upgrade_building_level_required: 4 }, // 1d
    { level: 19, cost: { dark: 14500 }, upgrade_time: 86400, upgrade_building_level_required: 4 }, // 1d
    { level: 20, cost: { dark: 15000 }, upgrade_time: 86400, upgrade_building_level_required: 4 }, // 1d
    { level: 21, cost: { dark: 17000 }, upgrade_time: 86400, upgrade_building_level_required: 5 }, // 1d
    { level: 22, cost: { dark: 19000 }, upgrade_time: 86400, upgrade_building_level_required: 5 }, // 1d
    { level: 23, cost: { dark: 21000 }, upgrade_time: 86400, upgrade_building_level_required: 5 }, // 1d
    { level: 24, cost: { dark: 23000 }, upgrade_time: 86400, upgrade_building_level_required: 5 }, // 1d
    { level: 25, cost: { dark: 25000 }, upgrade_time: 86400, upgrade_building_level_required: 5 }, // 1d
    { level: 26, cost: { dark: 27000 }, upgrade_time: 172800, upgrade_building_level_required: 5 }, // 2d
    { level: 27, cost: { dark: 29000 }, upgrade_time: 172800, upgrade_building_level_required: 5 }, // 2d
    { level: 28, cost: { dark: 31000 }, upgrade_time: 172800, upgrade_building_level_required: 5 }, // 2d
    { level: 29, cost: { dark: 33000 }, upgrade_time: 172800, upgrade_building_level_required: 5 }, // 2d
    { level: 30, cost: { dark: 35000 }, upgrade_time: 172800, upgrade_building_level_required: 5 }, // 2d
    { level: 31, cost: { dark: 37000 }, upgrade_time: 216000, upgrade_building_level_required: 6 }, // 2d 12h
    { level: 32, cost: { dark: 39000 }, upgrade_time: 216000, upgrade_building_level_required: 6 }, // 2d 12h
    { level: 33, cost: { dark: 41000 }, upgrade_time: 216000, upgrade_building_level_required: 6 }, // 2d 12h
    { level: 34, cost: { dark: 43000 }, upgrade_time: 216000, upgrade_building_level_required: 6 }, // 2d 12h
    { level: 35, cost: { dark: 45000 }, upgrade_time: 259200, upgrade_building_level_required: 6 }, // 3d
    { level: 36, cost: { dark: 47000 }, upgrade_time: 259200, upgrade_building_level_required: 6 }, // 3d
    { level: 37, cost: { dark: 49000 }, upgrade_time: 259200, upgrade_building_level_required: 6 }, // 3d
    { level: 38, cost: { dark: 51000 }, upgrade_time: 259200, upgrade_building_level_required: 6 }, // 3d
    { level: 39, cost: { dark: 53000 }, upgrade_time: 259200, upgrade_building_level_required: 6 }, // 3d
    { level: 40, cost: { dark: 55000 }, upgrade_time: 259200, upgrade_building_level_required: 6 }, // 3d
    { level: 41, cost: { dark: 60000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 42, cost: { dark: 65000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 43, cost: { dark: 70000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 44, cost: { dark: 75000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 45, cost: { dark: 80000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 46, cost: { dark: 85000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 47, cost: { dark: 90000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 48, cost: { dark: 95000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 49, cost: { dark: 100000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 50, cost: { dark: 105000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 51, cost: { dark: 110000 }, upgrade_time: 518400, upgrade_building_level_required: 8 }, // 6d
    { level: 52, cost: { dark: 115000 }, upgrade_time: 518400, upgrade_building_level_required: 8 }, // 6d
    { level: 53, cost: { dark: 120000 }, upgrade_time: 518400, upgrade_building_level_required: 8 }, // 6d
    { level: 54, cost: { dark: 125000 }, upgrade_time: 518400, upgrade_building_level_required: 8 }, // 6d
    { level: 55, cost: { dark: 130000 }, upgrade_time: 518400, upgrade_building_level_required: 8 }, // 6d
    { level: 56, cost: { dark: 135000 }, upgrade_time: 604800, upgrade_building_level_required: 8 }, // 7d
    { level: 57, cost: { dark: 140000 }, upgrade_time: 604800, upgrade_building_level_required: 8 }, // 7d
    { level: 58, cost: { dark: 145000 }, upgrade_time: 604800, upgrade_building_level_required: 8 }, // 7d
    { level: 59, cost: { dark: 150000 }, upgrade_time: 604800, upgrade_building_level_required: 8 }, // 7d
    { level: 60, cost: { dark: 155000 }, upgrade_time: 604800, upgrade_building_level_required: 8 }, // 7d
    { level: 61, cost: { dark: 160000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 62, cost: { dark: 165000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 63, cost: { dark: 170000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 64, cost: { dark: 175000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 65, cost: { dark: 180000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 66, cost: { dark: 185000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 67, cost: { dark: 190000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 68, cost: { dark: 195000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 69, cost: { dark: 200000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 70, cost: { dark: 205000 }, upgrade_time: 691200, upgrade_building_level_required: 9 }, // 8d
    { level: 71, cost: { dark: 210000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 72, cost: { dark: 215000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 73, cost: { dark: 220000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 74, cost: { dark: 225000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 75, cost: { dark: 230000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 76, cost: { dark: 240000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 77, cost: { dark: 250000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 78, cost: { dark: 260000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 79, cost: { dark: 270000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 80, cost: { dark: 280000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 81, cost: { dark: 290000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 82, cost: { dark: 300000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 83, cost: { dark: 310000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 84, cost: { dark: 320000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 85, cost: { dark: 330000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 86, cost: { dark: 340000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 87, cost: { dark: 350000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 88, cost: { dark: 360000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 89, cost: { dark: 370000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 90, cost: { dark: 380000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
  ],
};

export const grandWarden: ArmyItem = {
  category: 'hero',
  unlock_building_level_required: 5,
  name: 'Grand Warden',
  levels: [
    {
      level: 1,
      cost: { elixir: 1000000 },
      upgrade_time: 20 * 60,
      upgrade_building_level_required: 5, // 20m
    },
    {
      level: 2,
      cost: { elixir: 1000000 },
      upgrade_time: 2 * 60 * 60,
      upgrade_building_level_required: 5, // 2h
    },
    {
      level: 3,
      cost: { elixir: 1100000 },
      upgrade_time: 4 * 60 * 60,
      upgrade_building_level_required: 5, // 4h
    },
    {
      level: 4,
      cost: { elixir: 1200000 },
      upgrade_time: 8 * 60 * 60,
      upgrade_building_level_required: 5, // 8h
    },
    {
      level: 5,
      cost: { elixir: 1400000 },
      upgrade_time: 10 * 60 * 60,
      upgrade_building_level_required: 5, // 10h
    },
    {
      level: 6,
      cost: { elixir: 1500000 },
      upgrade_time: 12 * 60 * 60,
      upgrade_building_level_required: 5, // 12h
    },
    {
      level: 7,
      cost: { elixir: 1700000 },
      upgrade_time: 14 * 60 * 60,
      upgrade_building_level_required: 5, // 14h
    },
    {
      level: 8,
      cost: { elixir: 1800000 },
      upgrade_time: 16 * 60 * 60,
      upgrade_building_level_required: 5, // 16h
    },
    {
      level: 9,
      cost: { elixir: 2000000 },
      upgrade_time: 18 * 60 * 60,
      upgrade_building_level_required: 5, // 18h
    },
    {
      level: 10,
      cost: { elixir: 2300000 },
      upgrade_time: 24 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 11,
      cost: { elixir: 2700000 },
      upgrade_time: 24 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 12,
      cost: { elixir: 3000000 },
      upgrade_time: 24 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 13,
      cost: { elixir: 3400000 },
      upgrade_time: 24 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 14,
      cost: { elixir: 3700000 },
      upgrade_time: 24 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 15,
      cost: { elixir: 4100000 },
      upgrade_time: 26 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 16,
      cost: { elixir: 4400000 },
      upgrade_time: 26 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 17,
      cost: { elixir: 4800000 },
      upgrade_time: 26 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 18,
      cost: { elixir: 5100000 },
      upgrade_time: 26 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 19,
      cost: { elixir: 5500000 },
      upgrade_time: 26 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 20,
      cost: { elixir: 6000000 },
      upgrade_time: 28 * 60 * 60,
      upgrade_building_level_required: 5, // 1d
    },
    {
      level: 21,
      cost: { elixir: 6500000 },
      upgrade_time: 36 * 60 * 60,
      upgrade_building_level_required: 6, // 1d 12h
    },
    {
      level: 22,
      cost: { elixir: 6600000 },
      upgrade_time: 36 * 60 * 60,
      upgrade_building_level_required: 6, // 1d 12h
    },
    {
      level: 23,
      cost: { elixir: 6700000 },
      upgrade_time: 36 * 60 * 60,
      upgrade_building_level_required: 6, // 1d 12h
    },
    {
      level: 24,
      cost: { elixir: 6800000 },
      upgrade_time: 36 * 60 * 60,
      upgrade_building_level_required: 6, // 1d 12h
    },
    {
      level: 25,
      cost: { elixir: 6900000 },
      upgrade_time: 36 * 60 * 60,
      upgrade_building_level_required: 6, // 1d 12h
    },
    {
      level: 26,
      cost: { elixir: 7000000 },
      upgrade_time: 48 * 60 * 60,
      upgrade_building_level_required: 6, // 2d
    },
    {
      level: 27,
      cost: { elixir: 7100000 },
      upgrade_time: 48 * 60 * 60,
      upgrade_building_level_required: 6, // 2d
    },
    {
      level: 28,
      cost: { elixir: 7200000 },
      upgrade_time: 48 * 60 * 60,
      upgrade_building_level_required: 6, // 2d
    },
    {
      level: 29,
      cost: { elixir: 7300000 },
      upgrade_time: 48 * 60 * 60,
      upgrade_building_level_required: 6, // 2d
    },
    {
      level: 30,
      cost: { elixir: 7400000 },
      upgrade_time: 48 * 60 * 60,
      upgrade_building_level_required: 6, // 2d
    },
    {
      level: 31,
      cost: { elixir: 7500000 },
      upgrade_time: 60 * 60 * 60,
      upgrade_building_level_required: 6, // 2d 12h
    },
    {
      level: 32,
      cost: { elixir: 7600000 },
      upgrade_time: 60 * 60 * 60,
      upgrade_building_level_required: 6, // 2d 12h
    },
    {
      level: 33,
      cost: { elixir: 7700000 },
      upgrade_time: 60 * 60 * 60,
      upgrade_building_level_required: 6, // 2d 12h
    },
    {
      level: 34,
      cost: { elixir: 7800000 },
      upgrade_time: 60 * 60 * 60,
      upgrade_building_level_required: 6, // 2d 12h
    },
    {
      level: 35,
      cost: { elixir: 7900000 },
      upgrade_time: 60 * 60 * 60,
      upgrade_building_level_required: 6, // 2d 12h
    },
    {
      level: 36,
      cost: { elixir: 8000000 },
      upgrade_time: 72 * 60 * 60,
      upgrade_building_level_required: 6, // 3d
    },
    {
      level: 37,
      cost: { elixir: 8100000 },
      upgrade_time: 72 * 60 * 60,
      upgrade_building_level_required: 6, // 3d
    },
    {
      level: 38,
      cost: { elixir: 8200000 },
      upgrade_time: 72 * 60 * 60,
      upgrade_building_level_required: 6, // 3d
    },
    {
      level: 39,
      cost: { elixir: 8300000 },
      upgrade_time: 72 * 60 * 60,
      upgrade_building_level_required: 6, // 3d
    },
    {
      level: 40,
      cost: { elixir: 8400000 },
      upgrade_time: 72 * 60 * 60,
      upgrade_building_level_required: 6, // 3d
    },
    {
      level: 41,
      cost: { elixir: 8500000 },
      upgrade_time: 96 * 60 * 60,
      upgrade_building_level_required: 7, // 4d
    },
    {
      level: 42,
      cost: { elixir: 8800000 },
      upgrade_time: 96 * 60 * 60,
      upgrade_building_level_required: 7, // 4d
    },
    {
      level: 43,
      cost: { elixir: 9100000 },
      upgrade_time: 96 * 60 * 60,
      upgrade_building_level_required: 7, // 4d
    },
    {
      level: 44,
      cost: { elixir: 9400000 },
      upgrade_time: 96 * 60 * 60,
      upgrade_building_level_required: 7, // 4d
    },
    {
      level: 45,
      cost: { elixir: 9700000 },
      upgrade_time: 96 * 60 * 60,
      upgrade_building_level_required: 7, // 4d
    },
    {
      level: 46,
      cost: { elixir: 10000000 },
      upgrade_time: 120 * 60 * 60,
      upgrade_building_level_required: 7, // 5d
    },
    {
      level: 47,
      cost: { elixir: 10300000 },
      upgrade_time: 120 * 60 * 60,
      upgrade_building_level_required: 7, // 5d
    },
    {
      level: 48,
      cost: { elixir: 10600000 },
      upgrade_time: 120 * 60 * 60,
      upgrade_building_level_required: 7, // 5d
    },
    {
      level: 49,
      cost: { elixir: 11000000 },
      upgrade_time: 120 * 60 * 60,
      upgrade_building_level_required: 7, // 5d
    },
    {
      level: 50,
      cost: { elixir: 11500000 },
      upgrade_time: 120 * 60 * 60,
      upgrade_building_level_required: 7, // 5d
    },
    {
      level: 51,
      cost: { elixir: 12000000 },
      upgrade_time: 144 * 60 * 60,
      upgrade_building_level_required: 8, // 6d
    },
    {
      level: 52,
      cost: { elixir: 12500000 },
      upgrade_time: 144 * 60 * 60,
      upgrade_building_level_required: 8, // 6d
    },
    {
      level: 53,
      cost: { elixir: 13000000 },
      upgrade_time: 144 * 60 * 60,
      upgrade_building_level_required: 8, // 6d
    },
    {
      level: 54,
      cost: { elixir: 13500000 },
      upgrade_time: 144 * 60 * 60,
      upgrade_building_level_required: 8, // 6d
    },
    {
      level: 55,
      cost: { elixir: 14000000 },
      upgrade_time: 168 * 60 * 60,
      upgrade_building_level_required: 8, // 7d
    },
    {
      level: 56,
      cost: { elixir: 14500000 },
      upgrade_time: 168 * 60 * 60,
      upgrade_building_level_required: 9, // 7d
    },
    {
      level: 57,
      cost: { elixir: 15000000 },
      upgrade_time: 168 * 60 * 60,
      upgrade_building_level_required: 9, // 7d
    },
    {
      level: 58,
      cost: { elixir: 15500000 },
      upgrade_time: 168 * 60 * 60,
      upgrade_building_level_required: 9, // 7d
    },
    {
      level: 59,
      cost: { elixir: 16000000 },
      upgrade_time: 168 * 60 * 60,
      upgrade_building_level_required: 9, // 7d
    },
    {
      level: 60,
      cost: { elixir: 16200000 },
      upgrade_time: 168 * 60 * 60,
      upgrade_building_level_required: 9, // 7d
    },
    {
      level: 61,
      cost: { elixir: 16700000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 9, // 8d
    },
    {
      level: 62,
      cost: { elixir: 16900000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 9, // 8d
    },
    {
      level: 63,
      cost: { elixir: 17100000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 9, // 8d
    },
    {
      level: 64,
      cost: { elixir: 17300000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 9, // 8d
    },
    {
      level: 65,
      cost: { elixir: 17500000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 9, // 8d
    },
    {
      level: 66,
      cost: { elixir: 18000000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 10, // 8d
    },
    {
      level: 67,
      cost: { elixir: 18500000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 10, // 8d
    },
    {
      level: 68,
      cost: { elixir: 19000000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 10, // 8d
    },
    {
      level: 69,
      cost: { elixir: 19500000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 10, // 8d
    },
    {
      level: 70,
      cost: { elixir: 20000000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 10, // 8d
    },
    {
      level: 71,
      cost: { elixir: 20500000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 10, // 8d
    },
    {
      level: 72,
      cost: { elixir: 21000000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 11, // 8d
    },
    {
      level: 73,
      cost: { elixir: 21500000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 11, // 8d
    },
    {
      level: 74,
      cost: { elixir: 22000000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 11, // 8d
    },
    {
      level: 75,
      cost: { elixir: 22500000 },
      upgrade_time: 192 * 60 * 60,
      upgrade_building_level_required: 11, // 8d
    },
  ],
};

export const royalChampion: ArmyItem = {
  category: 'hero',
  unlock_building_level_required: 7,
  name: 'Royal Champion',
  levels: [
    { level: 1, cost: { dark: 0 }, upgrade_time: 0, upgrade_building_level_required: 7 },
    { level: 2, cost: { dark: 50000 }, upgrade_time: 28800, upgrade_building_level_required: 7 }, // 8h
    { level: 3, cost: { dark: 55000 }, upgrade_time: 43200, upgrade_building_level_required: 7 }, // 12h
    { level: 4, cost: { dark: 60000 }, upgrade_time: 57600, upgrade_building_level_required: 7 }, // 16h
    { level: 5, cost: { dark: 65000 }, upgrade_time: 72000, upgrade_building_level_required: 7 }, // 20h
    { level: 6, cost: { dark: 70000 }, upgrade_time: 86400, upgrade_building_level_required: 7 }, // 1d
    { level: 7, cost: { dark: 75000 }, upgrade_time: 129600, upgrade_building_level_required: 7 }, // 1d 12h
    { level: 8, cost: { dark: 80000 }, upgrade_time: 172800, upgrade_building_level_required: 7 }, // 2d
    { level: 9, cost: { dark: 85000 }, upgrade_time: 172800, upgrade_building_level_required: 7 }, // 2d
    { level: 10, cost: { dark: 90000 }, upgrade_time: 172800, upgrade_building_level_required: 7 }, // 2d
    { level: 11, cost: { dark: 95000 }, upgrade_time: 172800, upgrade_building_level_required: 7 }, // 2d
    { level: 12, cost: { dark: 100000 }, upgrade_time: 172800, upgrade_building_level_required: 7 }, // 2d
    { level: 13, cost: { dark: 104000 }, upgrade_time: 259200, upgrade_building_level_required: 7 }, // 3d
    { level: 14, cost: { dark: 108000 }, upgrade_time: 259200, upgrade_building_level_required: 7 }, // 3d
    { level: 15, cost: { dark: 112000 }, upgrade_time: 259200, upgrade_building_level_required: 7 }, // 3d
    { level: 16, cost: { dark: 116000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 17, cost: { dark: 120000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 18, cost: { dark: 124000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 19, cost: { dark: 128000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 20, cost: { dark: 132000 }, upgrade_time: 345600, upgrade_building_level_required: 7 }, // 4d
    { level: 21, cost: { dark: 136000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 22, cost: { dark: 140000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 23, cost: { dark: 144000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 24, cost: { dark: 148000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 25, cost: { dark: 152000 }, upgrade_time: 432000, upgrade_building_level_required: 7 }, // 5d
    { level: 26, cost: { dark: 156000 }, upgrade_time: 518400, upgrade_building_level_required: 8 }, // 6d
    { level: 27, cost: { dark: 160000 }, upgrade_time: 518400, upgrade_building_level_required: 8 }, // 6d
    { level: 28, cost: { dark: 165000 }, upgrade_time: 518400, upgrade_building_level_required: 8 }, // 6d
    { level: 29, cost: { dark: 170000 }, upgrade_time: 518400, upgrade_building_level_required: 8 }, // 6d
    { level: 30, cost: { dark: 180000 }, upgrade_time: 604800, upgrade_building_level_required: 8 }, // 6d
    { level: 31, cost: { dark: 190000 }, upgrade_time: 604800, upgrade_building_level_required: 9 }, // 7d
    { level: 32, cost: { dark: 200000 }, upgrade_time: 604800, upgrade_building_level_required: 9 }, // 7d
    { level: 33, cost: { dark: 210000 }, upgrade_time: 604800, upgrade_building_level_required: 9 }, // 7d
    { level: 34, cost: { dark: 220000 }, upgrade_time: 604800, upgrade_building_level_required: 9 }, // 7d
    { level: 35, cost: { dark: 230000 }, upgrade_time: 604800, upgrade_building_level_required: 9 }, // 7d
    { level: 36, cost: { dark: 240000 }, upgrade_time: 777600, upgrade_building_level_required: 9 }, // 7d 12h
    { level: 37, cost: { dark: 250000 }, upgrade_time: 777600, upgrade_building_level_required: 9 }, // 7d 12h
    { level: 38, cost: { dark: 260000 }, upgrade_time: 777600, upgrade_building_level_required: 9 }, // 7d 12h
    { level: 39, cost: { dark: 270000 }, upgrade_time: 777600, upgrade_building_level_required: 9 }, // 7d 12h
    { level: 40, cost: { dark: 280000 }, upgrade_time: 777600, upgrade_building_level_required: 9 }, // 7d 12h
    { level: 41, cost: { dark: 290000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 42, cost: { dark: 300000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 43, cost: { dark: 310000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 44, cost: { dark: 320000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 45, cost: { dark: 330000 }, upgrade_time: 691200, upgrade_building_level_required: 10 }, // 8d
    { level: 46, cost: { dark: 340000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 47, cost: { dark: 350000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 48, cost: { dark: 360000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 49, cost: { dark: 370000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
    { level: 50, cost: { dark: 380000 }, upgrade_time: 691200, upgrade_building_level_required: 11 }, // 8d
  ],
};

export const allArmyItems = [
  barbarian,
  archer,
  giant,
  goblin,
  wallBreaker,
  balloon,
  wizard,
  healer,
  dragon,
  pekka,
  babyDragon,
  miner,
  electroDragon,
  yeti,
  dragonRider,
  electroTitan,
  rootRider,
  thrower,
  minion,
  hogRider,
  valkyrie,
  golem,
  witch,
  lavaHound,
  bowler,
  iceGolem,
  headhunter,
  apprenticeWarden,
  druid,
  lightningSpell,
  healingSpell,
  rageSpell,
  jumpSpell,
  freezeSpell,
  cloneSpell,
  invincibilitySpell,
  recallSpell,
  reviveSpell,
  poisonSpell,
  earthquakeSpell,
  hasteSpell,
  skeletonSpell,
  batSpell,
  overgrowthSpell,
  wallWrecker,
  battleBlimp,
  stoneSlammer,
  logLauncher,
  flameFlinger,
  battleDrill,
  lassi,
  electroOwl,
  mightyYak,
  unicorn,
  frosty,
  diggy,
  poisonLizard,
  phoenix,
  spiritFox,
  angryJelly,
  barbarianKing,
  archerQueen,
  minionPrince,
  grandWarden,
  royalChampion,
];

export const elixirTroops = [
  barbarian,
  archer,
  giant,
  goblin,
  wallBreaker,
  balloon,
  wizard,
  healer,
  dragon,
  pekka,
  babyDragon,
  miner,
  electroDragon,
  yeti,
  dragonRider,
  electroTitan,
  rootRider,
  thrower,
];

export const darkTroops = [
  minion,
  hogRider,
  valkyrie,
  golem,
  witch,
  lavaHound,
  bowler,
  iceGolem,
  headhunter,
  apprenticeWarden,
  druid,
];

export const elixirSpells = [
  lightningSpell,
  healingSpell,
  rageSpell,
  jumpSpell,
  freezeSpell,
  cloneSpell,
  invincibilitySpell,
  recallSpell,
  reviveSpell,
];

export const darkSpells = [poisonSpell, earthquakeSpell, hasteSpell, skeletonSpell, batSpell, overgrowthSpell];

export const siegeMachines = [wallWrecker, battleBlimp, stoneSlammer, logLauncher, flameFlinger, battleDrill];

export const labItems = [...elixirTroops, ...darkTroops, ...elixirSpells, ...darkSpells, ...siegeMachines];

export const heroes = [barbarianKing, archerQueen, minionPrince, grandWarden, royalChampion];

export const pets = [lassi, electroOwl, mightyYak, unicorn, frosty, diggy, poisonLizard, phoenix, spiritFox, angryJelly];
