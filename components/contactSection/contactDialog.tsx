"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import { useCreateContact } from "@/hooks/useCreateContacts";
import ContactForm from "./contactForm";

export default function AddContactDialog() {
  const [open, setOpen] = useState(false);

  const mutation = useCreateContact();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Add Contact</DialogTitle>
        </DialogHeader>

        <ContactForm
          loading={mutation.isPending}
          onSubmit={async (values) => {
            const modifiedValues = {
              ...values,
              last_contacted: values.last_contacted.toISOString().split("T")[0],
              next_followup: values.next_followup.toISOString().split("T")[0],
            };
            await mutation.mutateAsync(modifiedValues);

            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
