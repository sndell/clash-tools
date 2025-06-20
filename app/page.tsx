import { Overview, ResourceCost } from "@/features/tracker";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Overview />
      <ResourceCost />
    </div>
  );
}
