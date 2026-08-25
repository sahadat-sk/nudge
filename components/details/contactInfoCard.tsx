"use client";

import { useEffect, useState } from "react";
import { Globe, Clock, CalendarClock } from "lucide-react";
import { format, isPast, isToday } from "date-fns";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DatePickerField } from "@/components/ui/datepickerField";
import { Contact } from "@/types/contacts";
import { useUpdateContact } from "@/hooks/contacts/useUpdateContact";
import EditableSelect from "../ui/editableSelect";
import { cn } from "@/lib/utils";
import { getStatusColor } from "@/lib/getStatusColor";
import CompactField from "../ui/compactField";

interface Props {
  contact: Contact;
}

const STATUS_OPTIONS = [
  "Interested",
  "Qualified",
  "Meeting Scheduled",
  "Hot",
  "Warm",
  "Won",
  "Lost",
];

const SOURCE_OPTIONS = [
  "LinkedIn",
  "Referral",
  "Conference",
  "Website",
  "Cold Outreach",
  "Existing Customer",
  "Email Campaign",
];

// Shared classes that make an Input read as plain text until you interact
// with it — border and background only appear on hover/focus. Used for the
// name and contact-details fields so the header doesn't look like a form.
const ghostInputClasses =
  "-mx-1 h-auto border border-transparent bg-transparent px-1 py-0.5 shadow-none " +
  "hover:border-input focus-visible:border-input focus-visible:ring-0 focus-visible:ring-offset-0";

export default function ContactInfoCard({ contact }: Props) {
  const mutation = useUpdateContact(contact.id);

  const [draft, setDraft] = useState(contact);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDraft(contact);
  }, [contact]);

  function update(values: Partial<Contact>) {
    setDraft((prev) => ({
      ...prev,
      ...values,
    }));

    mutation.mutate(values);
  }

  const followUpDate = draft.next_followup
    ? new Date(draft.next_followup)
    : undefined;
  const followUpIsUrgent =
    followUpDate && (isToday(followUpDate) || isPast(followUpDate));

  console.log("hellow");

  return (
    <Card className="rounded-none">
      <CardContent className="space-y-5 pt-4">
        {/* Identity: name + contact details as inline "ghost" inputs, status
            as a colored pill so it reads at a glance without its own label. */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1 space-y-0.5">
            <Input
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              onBlur={() => update({ name: draft.name })}
              className={cn(ghostInputClasses, "md:text-2xl font-medium")}
            />
            <Input
              value={draft.contact_details}
              onChange={(e) =>
                setDraft({ ...draft, contact_details: e.target.value })
              }
              onBlur={() => update({ contact_details: draft.contact_details })}
              className={cn(ghostInputClasses, "text-sm text-muted-foreground")}
            />
          </div>

          {/* Assumes EditableSelect forwards `className` to its trigger.
              If it doesn't expose that prop, add one — this is what turns
              the status dropdown into the colored pill. */}
          <EditableSelect
            value={draft.status}
            options={STATUS_OPTIONS}
            onChange={(value) => update({ status: value })}
            className={cn(
              "h-auto shrink-0 rounded-full border-none px-3 py-1 text-xs font-medium shadow-none",
              getStatusColor(draft.status),
            )}
          />
        </div>

        {/* Source + Last contacted: compact icon rows instead of full
            labeled boxes. */}
        <div className="grid grid-cols-2 gap-4 border-t pt-4">
          <CompactField icon={Globe} label="Source">
            <EditableSelect
              value={draft.source}
              options={SOURCE_OPTIONS}
              onChange={(value) => update({ source: value })}
              className="h-auto border-none bg-transparent p-0 text-sm font-medium shadow-none"
            />
          </CompactField>

          <DatePickerField
            value={
              draft.last_contacted ? new Date(draft.last_contacted) : undefined
            }
            onChange={(date) =>
              update({
                last_contacted: date ? format(date, "yyyy-MM-dd") : undefined,
              })
            }
            className="h-auto border-none bg-transparent p-0 text-sm font-medium shadow-none"
            icon={Clock}
            label="Last contacted"
          />
        </div>

        {/* Next follow-up gets its own row and a warning tint when it's due
            today or overdue — the one date worth calling out visually. */}
        {/* <CompactField
          icon={CalendarClock}
          label={followUpIsUrgent ? "Next follow-up · due" : "Next follow-up"}
          tone={followUpIsUrgent ? "warning" : "default"}
        > */}
        <DatePickerField
          value={followUpDate}
          onChange={(date) =>
            update({
              next_followup: date ? format(date, "yyyy-MM-dd") : undefined,
            })
          }
          className={cn(
            "h-auto border-none bg-transparent p-0 text-sm font-medium shadow-none",
            followUpIsUrgent && "text-amber-700 dark:text-amber-400",
          )}
          icon={CalendarClock}
          label={followUpIsUrgent ? "Next follow-up · due" : "Next follow-up"}
          tone={followUpIsUrgent ? "warning" : "default"}
        />
      </CardContent>
    </Card>
  );
}
