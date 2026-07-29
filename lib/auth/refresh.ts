import { API_URL } from "@/lib/api/config";
import { AuthError, type TokenResponse } from "@/lib/auth/types";
import { tokenManager } from "./token-manager";

/**
 * Calls POST /auth/refresh. The browser attaches the refresh_token cookie
 * automatically (that's the whole point of `credentials: "include"`) — we
 * never touch the cookie's value from JS, and never could, since it's
 * httpOnly.
 */
async function requestNewAccessToken(): Promise<string> {
  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new AuthError("Refresh token invalid or expired");
  }

  const data: TokenResponse = await response.json();
  tokenManager.set(data.access_token);
  return data.access_token;
}

// Single-flight guard: if five components all hit a 401 at once, we want
// exactly one network call to /auth/refresh, not five racing requests
// that would each rotate the refresh token and invalidate the others.
let inFlightRefresh: Promise<string> | null = null;

export function refreshAccessToken(): Promise<string> {
  if (!inFlightRefresh) {
    inFlightRefresh = requestNewAccessToken().finally(() => {
      inFlightRefresh = null;
    });
  }
  return inFlightRefresh;
}
