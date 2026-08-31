import { MousePointerClick } from "lucide-react";

export default function DetailsEmptyState() {
  return (
    <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-2 px-6 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted">
        <MousePointerClick className="h-5 w-5 text-muted-foreground" />
      </div>
      <p className="mt-2 text-sm font-medium text-foreground">
        No contact selected
      </p>
      <p className="max-w-[220px] text-sm text-muted-foreground">
        Pick a contact from the list to see their details and activity.
      </p>
    </div>
  );
}
