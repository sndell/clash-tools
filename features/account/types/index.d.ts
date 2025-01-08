type IconUrls = {
  small: string;
  medium: string;
  large?: string;
  tiny?: string;
};

type Label = {
  id: number;
  name: string;
  iconUrls: IconUrls;
};

type BadgeUrls = {
  small: string;
  medium: string;
  large: string;
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
  badgeUrls: BadgeUrls;
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

type Troop = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home' | 'builderBase';
  superTroopIsActive?: boolean;
};

type HeroEquipment = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home';
};

type Hero = {
  name: string;
  level: number;
  maxLevel: number;
  village: 'home' | 'builderBase';
  equipment?: HeroEquipment[];
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
  heroEquipment: HeroEquipment[];
};

type FormattedPlayer = Pick<
  Player,
  'name' | 'tag' | 'townHallLevel' | 'expLevel' | 'league' | 'heroes' | 'heroEquipment' | 'troops' | 'spells'
> & {
  townHallWeaponLevel?: number;
};

type BuildingState = {
  name: string;
  buildings: {
    index: number;
    level: number;
  }[];
};

type BuildingWithAmount = Building & {
  number_available: number;
  prev_number_available: number;
};

type WallState = {
  level: number;
  amount: number;
};
