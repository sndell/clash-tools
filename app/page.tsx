// import { VillageOverview, StatisticsOverview } from "@/features/tracker";

import { getClashVillages } from "@/features/village/actions/getClashVillages";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
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
          <Link href="/village/add" className="text-accent">
            Add one
          </Link>
        </div>
      </div>
    );

  return (
    <div>hello</div>
    // <div className="grid grid-rows-2 gap-3 md:grid-cols-2">
    //   <VillageOverview />
    //   <StatisticsOverview />
    // </div>
  );
}
