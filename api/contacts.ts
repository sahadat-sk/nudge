import { Contact, ContactCreate } from "@/types/contacts";
import { ContactQuery } from "@/types/searchParams";
import { api } from "./client";

export async function getContacts(query: ContactQuery) {
  const response = await api.get(`/contacts`, {
    params: {
      page: query.page,
      page_size: query.pageSize,
      search: query.search,
      status: query.status,
      source: query.source,
      sort: query.sortBy,
      order: query.sortOrder,
    },
  });

  return response.data;
}

export async function getContact(id: string | null) {
  if (!id) return;
  const response = await api.get(`/contacts/${id.trim()}`);

  return response.data;
}

export async function createContact(contact: ContactCreate): Promise<Contact> {
  const response = await api.post(`/contacts`, contact);
  return response.data;
}
