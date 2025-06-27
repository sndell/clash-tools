import { Tracker } from "@/features/tracker/components/Tracker";
import { getVillageData } from "@/features/village";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return <div>Unauthorized</div>;

  const { tag } = await params;
  const village = await getVillageData(`#${tag}`);

  if ("error" in village) return <div>{village.error}</div>;

  return <Tracker name={village.name} tag={village.tag} />;
}
