import { useContact } from "@/hooks/contacts/useContact";
import ContactInfoCard from "./contactInfoCard";

type ContactDetailsProps = {
  contactId: string;
};
function ContactDetails({ contactId }: ContactDetailsProps) {
  const contact = useContact(contactId);
  if (contact.isLoading) return null;
  return (
    <>
      <ContactInfoCard contact={contact.data} />
    </>
  );
}
export default ContactDetails;
