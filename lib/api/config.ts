/**
 * Central place for the backend URL. Fails fast at build/boot time if
 * missing, instead of silently sending requests to "undefined/auth/...".
 */
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

// Must be NEXT_PUBLIC_ because it's read from client components
// (the Google sign-in button does a full-page redirect to it).
// export const API_URL = requireEnv("NEXT_PUBLIC_API_URL").replace(/\/+$/, "");
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL IS", API_URL);
