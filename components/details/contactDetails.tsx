import { useContact } from "@/hooks/contacts/useContact";
import ContactHeader from "./contactHeader";
import ContactInfoCard from "./contactInfoCard";
import ActivityTimeline from "./activityTimeLine";

type ContactDetailsProps = {
  contactId: string;
};
function ContactDetails({ contactId }: ContactDetailsProps) {
  const contact = useContact(contactId);
  if (contact.isLoading) return null;
  return (
    <>
      <ContactHeader contact={contact.data} />
      <ContactInfoCard contact={contact.data} />
    </>
  );
}
export default ContactDetails;
