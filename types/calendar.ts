export interface EventDateTime {
  dateTime?: string; // ISO 8601, e.g. "2026-08-05T14:00:00-07:00"
  date?: string; // "2026-08-05" for all-day events
  timeZone?: string; // e.g. "America/Los_Angeles"
}

export interface CalendarEvent {
  id: string;
  summary: string | null;
  description?: string | null;
  location?: string | null;
  start: EventDateTime;
  end: EventDateTime;
  htmlLink?: string | null;
  status?: string | null;
}

export interface CreateEventInput {
  summary: string;
  description?: string;
  location?: string;
  start: EventDateTime;
  end: EventDateTime;
  attendeeEmails?: string[];
  calendarId?: string;
}

export interface UpdateEventInput {
  summary?: string;
  description?: string;
  location?: string;
  start?: EventDateTime;
  end?: EventDateTime;
  attendeeEmails?: string[];
  calendarId?: string;
}

export interface MoveEventInput {
  sourceCalendarId?: string;
  destinationCalendarId: string;
}

export interface CalendarStatus {
  connected: boolean;
}
