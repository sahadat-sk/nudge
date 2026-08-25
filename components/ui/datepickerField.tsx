"use client";

import { format } from "date-fns";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  className?: string;
  icon: LucideIcon;
  label: string;
  tone?: "default" | "warning";
};

// The icon + label + value row IS the trigger button (a real <button>),
// not a wrapper around one — PopoverTrigger's asChild only forwards its
// onClick/ref to a genuine DOM element, so that element has to be the
// outermost node, not something buried a couple of components deep.
export function DatePickerField({
  value,
  onChange,
  className,
  icon: Icon,
  label,
  tone = "default",
}: Props) {
  const isWarning = tone === "warning";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex w-full items-center gap-2.5 rounded-lg text-left transition-colors hover:bg-muted/50 ",
            isWarning &&
              "bg-amber-50 hover:bg-amber-100 p-2 dark:bg-amber-950/40 dark:hover:bg-amber-950/60",
            className,
          )}
        >
          <span
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
          </span>

          <span className="min-w-0 flex-1">
            <span
              className={cn(
                "block text-xs leading-none",
                isWarning
                  ? "text-amber-700 dark:text-amber-400"
                  : "text-muted-foreground",
              )}
            >
              {label}
            </span>
            <span
              className={cn(
                "mt-1 block text-sm font-medium",
                !value && "text-muted-foreground",
                isWarning && "text-amber-700 dark:text-amber-400",
              )}
            >
              {value ? format(value, "PPP") : "Pick a date"}
            </span>
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={value} onSelect={onChange} />
      </PopoverContent>
    </Popover>
  );
}
