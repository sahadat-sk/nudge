"use client";

import { forwardRef, useImperativeHandle } from "react";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactFormValues, contactSchema } from "@/schemas/contact";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { DatePickerField } from "../ui/datepickerField";
import { ContactFormHandle } from "@/types/contacts";
import { CalendarClock, Clock, Globe } from "lucide-react";
import CompactField from "../ui/compactField";

type Props = {
  defaultValues?: Partial<ContactFormValues>;
  loading?: boolean;
  onSubmit: (values: ContactFormValues) => void | Promise<void>;
};

const getDefaultNextFollowup = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date;
};

const ContactForm = forwardRef<ContactFormHandle, Props>(
  ({ defaultValues, loading, onSubmit }, ref) => {
    const { register, control, handleSubmit, reset, formState } =
      useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
          name: "",
          source: "",
          status: "Interested",
          last_contacted: new Date(),
          next_followup: getDefaultNextFollowup(),
          contact_details: "",
          ...defaultValues,
        },
      });

    useImperativeHandle(
      ref,
      () => ({
        get isDirty() {
          return formState.isDirty;
        },

        reset,

        submit: () => {
          void handleSubmit(onSubmit)();
        },
      }),
      [formState.isDirty, reset, handleSubmit, onSubmit],
    );

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>

          <Input
            id="name"
            placeholder="John Doe"
            autoFocus
            {...register("name")}
          />

          {formState.errors.name && (
            <p className="text-sm text-destructive">
              {formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <Controller
            control={control}
            name="last_contacted"
            render={({ field }) => (
              <div className="space-y-2">
                <DatePickerField
                  value={field.value}
                  onChange={field.onChange}
                  label="Last Contacted"
                  icon={Clock}
                />

                {formState.errors.last_contacted && (
                  <p className="text-sm text-destructive">
                    {formState.errors.last_contacted.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="next_followup"
            render={({ field }) => (
              <div className="space-y-2">
                <DatePickerField
                  value={field.value}
                  onChange={field.onChange}
                  label="Next Follow-up"
                  icon={CalendarClock}
                />

                {formState.errors.next_followup && (
                  <p className="text-sm text-destructive">
                    {formState.errors.next_followup.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        {/* Source + Status */}
        <div className="grid grid-cols-2 gap-4">
          <Controller
            control={control}
            name="source"
            render={({ field }) => (
              <div className="space-y-2">
                <CompactField icon={Globe} label="Source">
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-auto border-none bg-transparent p-0 text-sm font-medium shadow-none">
                      <SelectValue placeholder="Choose source" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="LinkedIn">LinkedIn</SelectItem>

                      <SelectItem value="Referral">Referral</SelectItem>

                      <SelectItem value="Website">Website</SelectItem>

                      <SelectItem value="Conference">Conference</SelectItem>

                      <SelectItem value="Cold Outreach">
                        Cold Outreach
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </CompactField>

                {formState.errors.source && (
                  <p className="text-sm text-destructive">
                    {formState.errors.source.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <div className="space-y-2">
                <CompactField icon={Globe} label="Source">
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-auto border-none bg-transparent p-0 text-sm font-medium shadow-none">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="Interested">Interested</SelectItem>

                      <SelectItem value="Qualified">Qualified</SelectItem>

                      <SelectItem value="Meeting Scheduled">
                        Meeting Scheduled
                      </SelectItem>

                      <SelectItem value="Won">Won</SelectItem>

                      <SelectItem value="Lost">Lost</SelectItem>
                    </SelectContent>
                  </Select>
                </CompactField>

                {formState.errors.status && (
                  <p className="text-sm text-destructive">
                    {formState.errors.status.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Contact Details</Label>

          <Input
            id="contact_details"
            placeholder="johndoe@nudge.com/9547122470"
            {...register("contact_details")}
          />

          {formState.errors.contact_details && (
            <p className="text-sm text-destructive">
              {formState.errors.contact_details.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Saving..." : "Save Contact"}
        </Button>
      </form>
    );
  },
);

ContactForm.displayName = "ContactForm";

export default ContactForm;
