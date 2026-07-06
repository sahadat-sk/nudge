// types/activity.ts

export type ActivityType =
  | "note"
  | "call"
  | "email"
  | "meeting"
  | "whatsapp"
  | "status_changed"
  | "follow_up";

export interface ContactActivity {
  id: string;
  contact_id: string;

  type: ActivityType;

  title: string;
  description: string;

  created_at: string;
}

export interface CreateActivity {
  type: ActivityType;

  title: string;

  description: string;
}

export interface UpdateActivity {
  type?: ActivityType;

  title?: string;

  description?: string;
}
