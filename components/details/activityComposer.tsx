"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Phone, Mail, CalendarDays, FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useCreateActivity } from "@/hooks/contactActivities/useCreateActivity";

const schema = z.object({
  type: z.enum(["call", "email", "meeting", "note"]),
  description: z.string().min(1, "Required"),
});

type FormValues = z.infer<typeof schema>;

interface Props {
  contactId: string;
}

export default function ActivityComposer({ contactId }: Props) {
  const mutation = useCreateActivity(contactId);

  const { register, watch, setValue, reset, handleSubmit } =
    useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues: {
        type: "note",
        description: "",
      },
    });

  const type = watch("type");

  useEffect(() => {
    reset();
  }, [contactId, reset]);

  const submit = handleSubmit(async (values) => {
    await mutation.mutateAsync({
      ...values,
      title: values.type,
    });

    reset({
      type: values.type,
      description: "",
    });
  });

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <Textarea
          {...register("description")}
          rows={5}
          placeholder="Write a note, log a phone call, meeting, email..."
          autoFocus
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
        />

        <div className="flex items-center justify-between">
          <ToggleGroup
            type="single"
            value={type}
            onValueChange={(v) => {
              if (v) setValue("type", v as FormValues["type"]);
            }}
          >
            <ToggleGroupItem value="note">
              <FileText className="mr-2 h-4 w-4" />
              Note
            </ToggleGroupItem>

            <ToggleGroupItem value="call">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </ToggleGroupItem>

            <ToggleGroupItem value="meeting">
              <CalendarDays className="mr-2 h-4 w-4" />
              Meeting
            </ToggleGroupItem>

            <ToggleGroupItem value="email">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </ToggleGroupItem>
          </ToggleGroup>

          <Button onClick={submit} disabled={mutation.isPending}>
            {mutation.isPending ? "Saving..." : "Save"}
          </Button>
        </div>

        <p className="text-muted-foreground text-xs">
          Press <kbd>Ctrl</kbd> + <kbd>Enter</kbd> to save
        </p>
      </CardContent>
    </Card>
  );
}
