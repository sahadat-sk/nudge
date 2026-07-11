// EditableField.tsx

import { ReactNode } from "react";

import { Label } from "@/components/ui/label";

interface Props {
  label: string;

  children: ReactNode;
}

export default function EditableField({ label, children }: Props) {
  return (
    <div className="space-y-2">
      <Label className="text-muted-foreground text-xs uppercase tracking-wide">
        {label}
      </Label>

      {children}
    </div>
  );
}
