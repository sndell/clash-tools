// import { VillageOverview, StatisticsOverview } from "@/features/tracker";

import { getClashVillages } from "@/features/village/actions/getClashVillages";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return <div>login please :)</div>;

  const villages = await getClashVillages();

  if (villages.length === 0)
    return (
      <div className="flex flex-col flex-1 justify-center items-center">
        <div>
          No villages found!{" "}
          <Link href="/village/add" className="text-acent">
            Add one
          </Link>
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-3 p-3">
      {villages.map((village) => (
        <Link
          key={village.tag}
          href={`/village/${village.tag.replace("#", "")}`}
          className="flex gap-2 p-3 rounded-xl border transition-colors cursor-pointer bg-primary border-primary hover:bg-primary-light"
        >
          <Image
            src={`/images/town-hall/Town_Hall${village.townHallLevel}.webp`}
            alt={village.name}
            width={80}
            height={80}
          />
          <div>
            {village.name} <span className="text-sm text-primary-dark">{village.tag}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
