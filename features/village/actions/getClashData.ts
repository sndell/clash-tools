"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { validateGameState } from "../validators";
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

    const gameState = validateGameState(data);
    const formattedTag = formatPlayerTag(gameState.tag);

    const playerData = await fetchPlayerData(formattedTag);
    if (!playerData.tag) return { error: "Error loading village data" };

    const accountExists = await checkExistingAccount(session.user.id, formattedTag);
    if (accountExists) return { error: "Village with tag already added" };

    const buildings = formatBuildings(gameState);
    const formattedPlayer = formatPlayer(playerData, buildings);

    return { data: formattedPlayer };
  } catch (error) {
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

const formatBuildings = (gameState: GameState): BuildingLevelData[] => {
  const buildingsMap = new Map<string, BuildingLevelData>();

  gameState.buildings.forEach((building) => {
    const buildingData = allBuildings.find((b) => b.dataId === building.data);
    if (!buildingData) return;

    const instances: BuildingInstanceLevel[] = Array.from({ length: building.cnt ?? 1 }, () => ({
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

const formatPlayer = (player: Player, buildings: BuildingLevelData[]): FormattedPlayer => ({
  name: player.name,
  tag: player.tag,
  townHallLevel: player.townHallLevel,
  townHallWeaponLevel: player.townHallWeaponLevel,
  heroes: player.heroes.filter((hero) => hero.village === "home"),
  heroEquipment: player.heroEquipment,
  troops: player.troops.filter((troop) => troop.village === "home"),
  spells: player.spells.filter((spell) => spell.village === "home"),
  expLevel: player.expLevel,
  league: player.league,
  trophies: player.trophies,
  clan: player.clan,
  buildings,
});
