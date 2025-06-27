import { z } from "zod";

const GameEntity = z.object({
  data: z.number(),
  lvl: z.number().optional(),
  cnt: z.number().optional(),
  timer: z.number().optional(),
  weapon: z.number().optional(),
  gear_up: z.number().optional(),
});

export const GameStateSchema = z.object({
  tag: z.string(),
  timestamp: z.number(),
  buildings: z.array(GameEntity),
  buildings2: z.array(GameEntity),
  traps: z.array(GameEntity),
  traps2: z.array(GameEntity),
  decos: z.array(z.object({ data: z.number(), cnt: z.number() })),
  decos2: z.array(z.object({ data: z.number(), cnt: z.number() })),
  obstacles: z.array(z.object({ data: z.number(), cnt: z.number() })),
  obstacles2: z.array(z.object({ data: z.number(), cnt: z.number() })),
  units: z.array(z.object({ data: z.number(), lvl: z.number(), timer: z.number().optional() })),
  siege_machines: z.array(z.object({ data: z.number(), lvl: z.number() })),
  heroes: z.array(z.object({ data: z.number(), lvl: z.number(), timer: z.number().optional() })),
  spells: z.array(z.object({ data: z.number(), lvl: z.number() })),
  pets: z.array(z.object({ data: z.number(), lvl: z.number() })),
  equipment: z.array(z.object({ data: z.number(), lvl: z.number() })),
  house_parts: z.array(z.number()),
  skins: z.array(z.number()),
  sceneries: z.array(z.number()),
});
