import { getActivities } from "@/api/contactActivities";
import { useQuery } from "@tanstack/react-query";

export function useActivities(contactId: string | null) {
  return useQuery({
    queryKey: ["activities", contactId],

    queryFn: () => getActivities(contactId!),

    enabled: !!contactId,

    staleTime: 5 * 60 * 1000,
  });
}
