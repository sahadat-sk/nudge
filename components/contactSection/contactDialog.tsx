"use client";

import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { useHotkeys } from "react-hotkeys-hook";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

import ContactForm from "./contactForm";
import { useCreateContact } from "@/hooks/contacts/useCreateContacts";
import { ContactFormHandle } from "@/types/contacts";
import { format } from "date-fns";

export default function AddContactDialog() {
  const mutation = useCreateContact();

  const formRef = useRef<ContactFormHandle>(null);

  const [open, setOpen] = useState(false);
  const [discardOpen, setDiscardOpen] = useState(false);

  useHotkeys("ctrl+shift+n,meta+n", () => {
    setOpen(true);
  });

  function attemptClose() {
    if (formRef.current?.isDirty) {
      setDiscardOpen(true);
      return;
    }

    setOpen(false);
  }

  function discardChanges() {
    formRef.current?.reset();

    setDiscardOpen(false);
    setOpen(false);
  }

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            attemptClose();
            return;
          }

          setOpen(true);
        }}
      >
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Contact
          </Button>
        </DialogTrigger>

        <DialogContent
          className="sm:max-w-xl"
          onEscapeKeyDown={(e) => {
            e.preventDefault();
            attemptClose();
          }}
          onInteractOutside={(e) => {
            e.preventDefault();
            attemptClose();
          }}
        >
          <DialogHeader>
            <DialogTitle>Add Contact</DialogTitle>
          </DialogHeader>

          <ContactForm
            ref={formRef}
            loading={mutation.isPending}
            onSubmit={async (values) => {
              await mutation.mutateAsync({
                ...values,
                last_contacted: format(values.last_contacted, "yyyy-MM-dd"),
                next_followup: format(values.next_followup, "yyyy-MM-dd"),
              });

              formRef.current?.reset();

              setOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog open={discardOpen} onOpenChange={setDiscardOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard changes?</AlertDialogTitle>

            <AlertDialogDescription>
              You have unsaved changes. If you close this dialog, everything you
              have entered will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Continue Editing</AlertDialogCancel>

            <AlertDialogAction onClick={discardChanges}>
              Discard Changes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
