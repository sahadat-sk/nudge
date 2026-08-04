import { deleteActivity } from "@/lib/api/contactActivities";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export function useDeleteActivity(contactId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (activityId: string) => deleteActivity(contactId, activityId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activities", contactId],
      });
    },
  });
}
