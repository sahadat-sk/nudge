"use client";

import { CalendarEvent, CreateEventInput } from "@/types/calendar";
import { FormEvent, useState } from "react";

interface EventFormProps {
  initialEvent?: CalendarEvent; // present when editing
  onSubmit: (input: CreateEventInput) => Promise<void>;
  onCancel?: () => void;
}

/**
 * Single form for both create and edit. Local time inputs are converted
 * to the shape the backend/Google expect (dateTime + IANA timeZone).
 */
export function EventForm({
  initialEvent,
  onSubmit,
  onCancel,
}: EventFormProps) {
  const [summary, setSummary] = useState(initialEvent?.summary ?? "");
  const [location, setLocation] = useState(initialEvent?.location ?? "");
  const [description, setDescription] = useState(
    initialEvent?.description ?? "",
  );
  const [start, setStart] = useState(
    toLocalInputValue(initialEvent?.start.dateTime),
  );
  const [end, setEnd] = useState(toLocalInputValue(initialEvent?.end.dateTime));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!summary.trim() || !start || !end) {
      setError("Title, start, and end are required.");
      return;
    }

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    setIsSubmitting(true);
    try {
      await onSubmit({
        summary: summary.trim(),
        description: description.trim() || undefined,
        location: location.trim() || undefined,
        start: { dateTime: new Date(start).toISOString(), timeZone },
        end: { dateTime: new Date(end).toISOString(), timeZone },
      });
    } catch {
      setError("Something went wrong saving the event. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4"
    >
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="summary"
        >
          Title
        </label>
        <input
          id="summary"
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          placeholder="Team sync"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="start"
          >
            Start
          </label>
          <input
            id="start"
            type="datetime-local"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="end"
          >
            End
          </label>
          <input
            id="end"
            type="datetime-local"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="location"
        >
          Location
        </label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          placeholder="Optional"
        />
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          placeholder="Optional"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-2 pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting
            ? "Saving…"
            : initialEvent
              ? "Save changes"
              : "Create event"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

/** Converts an ISO datetime into the value a <input type="datetime-local"> expects. */
function toLocalInputValue(iso?: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
