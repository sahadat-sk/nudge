"use client";

import { ConnectCalendarButton } from "@/components/calendar/connect-calendar-button";
import { EventForm } from "@/components/calendar/event-form";
import { EventList } from "@/components/calendar/event-list";
import {
  createEvent,
  deleteEvent,
  getCalendarStatus,
  listEvents,
  moveEvent,
  updateEvent,
} from "@/lib/api/calendar";
import { CalendarEvent, CreateEventInput } from "@/types/calendar";
import { useCallback, useEffect, useState } from "react";

function CalendarContent() {
  const [connected, setConnected] = useState<boolean | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const loadEvents = useCallback(async () => {
    const now = new Date();
    const oneMonthOut = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    const fetched = await listEvents({
      timeMin: now.toISOString(),
      timeMax: oneMonthOut.toISOString(),
    });
    setEvents(fetched);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const status = await getCalendarStatus();
        setConnected(status.connected);
        if (status.connected) {
          await loadEvents();
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [loadEvents]);

  if (isLoading) {
    return <p className="text-sm text-gray-500">Loading…</p>;
  }

  if (!connected) {
    return (
      <div className="flex flex-col items-start gap-3">
        <p className="text-sm text-gray-600">
          Connect your Google Calendar to create and manage events here.
        </p>
        <ConnectCalendarButton />
      </div>
    );
  }

  const handleCreate = async (input: CreateEventInput) => {
    await createEvent(input);
    setShowCreateForm(false);
    await loadEvents();
  };

  const handleUpdate = async (eventId: string, input: CreateEventInput) => {
    await updateEvent(eventId, input);
    await loadEvents();
  };

  const handleDelete = async (eventId: string) => {
    await deleteEvent(eventId);
    await loadEvents();
  };

  const handleMove = async (eventId: string, destinationCalendarId: string) => {
    await moveEvent(eventId, { destinationCalendarId });
    await loadEvents();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming events</h2>
        <button
          type="button"
          onClick={() => setShowCreateForm((v) => !v)}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {showCreateForm ? "Cancel" : "New event"}
        </button>
      </div>

      {showCreateForm && (
        <EventForm
          onSubmit={handleCreate}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      <EventList
        events={events}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        onMove={handleMove}
      />
    </div>
  );
}

export default function CalendarPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">Calendar</h1>
      <CalendarContent />
    </main>
  );
}
