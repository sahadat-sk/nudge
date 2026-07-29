import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

import { API_URL } from "@/lib/api/config";
import { tokenManager } from "@/lib/auth/token-manager";
import { refreshAccessToken } from "@/lib/auth/refresh";
import { AuthError } from "@/lib/auth/types";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = tokenManager.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryAxiosRequestConfig;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();

        const token = tokenManager.get();

        if (token) {
          originalRequest.headers.Authorization = `Bearer ${token}`;
        }

        return api(originalRequest);
      } catch {
        tokenManager.set(null);

        return Promise.reject(new AuthError("Session expired"));
      }
    }

    const detail =
      (error.response?.data as { detail?: string })?.detail ??
      error.response?.statusText ??
      error.message;

    return Promise.reject(new ApiError(error.response?.status ?? 500, detail));
  },
);
