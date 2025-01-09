'use server';

import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function createClashAccount(
  playerInfo: {
    tag: string;
    name: string;
    townHallLevel: number;
    townHallWeaponLevel?: number;
  },
  buildings: BuildingState[],
  caluclatedBuildings: BuildingState[],
  walls: WallState[],
  troops: Troop[],
  spells: Spell[],
  heroes: Hero[],
  equipment: HeroEquipment[]
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return { error: 'Unauthorized' };
  const userId = session.user.id;

  try {
    const doesAccountExist = await prisma.clashAccount.findFirst({
      where: {
        userId,
        tag: playerInfo.tag,
      },
    });
    if (doesAccountExist) return { error: 'Account already exists' };

    await prisma.clashAccount.create({
      data: {
        tag: playerInfo.tag,
        name: playerInfo.name,
        townHallLevel: playerInfo.townHallLevel,
        townHallWeaponLevel: playerInfo.townHallWeaponLevel,
        buildings: JSON.stringify(buildings),
        caluclatedBuildings: JSON.stringify(caluclatedBuildings),
        walls: JSON.stringify(walls),
        troops: JSON.stringify(troops),
        spells: JSON.stringify(spells),
        heroes: JSON.stringify(heroes),
        equipment: JSON.stringify(equipment),
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);
    return { error: 'Failed to create clash account' };
  } finally {
    redirect('/');
  }
}
