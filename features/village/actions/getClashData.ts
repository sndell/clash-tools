"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { GameStateSchema } from "../validators";
import { allBuildings } from "@/data/structures";
import { checkExistingAccount } from "../util";

const API_CONFIG = {
  BASE_URL: "https://cocproxy.royaleapi.dev/v1/players",
  AUTH_HEADER: { Authorization: `Bearer ${process.env.CLASH_API_TOKEN}` },
};

export async function getClashData({ data }: { data: string }) {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session) return { error: "Unauthorized" };

    let parsedData;
    try {
      parsedData = JSON.parse(data);
    } catch {
      return { error: "Invalid game data" };
    }

    const validation = GameStateSchema.safeParse(parsedData);
    if (!validation.success) return { error: "Invalid game data" };

    const formattedTag = formatPlayerTag(validation.data.tag);

    const playerData = await fetchPlayerData(formattedTag);
    if (!playerData.tag) return { error: "Error loading village data" };

    const accountExists = await checkExistingAccount(session.user.id, formattedTag);
    if (accountExists) return { error: "Village with tag already added" };

    const buildings = formatBuildings(validation.data);
    const formattedPlayer = formatPlayer(playerData, buildings);

    return { data: formattedPlayer };
  } catch (error) {
    console.log(error);

    return { error: "Internal server error" };
  }
}

const formatPlayerTag = (tag: string): string => {
  return tag.replace(/^#/, "%23").toUpperCase();
};

const fetchPlayerData = async (formattedTag: string): Promise<Player> => {
  const playerUrl = `${API_CONFIG.BASE_URL}/${formattedTag}`;
  const response = await fetch(playerUrl, { headers: API_CONFIG.AUTH_HEADER });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};

const formatBuildings = (gameState: GameState): BuildingData[] => {
  const buildingsMap = new Map<string, BuildingData>();

  const buildingsAndTraps = [...gameState.buildings, ...gameState.traps];

  buildingsAndTraps.forEach((building) => {
    const buildingData = allBuildings.find((b) => b.dataId === building.data);
    if (!buildingData) return;

    const instances: BuildingInstance[] = Array.from({ length: building.cnt ?? 1 }, () => ({
      level: building.lvl ?? 0,
    }));

    const existingBuilding = buildingsMap.get(buildingData.name);
    if (existingBuilding) {
      existingBuilding.instances.push(...instances);
    } else {
      buildingsMap.set(buildingData.name, {
        name: buildingData.name,
        instances,
      });
    }
  });

  return Array.from(buildingsMap.values());
};

const formatPlayer = (player: Player, buildings: BuildingData[]): FormattedPlayer => ({
  name: player.name,
  tag: player.tag,
  townHallLevel: player.townHallLevel,
  townHallWeaponLevel: player.townHallWeaponLevel,
  heroes: player.heroes.filter((hero) => hero.village === "home"),
  heroEquipment: player.heroEquipment,
  troops: player.troops.filter((troop) => troop.village === "home"),
  spells: player.spells.filter((spell) => spell.village === "home"),
  expLevel: player.expLevel,
  league: player.league.name,
  trophies: player.trophies,
  buildings,
  clanName: player.clan.name,
  clanTag: player.clan.tag,
  clanUrl: player.clan.badgeUrls.medium,
});
