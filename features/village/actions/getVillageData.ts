"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { clashVillage } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";

export async function getVillageData({ tag }: { tag: string }) {
  const API_BASE_URL = "https://cocproxy.royaleapi.dev/v1/players";
  const AUTH_HEADER = { Authorization: `Bearer ${process.env.CLASH_API_TOKEN}` };

  const getFormattedPlayer = (player: Player): FormattedPlayer => ({
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
  });

  const fetchPlayerData = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    return response.json();
  };

  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) return { error: "Unauthorized" };
    const userId = session.user.id;

    if (tag.length < 2 || !tag.startsWith("#")) return { error: "Invalid tag" };

    const formattedTag = tag.replace(/^#/, "%23").toUpperCase();
    const playerUrl = `${API_BASE_URL}/${formattedTag}`;

    const playerData: Player = await fetchPlayerData(playerUrl, { headers: AUTH_HEADER });
    if (!playerData.tag) return { error: "Error loading village data" };

    const doesAccountExist = await db
      .select()
      .from(clashVillage)
      .where(and(eq(clashVillage.userId, userId), eq(clashVillage.tag, formattedTag)));
    if (doesAccountExist.length > 0) return { error: "Village with tag already added" };

    return { data: getFormattedPlayer(playerData) };
  } catch (error) {
    return { error: "Internal server error" };
  }
}
