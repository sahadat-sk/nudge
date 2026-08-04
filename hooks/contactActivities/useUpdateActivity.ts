import { updateActivity } from "@/lib/api/contactActivities";
import { UpdateActivity } from "@/types/activity";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export function useUpdateActivity(contactId: string, activityId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: UpdateActivity) =>
      updateActivity(contactId, activityId, body),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activities", contactId],
      });

      queryClient.invalidateQueries({
        queryKey: ["activity", contactId, activityId],
      });
    },
  });
}
