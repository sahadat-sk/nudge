import { Badge } from "@/components/ui/badge";
import { Contact } from "@/types/contacts";

interface Props {
  contact: Contact;
}

export default function ContactHeader({ contact }: Props) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">{contact.name}</h1>

      <div className="flex gap-2">
        <Badge variant="secondary">{contact.source}</Badge>

        <Badge>{contact.status}</Badge>
      </div>
    </div>
  );
}
