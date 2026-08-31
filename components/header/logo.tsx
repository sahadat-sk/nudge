import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconSize?: number;
  showWordmark?: boolean;
}

// Mark: a message bubble (the follow-up) with an amber ping (the nudge).
// Kept to two flat shapes + one dot so it still reads at 16px (favicon size).
export default function Logo({
  className,
  iconSize = 28,
  showWordmark = true,
}: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="9" fill="#4F46E5" />
        <path
          d="M9 12a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-5.5l-3.8 2.8a.6.6 0 0 1-.95-.48V21H12a3 3 0 0 1-3-3z"
          fill="white"
        />
        <circle
          cx="23.5"
          cy="8.5"
          r="3.5"
          fill="#F59E0B"
          stroke="#4F46E5"
          strokeWidth="1.6"
        />
      </svg>

      {showWordmark && (
        <span className="text-xl leading-none">
          <span className="font-bold text-foreground">Nudge</span>
          <span className="font-normal text-muted-foreground">Followup</span>
        </span>
      )}
    </div>
  );
}
