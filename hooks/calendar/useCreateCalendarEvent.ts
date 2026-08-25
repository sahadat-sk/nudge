import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CreateEventInput } from "@/types/calendar";
import { createEvent } from "@/lib/api/calendar";

export function useCreateCalendarEvent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateEventInput) => createEvent(input),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendarEvents"],
      });

      toast.success("New Calendar Event created", { position: "top-center" });
    },

    onError: () => {
      toast.error("Failed to create new Calendar Event");
    },
  });
}
