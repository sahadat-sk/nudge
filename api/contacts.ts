import { Contact, ContactCreate } from "@/types/followup";

const BASE_URL = "http://localhost:8000/api/v1";

export async function getContacts() {
  const response = await fetch(`${BASE_URL}/contacts`);

  if (!response.ok) {
    throw new Error("Failed to fetch contacts");
  }

  return response.json();
}

export async function createContact(contact: ContactCreate): Promise<Contact> {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...contact,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to create contact");
  }

  return response.json();
}
