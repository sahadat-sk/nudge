import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useHotkeys } from "react-hotkeys-hook";

import { format } from "date-fns";

import { Contact } from "@/types/followup";
import { useEffect, useMemo, useState } from "react";
import { useContacts } from "@/hooks/useContacts";
import AddContactDialog from "./contactDialog";

const columnHelper = createColumnHelper<Contact>();

function ContactSection({
  selectedId,
  setSelectedId,
}: {
  selectedId: string | null;
  setSelectedId: (state: string) => void;
}) {
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("last_contacted", {
        header: "Last Contacted",
        cell: (info) => format(info.getValue(), "dd MMM"),
      }),

      columnHelper.accessor("next_followup", {
        header: "Next Followup",

        cell: (info) => format(info.getValue(), "dd MMM"),
      }),

      columnHelper.accessor("source", {
        header: "Source",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => info.getValue(),
      }),
    ],
    [],
  );

  const contacts = useContacts();

  const table = useReactTable({
    data: contacts.data?.items ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rows = table.getRowModel().rows;

  const moveDown = () => {
    const curr = rows.findIndex((f) => f.original.id === selectedId);
    const size = rows.length;
    const newIdx = (curr + 1) % size;
    const next = rows[newIdx];

    if (next) {
      setSelectedId(next.original.id);
    }
  };

  const moveUp = () => {
    const curr = rows.findIndex((f) => f.original.id === selectedId);
    const size = rows.length;
    const newIdx = (curr - 1 + size) % size;
    const next = rows[newIdx];

    if (next) {
      setSelectedId(next.original.id);
    }
  };

  useHotkeys("arrowup", moveUp);
  useHotkeys("arrowdown", moveDown);

  useEffect(() => {
    if (!contacts.data?.items.length) return;

    const exists = contacts.data.items.some(
      (contact: { id: string }) => contact.id === selectedId,
    );

    if (!exists) {
      setSelectedId(contacts.data?.items[0].id);
    }
  }, [contacts.data, selectedId, setSelectedId]);

  return (
    <>
      <AddContactDialog />
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={
                row.original.id == selectedId ? "selected" : undefined
              }
              onClick={() => setSelectedId(row.original.id)}
              className="cursor-pointer"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default ContactSection;
