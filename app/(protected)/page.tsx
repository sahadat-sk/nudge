"use client";

import { useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import DetailsPanel from "@/components/details/detailsPanel";
import ContactSection from "@/components/contactSection/contactSection";
import Logo from "@/components/header/logo";
import AccountMenu from "@/components/header/accountMenu";
import { useAuth } from "@/lib/auth/authContext";

// TODO: replace with your real auth/session hook (NextAuth's useSession,
// Supabase's useUser, etc.) — kept as local state here so the header
// renders without wiring auth first.
const CURRENT_USER = {
  name: "John Doe",
  email: "john@nudgefollowup.com",
};

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { user, logout } = useAuth();

  function handleLogout() {
    // TODO: call your sign-out method here, e.g. `signOut()` (NextAuth) or
    // `supabase.auth.signOut()`, then redirect to /login.
    console.log("logging out");
    logout();
  }

  return (
    <>
      <ResizablePanelGroup>
        <ResizablePanel minSize="50%" defaultSize="70%">
          <div className="flex items-center justify-between p-4 px-16">
            <Logo />
            <AccountMenu user={user} onLogout={handleLogout} />
          </div>
          <section className="p-16">
            <ContactSection
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          </section>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize="30%">
          <DetailsPanel selectedId={selectedId} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
