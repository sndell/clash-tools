import { InferSelectModel } from "drizzle-orm";

type BuildingInstanceLevel = {
  level: number;
};

type BuildingInstance = BuildingInstanceLevel & {
  isMerged: boolean;
  isNew: boolean;
};

type BuildingLevelData = {
  instances: BuildingInstanceLevel[];
  name: string;
};

type BuildingData = BuildingLevelData & {
  levels: BuildingLevel[];
};

export type DbPlayer = InferSelectModel<typeof clashVillage> & {
  buildings: BuildingLevelData[];
  spells: Spell[];
  heroes: Hero[];
  heroEquipment: HeroEquipment[];
  troops: Troop[];
};
