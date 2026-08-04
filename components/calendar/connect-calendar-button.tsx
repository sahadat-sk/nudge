"use client";

import { API_URL } from "@/lib/api/config";

export function ConnectCalendarButton() {
  const handleConnect = () => {
    // Full navigation, not fetch: the browser needs to be handed off to
    // Google's consent screen, and the backend needs the refresh_token
    // cookie sent along automatically (same-origin request to the API).
    window.location.href = `${API_URL}/calendar/connect`;
  };

  return (
    <button
      type="button"
      onClick={handleConnect}
      className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      Connect Google Calendar
    </button>
  );
}
