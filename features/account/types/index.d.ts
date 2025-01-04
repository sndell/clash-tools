type IconUrls = {
  small: string;
  tiny?: string;
  large?: string;
  medium: string;
};

type Label = {
  name: string;
  id: number;
  iconUrls: IconUrls;
};

type Badge = {
  small: string;
  large: string;
  medium: string;
};

type League = {
  id: number;
  name: string;
  iconUrls: IconUrls;
};

type BuilderBaseLeague = {
  id: number;
  name: string;
};

type Clan = {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls: Badge;
};

type Season = {
  id: string;
  rank: number;
  trophies: number;
};

type LegendStatistics = {
  legendTrophies: number;
  bestSeason: Season;
  previousBuilderBaseSeason: Season;
  bestBuilderBaseSeason: Season;
  currentSeason: {
    trophies: number;
  };
};

type Achievement = {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string | null;
  village: 'home' | 'builderBase' | 'clanCapital';
};

type PlayerHouseElement = {
  type: 'ground' | 'walls' | 'roof' | 'decoration';
  id: number;
};

type PlayerHouse = {
  elements: PlayerHouseElement[];
};

type Equipment = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home';
};

type Troop = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home' | 'builderBase';
  superTroopIsActive?: boolean;
};

type Hero = {
  name: string;
  level: number;
  maxLevel: number;
  equipment?: Equipment[];
  village: 'home' | 'builderBase';
};

type Spell = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home';
};

type Player = {
  tag: string;
  name: string;
  townHallLevel: number;
  townHallWeaponLevel: number;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  warStars: number;
  attackWins: number;
  defenseWins: number;
  builderHallLevel: number;
  builderBaseTrophies: number;
  bestBuilderBaseTrophies: number;
  role: string;
  warPreference: string;
  donations: number;
  donationsReceived: number;
  clanCapitalContributions: number;
  clan: Clan;
  league?: League;
  builderBaseLeague: BuilderBaseLeague;
  legendStatistics: LegendStatistics;
  achievements: Achievement[];
  playerHouse: PlayerHouse;
  labels: Label[];
  troops: Troop[];
  heroes: Hero[];
  spells: Spell[];
  heroEquipment: Equipment[];
};

type FormattedPlayer = {
  name: string;
  tag: string;
  townHallLevel: number;
  heroes: Hero[];
  heroEquipment: Equipment[];
  troops: Troop[];
  spells: Spell[];
  expLevel: number;
  league?: League;
};

type BuildingLevel = {
  [buildingName: string]: number;
};
