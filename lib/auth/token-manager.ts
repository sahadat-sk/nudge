/**
 * Access tokens live here — in a plain module-level variable — and
 * NOWHERE ELSE. Never in localStorage/sessionStorage (readable by any
 * injected script) and never in a non-httpOnly cookie.
 *
 * This is intentionally not React state: http-client.ts (a plain
 * function, not a component) needs to read/write it too. React
 * components subscribe via useSyncExternalStore so they still re-render
 * correctly when it changes.
 */

type Listener = () => void;

let accessToken: string | null = null;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener());
}

export const tokenManager = {
  get(): string | null {
    return accessToken;
  },

  set(token: string | null): void {
    accessToken = token;
    emit();
  },

  subscribe(listener: Listener): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};
