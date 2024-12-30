type Building = {
  category: 'defence' | 'trap' | 'army' | 'resource' | 'wall';
  name: string;
  amount_per_town_hall: {
    level: number;
    amount: number;
  }[];
  levels: {
    level: number;
    cost: {
      gold?: number;
      elixir?: number;
      dark?: number;
    };
    build_time: number; // sec
    town_hall: number;
    supercharge?: boolean;
  }[];
};
