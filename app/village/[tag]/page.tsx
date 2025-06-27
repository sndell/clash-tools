import { Tracker } from "@/features/tracker/components/Tracker";
import { TrackerProvider } from "@/features/tracker/context/TrackerConctext";
import { getVillageData } from "@/features/village";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return <div>Unauthorized</div>;

  const { tag } = await params;
  const village = await getVillageData(`#${tag}`);

  if ("error" in village) return <div>{village.error}</div>;

  const formattedVillage: FormattedPlayer = {
    name: village.name,
    tag: village.tag,
    townHallLevel: village.townHallLevel,
    expLevel: village.expLevel,
    trophies: village.trophies,
    heroes: village.heroes as Hero[],
    heroEquipment: village.equipment as HeroEquipment[],
    troops: village.troops as Troop[],
    spells: village.spells as Spell[],
    townHallWeaponLevel: village.townHallWeaponLevel || 0,
    buildings: village.buildings as BuildingData[],
    league: village.league,
    clanName: village.clanName,
    clanTag: village.clanTag,
    clanUrl: village.clanUrl,
  };

  return (
    <TrackerProvider village={formattedVillage}>
      <Tracker name={village.name} tag={village.tag} townHallLevel={village.townHallLevel} />
    </TrackerProvider>
  );
}
