"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { API_URL } from "@/lib/api/config";
import { api } from "@/lib/api/http-client";
import { refreshAccessToken } from "@/lib/auth/refresh";
import { tokenManager } from "@/lib/auth/token-manager";
import type { SessionResponse, User } from "@/lib/auth/types";

interface AuthContextValue {
  user: User | null;
  /** True only while the initial silent-refresh bootstrap is in flight. */
  isLoading: boolean;
  isAuthenticated: boolean;
  /** Full-page redirect into the backend's OAuth flow. */
  loginWithGoogle: (redirectTo?: string) => void;
  logout: () => Promise<void>;
  /** Re-fetch /auth/me, e.g. after the OAuth callback mints a fresh token. */
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentUser = useCallback(async () => {
    const response = await api.get("/auth/me");
    const data: SessionResponse = response.data;
    setUser(data.user);
  }, []);

  const refreshUser = useCallback(async () => {
    await fetchCurrentUser();
  }, [fetchCurrentUser]);

  // On first mount, try to turn the httpOnly refresh cookie (if any) into
  // an access token + user profile. This is what makes a page refresh
  // not log the person out.
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        await refreshAccessToken();
        if (cancelled) return;
        await fetchCurrentUser();
      } catch {
        if (!cancelled) {
          tokenManager.set(null);
          setUser(null);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [fetchCurrentUser]);

  const loginWithGoogle = useCallback((redirectTo?: string) => {
    if (redirectTo) {
      sessionStorage.setItem("post_login_redirect", redirectTo);
    }
    // Full top-level navigation is required here — this isn't an XHR,
    // it's the browser being handed off to Google's consent screen.
    window.location.href = `${API_URL}/auth/google/login`;
  }, []);

  const logout = useCallback(async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      tokenManager.set(null);
      setUser(null);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoading,
      isAuthenticated: user !== null,
      loginWithGoogle,
      logout,
      refreshUser,
    }),
    [user, isLoading, loginWithGoogle, logout, refreshUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return ctx;
}
