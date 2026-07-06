import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getContacts } from "@/api/contacts";
import { ContactQuery } from "@/types/searchParams";

export function useContacts(query: ContactQuery) {
  return useQuery({
    queryKey: ["contacts", query],
    queryFn: () => getContacts(query),

    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes

    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchOnMount: false,
    placeholderData: keepPreviousData,
  });
}
