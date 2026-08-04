"use client";

import { useState } from "react";

import { EventForm } from "@/components/calendar/event-form";
import { CalendarEvent, CreateEventInput } from "@/types/calendar";

interface EventListProps {
  events: CalendarEvent[];
  onUpdate: (eventId: string, input: CreateEventInput) => Promise<void>;
  onDelete: (eventId: string) => Promise<void>;
  onMove: (eventId: string, destinationCalendarId: string) => Promise<void>;
}

export function EventList({
  events,
  onUpdate,
  onDelete,
  onMove,
}: EventListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [movingId, setMovingId] = useState<string | null>(null);
  const [destinationCalendar, setDestinationCalendar] = useState("");

  if (events.length === 0) {
    return <p className="text-sm text-gray-500">No events in this range.</p>;
  }

  return (
    <ul className="flex flex-col gap-3">
      {events.map((event) => (
        <li key={event.id} className="rounded-lg border border-gray-200 p-4">
          {editingId === event.id ? (
            <EventForm
              initialEvent={event}
              onSubmit={async (input) => {
                await onUpdate(event.id, input);
                setEditingId(null);
              }}
              onCancel={() => setEditingId(null)}
            />
          ) : (
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-gray-900">
                  {event.summary || "(no title)"}
                </p>
                <p className="text-sm text-gray-500">
                  {formatRange(event.start.dateTime, event.end.dateTime)}
                </p>
                {event.location && (
                  <p className="text-sm text-gray-500">{event.location}</p>
                )}
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => setEditingId(event.id)}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setMovingId(movingId === event.id ? null : event.id)
                  }
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Move
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(event.id)}
                  className="text-sm font-medium text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          )}

          {movingId === event.id && (
            <div className="mt-3 flex items-center gap-2 border-t border-gray-100 pt-3">
              <input
                type="text"
                value={destinationCalendar}
                onChange={(e) => setDestinationCalendar(e.target.value)}
                placeholder="destination calendar id or email"
                className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm"
              />
              <button
                type="button"
                onClick={async () => {
                  if (!destinationCalendar.trim()) return;
                  await onMove(event.id, destinationCalendar.trim());
                  setMovingId(null);
                  setDestinationCalendar("");
                }}
                className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                Move
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function formatRange(startIso?: string | null, endIso?: string | null): string {
  if (!startIso || !endIso) return "";
  const start = new Date(startIso);
  const end = new Date(endIso);
  const dateFmt = new Intl.DateTimeFormat(undefined, { dateStyle: "medium" });
  const timeFmt = new Intl.DateTimeFormat(undefined, { timeStyle: "short" });
  return `${dateFmt.format(start)} · ${timeFmt.format(start)} – ${timeFmt.format(end)}`;
}
