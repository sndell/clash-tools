type Building = {
  category: 'defence' | 'trap' | 'army' | 'resource' | 'wall' | 'town_hall';
  name: string;
  amount_per_town_hall: {
    th: number;
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
    image_name: string;
  }[];
};
