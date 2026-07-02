export type Contact = {
  id: string;
  name: string;
  last_contacted: string;
  next_followup: string;
  source: string;
  status: string;
};

export type ContactCreate = Omit<Contact, "id">;
export type ContactUpdate = Partial<Contact>;
