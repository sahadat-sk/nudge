import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact } from "@/api/contacts";
import { ContactCreate } from "@/types/contacts";
import { toast } from "sonner";

export function useCreateContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contact: ContactCreate) => createContact(contact),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });

      toast.success("New contact created!", { position: "top-center" });
    },

    onError: () => {
      toast.error("Failed to create contact");
    },
  });
}
