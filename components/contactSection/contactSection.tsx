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

import { Contact } from "@/types/contacts";
import { useEffect, useMemo, useState } from "react";
import { useContacts } from "@/hooks/contacts/useContacts";
import { defaultContactQuery } from "@/types/searchParams";
import ContactToolbar from "./contactToolBar";
import { Button } from "../ui/button";

const columnHelper = createColumnHelper<Contact>();

function ContactSection({
  selectedId,
  setSelectedId,
}: {
  selectedId: string | null;
  setSelectedId: (state: string) => void;
}) {
  const [query, setQuery] = useState(defaultContactQuery);

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: () => (
          <Button
            variant="ghost"
            onClick={() =>
              setQuery((q) => ({
                ...q,
                sortBy: "name",
                sortOrder:
                  q.sortBy == "name" && q.sortOrder == "asc" ? "desc" : "asc",
              }))
            }
          >
            Name
          </Button>
        ),
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

  const contacts = useContacts(query);

  // eslint-disable-next-line react-hooks/incompatible-library
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
      <ContactToolbar query={query} setQuery={setQuery} />
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
      <div className="mt-4 flex items-center justify-between">
        <Button
          disabled={query.page === 1}
          onClick={() =>
            setQuery((q) => ({
              ...q,
              page: q.page - 1,
            }))
          }
        >
          Previous
        </Button>

        <span>Page {query.page}</span>

        <Button
          disabled={!contacts.data?.has_next}
          onClick={() =>
            setQuery((q) => ({
              ...q,
              page: q.page + 1,
            }))
          }
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default ContactSection;
