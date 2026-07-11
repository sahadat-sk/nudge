import { Separator } from "@/components/ui/separator";
import ActivityItem from "./activityItem";

export default function ActivityGroup({ title, items }: any) {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-background">
        <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
          {title}
        </h3>

        <Separator />
      </div>

      <div className="mt-3 space-y-4">
        {items.map((activity: any) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}
