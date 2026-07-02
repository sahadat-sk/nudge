import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(200),

  last_contacted: z.date(),

  next_followup: z.date(),

  source: z.string().trim().min(1, "Source is required"),

  status: z.string().trim().min(1, "Status is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
