import { Phone, Mail, CalendarDays, FileText } from "lucide-react";

interface Props {
  type: string;
}

export default function ActivityIcon({ type }: Props) {
  switch (type) {
    case "call":
      return <Phone className="h-4 w-4" />;

    case "email":
      return <Mail className="h-4 w-4" />;

    case "meeting":
      return <CalendarDays className="h-4 w-4" />;

    default:
      return <FileText className="h-4 w-4" />;
  }
}
