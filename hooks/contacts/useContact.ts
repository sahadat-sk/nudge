import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getContact } from "@/api/contacts";

export function useContact(id: string | null) {
  return useQuery({
    queryKey: ["contacts", id],
    queryFn: () => getContact(id),

    enabled: id !== null,

    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes

    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchOnMount: false,
    placeholderData: keepPreviousData,
  });
}
