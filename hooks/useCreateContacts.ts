import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact } from "@/api/contacts";
import { ContactCreate } from "@/types/followup";

export function useCreateContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contact: ContactCreate) => createContact(contact),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
  });
}
