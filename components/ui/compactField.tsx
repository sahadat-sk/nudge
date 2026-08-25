// components/ui/compactField.tsx
// Icon + label + control on one row. Used for fields that don't need the
// full label-above-input treatment (Source, Last Contacted). Pass
// tone="warning" to tint the row (used for an overdue/due-today follow-up).

import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  label: string;
  children: ReactNode;
  tone?: "default" | "warning";
}

export default function CompactField({
  icon: Icon,
  label,
  children,
  tone = "default",
}: Props) {
  const isWarning = tone === "warning";

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-lg p-2",
        isWarning && "bg-amber-50 p-2 dark:bg-amber-950/40",
      )}
    >
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
          isWarning ? "bg-background" : "bg-muted",
        )}
      >
        <Icon
          className={cn(
            "h-4 w-4",
            isWarning
              ? "text-amber-600 dark:text-amber-400"
              : "text-muted-foreground",
          )}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "text-xs leading-none",
            isWarning
              ? "text-amber-700 dark:text-amber-400"
              : "text-muted-foreground",
          )}
        >
          {label}
        </p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
