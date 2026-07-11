import { updateContact } from "@/api/contacts";
import { ContactUpdate } from "@/types/contacts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateContact(contactId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ContactUpdate) => updateContact(contactId, body),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
  });
}
