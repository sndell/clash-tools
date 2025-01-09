type BuildingState = {
  name: string;
  buildings: {
    index: number;
    level: number;
  }[];
  superchargeBuildings?: {
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
