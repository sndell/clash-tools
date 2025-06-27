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
