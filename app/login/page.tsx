"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { useAuth } from "@/lib/auth/authContext";
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import Logo from "@/components/header/logo";

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/");
    }
  }, [isLoading, isAuthenticated, router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Soft background accents — kept behind everything, purely decorative */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[280px] w-[280px] translate-y-1/3 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      {isLoading ? (
        <Loader2
          className="h-6 w-6 animate-spin text-muted-foreground"
          aria-label="Checking your session"
        />
      ) : (
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Logo iconSize={40} showWordmark={false} />

              <h1 className="mt-5 text-xl font-semibold text-foreground">
                Welcome!
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Sign in to NudgeFollowup to pick up where you left off.
              </p>

              <div className="mt-6 w-full">
                <GoogleSignInButton />
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            By continuing, you agree to keep your follow-ups less awkward.
          </p>
        </div>
      )}
    </main>
  );
}
