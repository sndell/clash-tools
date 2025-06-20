import { VillageOverview, StatisticsOverview } from "@/features/tracker";

export default function Home() {
  return (
    <div className="grid grid-rows-2 gap-3 md:grid-cols-2">
      <VillageOverview />
      <StatisticsOverview />
    </div>
  );
}
