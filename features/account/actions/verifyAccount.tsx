'use server';

import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';

export async function verifyAccount(
  tag: string
  // token: string
) {
  const API_BASE_URL = 'https://cocproxy.royaleapi.dev/v1/players';
  const AUTH_HEADER = { Authorization: `Bearer ${process.env.CLASH_API_TOKEN}` };

  const getFormattedPlayer = (player: Player) => ({
    name: player.name,
    tag: player.tag,
    townHallLevel: player.townHallLevel,
    townHallWeaponLevel: player.townHallWeaponLevel,
    heroes: player.heroes.filter((hero) => hero.village === 'home'),
    heroEquipment: player.heroEquipment,
    troops: player.troops.filter((troop) => troop.village === 'home'),
    spells: player.spells.filter((spell) => spell.village === 'home'),
    expLevel: player.expLevel,
    league: player.league,
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

    if (!session) return { error: 'Unauthorized' };
    const userId = session.user.id;

    const formattedTag = tag.replace(/^#/, '%23');
    const playerUrl = `${API_BASE_URL}/${formattedTag}`;
    // const verifyUrl = `${API_BASE_URL}/${formattedTag}/verifytoken`;

    // const verifyResponse = await fetchPlayerData(verifyUrl, {
    //   method: 'POST',
    //   headers: AUTH_HEADER,
    //   body: JSON.stringify({ token }),
    // });

    // if (verifyResponse.status !== 'ok') return { error: 'Invalid tag or token' };

    const playerData: Player = await fetchPlayerData(playerUrl, { headers: AUTH_HEADER });

    const doesAccountExist = await prisma.clashAccount.findFirst({
      where: {
        userId,
        tag: playerData.tag,
      },
    });

    if (doesAccountExist) return { error: 'Account already exists' };
    return { data: getFormattedPlayer(playerData) };
  } catch (error: unknown) {
    return { error: (error as Error).message || 'Failed to verify account' };
  }
}
