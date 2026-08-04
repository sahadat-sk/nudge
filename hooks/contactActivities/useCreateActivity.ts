import { createActivity } from "@/lib/api/contactActivities";
import { CreateActivity } from "@/types/activity";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export function useCreateActivity(contactId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: CreateActivity) => createActivity(contactId, body),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["activities", contactId],
      });
    },
  });
}
