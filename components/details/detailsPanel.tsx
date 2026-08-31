import ActivityComposer from "./activityComposer";
import { useActivities } from "@/hooks/contactActivities/useActivities";
import ContactDetails from "./contactDetails";
import ActivityTimeline from "./activityTimeLine";
import DetailsEmptyState from "./detailsEmptyState";
import DetailsPanelSkeleton from "./detailsPanelSkeleton";

type DetailsPanelProps = {
  selectedId: string | null;
};

function DetailsPanel({ selectedId }: DetailsPanelProps) {
  const activities = useActivities(selectedId);

  // Nothing picked yet — this isn't a loading state, it's an empty one.
  if (!selectedId) return <DetailsEmptyState />;

  // A contact is selected but its activity is still in flight.
  if (!activities.data) return <DetailsPanelSkeleton />;

  return (
    <>
      <ContactDetails contactId={selectedId} />
      <ActivityComposer contactId={selectedId} />
      <ActivityTimeline contactId={selectedId} />
    </>
  );
}

export default DetailsPanel;
