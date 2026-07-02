import { useQuery } from "@tanstack/react-query";
import { getContacts } from "@/api/contacts";

export function useContacts() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });
}
