// Base types for common structures
type BadgeUrls = {
  small: string;
  large: string;
  medium: string;
};

type IconUrls = {
  small: string;
  tiny: string;
  medium: string;
};

type Clan = {
  tag: string;
  name: string;
  clanLevel: number;
  badgeUrls: BadgeUrls;
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

type SeasonRecord = {
  id: string;
  rank: number;
  trophies: number;
};

type CurrentSeason = {
  rank: number;
  trophies: number;
};

type LegendStatistics = {
  legendTrophies: number;
  previousSeason: SeasonRecord;
  bestSeason: SeasonRecord;
  bestBuilderBaseSeason: SeasonRecord;
  currentSeason: CurrentSeason;
};

type Achievement = {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string | null;
  village: "home" | "builderBase" | "clanCapital";
};

type PlayerHouseElement = {
  type: "ground" | "walls" | "roof" | "decoration";
  id: number;
};

type PlayerHouse = {
  elements: PlayerHouseElement[];
};

type Troop = {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase";
  superTroopIsActive?: boolean;
};

type HeroEquipment = {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase";
};

type Hero = {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase";
  equipment?: HeroEquipment[];
};

type Spell = {
  name: string;
  level: number;
  maxLevel: number;
  village: "home" | "builderBase";
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
  role: "member" | "admin" | "coLeader" | "leader";
  warPreference: "in" | "out";
  donations: number;
  donationsReceived: number;
  clanCapitalContributions: number;
  clan: Clan;
  league: League;
  builderBaseLeague: BuilderBaseLeague;
  legendStatistics: LegendStatistics;
  achievements: Achievement[];
  playerHouse: PlayerHouse;
  labels: any[];
  troops: Troop[];
  heroes: Hero[];
  heroEquipment: HeroEquipment[];
  spells: Spell[];
};

type FormattedPlayer = Pick<
  Player,
  | "name"
  | "tag"
  | "townHallLevel"
  | "expLevel"
  | "league"
  | "trophies"
  | "clan"
  | "heroes"
  | "heroEquipment"
  | "troops"
  | "spells"
> & {
  townHallWeaponLevel: number;
  buildings: FormattedBuildingData[];
};

type GameEntity = {
  data: number;
  lvl?: number;
  cnt?: number;
  timer?: number;
  weapon?: number;
  gear_up?: number;
};

type GameState = {
  tag: string;
  timestamp: number;
  buildings: GameEntity[];
  buildings2: GameEntity[];
  traps: GameEntity[];
  traps2: GameEntity[];
  decos: { data: number; cnt: number }[];
  decos2: { data: number; cnt: number }[];
  obstacles: { data: number; cnt: number }[];
  obstacles2: { data: number; cnt: number }[];
  units: { data: number; lvl: number; timer?: number }[];
  siege_machines: { data: number; lvl: number }[];
  heroes: { data: number; lvl: number; timer?: number }[];
  spells: { data: number; lvl: number }[];
  pets: { data: number; lvl: number }[]; // empty array now, structure assumed
  equipment: { data: number; lvl: number }[];
  house_parts: number[];
  skins: number[];
  sceneries: number[];
};
