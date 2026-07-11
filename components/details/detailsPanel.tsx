import { useContact } from "@/hooks/contacts/useContact";
import ActivityComposer from "./activityComposer";
import { useActivities } from "@/hooks/contactActivities/useActivities";
import ContactDetails from "./contactDetails";
import ActivityTimeline from "./activityTimeLine";

type DetailsPanelProps = {
  selectedId: string | null;
};

function DetailsPanel({ selectedId }: DetailsPanelProps) {
  const activities = useActivities(selectedId);

  if (!selectedId || !activities.data) return <>Loading.....</>;

  return (
    <>
      <ContactDetails contactId={selectedId} />
      <ActivityComposer contactId={selectedId} />
      <ActivityTimeline contactId={selectedId} />
    </>
  );
}
export default DetailsPanel;
