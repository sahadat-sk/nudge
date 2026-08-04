import {
  CalendarEvent,
  CalendarStatus,
  CreateEventInput,
  MoveEventInput,
  UpdateEventInput,
} from "@/types/calendar";
import { api } from "./http-client";

export async function getCalendarStatus(): Promise<CalendarStatus> {
  const res = await api.get("/calendar/status");
  return res.data;
}

export async function listEvents(params?: {
  calendarId?: string;
  timeMin?: string; // ISO 8601
  timeMax?: string; // ISO 8601
}): Promise<CalendarEvent[]> {
  const search = new URLSearchParams();
  if (params?.calendarId) search.set("calendar_id", params.calendarId);
  if (params?.timeMin) search.set("time_min", params.timeMin);
  if (params?.timeMax) search.set("time_max", params.timeMax);

  const qs = search.toString();
  const res = await api.get(`/calendar/events${qs ? `?${qs}` : ""}`);
  return res.data;
}

export async function createEvent(
  input: CreateEventInput,
): Promise<CalendarEvent> {
  const res = await api.post("/calendar/events", toCreateBody(input));
  return res.data;
}

export async function updateEvent(
  eventId: string,
  input: UpdateEventInput,
): Promise<CalendarEvent> {
  const res = await api.patch(
    `/calendar/events/${encodeURIComponent(eventId)}`,
    toUpdateBody(input),
  );
  return res.data;
}

export async function deleteEvent(
  eventId: string,
  calendarId = "primary",
): Promise<void> {
  await api.delete(
    `/calendar/events/${encodeURIComponent(eventId)}?calendar_id=${encodeURIComponent(calendarId)}`,
  );
}

/** Moves an event to a different calendar (Google's events.move). */
export async function moveEvent(
  eventId: string,
  input: MoveEventInput,
): Promise<CalendarEvent> {
  const res = await api.post(
    `/calendar/events/${encodeURIComponent(eventId)}/move`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source_calendar_id: input.sourceCalendarId ?? "primary",
        destination_calendar_id: input.destinationCalendarId,
      }),
    },
  );
  return res.data;
}

function toCreateBody(input: CreateEventInput) {
  return {
    summary: input.summary,
    description: input.description,
    location: input.location,
    start: input.start,
    end: input.end,
    attendee_emails: input.attendeeEmails ?? [],
    calendar_id: input.calendarId ?? "primary",
  };
}

function toUpdateBody(input: UpdateEventInput) {
  return {
    summary: input.summary,
    description: input.description,
    location: input.location,
    start: input.start,
    end: input.end,
    attendee_emails: input.attendeeEmails,
    calendar_id: input.calendarId ?? "primary",
  };
}
