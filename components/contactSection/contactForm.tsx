"use client";

import { useForm } from "react-hook-form";
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

import { Controller } from "react-hook-form";
import { DatePickerField } from "../ui/datepickerField";

type Props = {
  defaultValues?: Partial<ContactFormValues>;
  loading?: boolean;
  onSubmit: (values: ContactFormValues) => void;
};

export default function ContactForm({
  defaultValues,
  loading,
  onSubmit,
}: Props) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      source: "",
      status: "Interested",
      last_contacted: new Date(),
      next_followup: new Date(),
      ...defaultValues,
    },
  });

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

        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-4">
        <Controller
          control={control}
          name="last_contacted"
          render={({ field }) => (
            <div className="space-y-2">
              <Label>Last Contacted</Label>

              <DatePickerField value={field.value} onChange={field.onChange} />

              {errors.last_contacted && (
                <p className="text-sm text-destructive">
                  {errors.last_contacted.message}
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
              <Label>Next Follow-up</Label>

              <DatePickerField value={field.value} onChange={field.onChange} />

              {errors.next_followup && (
                <p className="text-sm text-destructive">
                  {errors.next_followup.message}
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
              <Label>Source</Label>

              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose source" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                  <SelectItem value="Referral">Referral</SelectItem>
                  <SelectItem value="Website">Website</SelectItem>
                  <SelectItem value="Conference">Conference</SelectItem>
                  <SelectItem value="Cold Outreach">Cold Outreach</SelectItem>
                </SelectContent>
              </Select>

              {errors.source && (
                <p className="text-sm text-destructive">
                  {errors.source.message}
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
              <Label>Status</Label>

              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
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

              {errors.status && (
                <p className="text-sm text-destructive">
                  {errors.status.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      <Button className="w-full" disabled={loading}>
        {loading ? "Saving..." : "Save Contact"}
      </Button>
    </form>
  );
}
