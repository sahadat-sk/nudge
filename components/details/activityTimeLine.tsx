"use client";

import { useMemo } from "react";
import { format, isToday, isYesterday } from "date-fns";
import { useActivities } from "@/hooks/contactActivities/useActivities";
import ActivityGroup from "./activityGroup";

interface Props {
  contactId: string;
}

export default function ActivityTimeline({ contactId }: Props) {
  const activities = useActivities(contactId);

  const groups = useMemo(() => {
    if (!activities.data) return [];

    const map = new Map<string, typeof activities.data>();

    activities.data.forEach((activity) => {
      const date = new Date(activity.created_at);

      let key = "";

      if (isToday(date)) {
        key = "Today";
      } else if (isYesterday(date)) {
        key = "Yesterday";
      } else {
        key = format(date, "EEEE, dd MMM");
      }

      const existing = map.get(key);

      if (existing) {
        existing.push(activity);
      } else {
        map.set(key, [activity]);
      }
    });

    return [...map.entries()];
  }, [activities.data]);

  if (activities.isLoading) {
    return <div>Loading timeline...</div>;
  }

  return (
    <div className="space-y-8">
      {groups.map(([title, items]) => (
        <ActivityGroup key={title} title={title} items={items} />
      ))}
    </div>
  );
}
