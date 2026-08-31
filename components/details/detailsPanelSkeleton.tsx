import { Skeleton } from "@/components/ui/skeleton";

// Mirrors the real layout (identity row, meta grid, composer, timeline) so
// there's no layout shift when ContactDetails/ActivityTimeline mount with
// real data. Swap the Skeleton import if your project doesn't have
// shadcn's skeleton primitive yet: `npx shadcn@latest add skeleton`.
export default function DetailsPanelSkeleton() {
  return (
    <div className="space-y-5 p-6">
      {/* Identity row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-11 w-11 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-40" />
          </div>
        </div>
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>

      {/* Meta grid */}
      <div className="grid grid-cols-2 gap-4 border-t pt-4">
        <Skeleton className="h-10 w-full rounded-lg" />
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
      <Skeleton className="h-10 w-full rounded-lg" />

      {/* Composer */}
      <Skeleton className="h-20 w-full rounded-lg" />

      {/* Timeline */}
      <div className="space-y-4 pt-2">
        <Skeleton className="h-3 w-16" />
        {[0, 1].map((i) => (
          <div key={i} className="flex gap-3">
            <Skeleton className="h-6 w-6 shrink-0 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
