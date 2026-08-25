// lib/statusColors.ts
// Maps a contact's status to Tailwind classes for the pill in ContactInfoCard.
// Extend this if you add new values to STATUS_OPTIONS.

export const STATUS_COLORS: Record<string, string> = {
  Interested:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  Qualified: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
  "Meeting Scheduled":
    "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
  Hot: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
  Warm: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  Won: "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300",
  Lost: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
};

export const DEFAULT_STATUS_COLOR = "bg-muted text-muted-foreground";

export function getStatusColor(status: string): string {
  return STATUS_COLORS[status] ?? DEFAULT_STATUS_COLOR;
}
