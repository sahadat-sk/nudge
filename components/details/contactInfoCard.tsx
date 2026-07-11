"use client";

import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { DatePickerField } from "@/components/ui/datepickerField";
import { Contact } from "@/types/contacts";
import { useUpdateContact } from "@/hooks/contacts/useUpdateContact";
import EditableField from "../ui/editableField";
import EditableSelect from "../ui/editableSelect";
import { format } from "date-fns";

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

export default function ContactInfoCard({ contact }: Props) {
  const mutation = useUpdateContact(contact.id);

  const [draft, setDraft] = useState(contact);

  useEffect(() => {
    setDraft(contact);
  }, [contact]);

  function update(values: Partial<Contact>) {
    console.log("Values are", values);
    setDraft((prev) => ({
      ...prev,
      ...values,
    }));

    mutation.mutate(values);
  }

  return (
    <Card>
      <CardContent className="space-y-6 pt-6">
        <EditableField label="Name">
          <Input
            value={draft.name}
            onChange={(e) =>
              setDraft({
                ...draft,
                name: e.target.value,
              })
            }
            onBlur={() =>
              update({
                name: draft.name,
              })
            }
          />
        </EditableField>

        <div className="grid grid-cols-2 gap-5">
          <EditableField label="Status">
            <EditableSelect
              value={draft.status}
              options={STATUS_OPTIONS}
              onChange={(value) =>
                update({
                  status: value,
                })
              }
            />
          </EditableField>

          <EditableField label="Source">
            <EditableSelect
              value={draft.source}
              options={SOURCE_OPTIONS}
              onChange={(value) =>
                update({
                  source: value,
                })
              }
            />
          </EditableField>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <EditableField label="Next Follow-up">
            <DatePickerField
              value={new Date(draft.next_followup)}
              onChange={(date) =>
                update({
                  next_followup: date ? format(date, "yyyy-MM-dd") : undefined,
                })
              }
            />
          </EditableField>

          <EditableField label="Last Contacted">
            <DatePickerField
              value={new Date(draft.last_contacted)}
              onChange={(date) =>
                update({
                  last_contacted: date ? format(date, "yyyy-MM-dd") : undefined,
                })
              }
            />
          </EditableField>
        </div>
      </CardContent>
    </Card>
  );
}
