import { useContact } from "@/hooks/contacts/useContact";
import ActivityComposer from "./activityComposer";
import { useActivities } from "@/hooks/contactActivities/useActivities";

type DetailsPanelProps = {
  selectedId: string | null;
};

function DetailsPanel({ selectedId }: DetailsPanelProps) {
  const { data, isLoading } = useContact(selectedId);
  const hii = useActivities(selectedId);

  console.log(hii.data);

  if (!selectedId || isLoading) return <>Loading.....</>;

  return (
    <>
      <div>{data?.name}</div>
      <ActivityComposer contactId={selectedId} />
    </>
  );
}
export default DetailsPanel;
