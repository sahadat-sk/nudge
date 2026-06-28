import { FollowUp } from "@/types/followup";

type DetailsPanelProps = {
  followUp: FollowUp | undefined;
};
function DetailsPanel({ followUp }: DetailsPanelProps) {
  if (!followUp) return null;

  return (
    <>
      <div>{followUp.name}</div>
    </>
  );
}
export default DetailsPanel;
