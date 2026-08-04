import { getActivity } from "@/lib/api/contactActivities";
import { useQuery } from "@tanstack/react-query";

export function useActivity(
  contactId: string | null,
  activityId: string | null,
) {
  return useQuery({
    queryKey: ["activity", contactId, activityId],

    queryFn: () => getActivity(contactId!, activityId!),

    enabled: !!contactId && !!activityId,
  });
}
