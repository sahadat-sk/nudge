"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import DetailsPanel from "@/components/details/detailsPanel";
import ContactSection from "@/components/contactSection/contactSection";
import { useState } from "react";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <>
      <ResizablePanelGroup>
        <ResizablePanel minSize="50%" defaultSize="70%">
          <ContactSection
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize="30%">
          <DetailsPanel selectedId={selectedId} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
