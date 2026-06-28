"use client";

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
import { useMemo, useState } from "react";
import { format } from "date-fns";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import DetailsPanel from "@/components/details/detailsPanel";
import { FollowUp } from "@/types/followup";
import { useHotkeys } from "react-hotkeys-hook";

const followUps: FollowUp[] = [
  {
    name: "Sahadat Sk",
    lastContacted: new Date("2026-06-20"),
    nextFollowup: new Date("2026-06-30"),
    source: "LinkedIn",
    status: "Interested",
  },
  {
    name: "Priya Sharma",
    lastContacted: new Date("2026-06-18"),
    nextFollowup: new Date("2026-06-28"),
    source: "Referral",
    status: "Pending",
  },
  {
    name: "Amit Patel",
    lastContacted: new Date("2026-06-15"),
    nextFollowup: new Date("2026-07-01"),
    source: "Website",
    status: "Qualified",
  },
  {
    name: "Neha Gupta",
    lastContacted: new Date("2026-06-10"),
    nextFollowup: new Date("2026-06-27"),
    source: "Email Campaign",
    status: "No Response",
  },
  {
    name: "Rahul Verma",
    lastContacted: new Date("2026-06-22"),
    nextFollowup: new Date("2026-07-02"),
    source: "Networking Event",
    status: "Meeting Scheduled",
  },
  {
    name: "Ananya Roy",
    lastContacted: new Date("2026-06-12"),
    nextFollowup: new Date("2026-06-29"),
    source: "Cold Outreach",
    status: "Follow Up",
  },
  {
    name: "Karan Mehta",
    lastContacted: new Date("2026-06-05"),
    nextFollowup: new Date("2026-06-26"),
    source: "WhatsApp",
    status: "Won",
  },
  {
    name: "Sneha Das",
    lastContacted: new Date("2026-06-08"),
    nextFollowup: new Date("2026-07-05"),
    source: "Instagram",
    status: "Lost",
  },
  {
    name: "Vikram Singh",
    lastContacted: new Date("2026-06-24"),
    nextFollowup: new Date("2026-07-03"),
    source: "Conference",
    status: "Interested",
  },
  {
    name: "Meera Joshi",
    lastContacted: new Date("2026-06-16"),
    nextFollowup: new Date("2026-06-30"),
    source: "Existing Customer",
    status: "Renewal Discussion",
  },
];
const columnHelper = createColumnHelper<FollowUp>();

export default function Home() {
  const [selectedId, setSelectedId] = useState(followUps[0].name);
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("lastContacted", {
        header: "Last Contacted",
        cell: (info) => format(info.getValue(), "dd MMM"),
      }),

      columnHelper.accessor("nextFollowup", {
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

  const selected = useMemo(
    () => followUps.find((f) => f.name === selectedId),
    [selectedId],
  );

  const moveDown = () => {
    const curr = followUps.findIndex((f) => f.name === selectedId);
    const size = followUps.length;
    const newIdx = (curr + 1) % size;
    const next = followUps[newIdx];

    if (next) {
      setSelectedId(next.name);
    }
  };

  const moveUp = () => {
    const curr = followUps.findIndex((f) => f.name === selectedId);
    const size = followUps.length;
    const newIdx = (curr - 1 + size) % size;
    const next = followUps[newIdx];

    if (next) {
      setSelectedId(next.name);
    }
  };

  useHotkeys("arrowup", moveUp);
  useHotkeys("arrowdown", moveDown);

  const table = useReactTable({
    data: followUps,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <ResizablePanelGroup>
        <ResizablePanel minSize="50%" defaultSize="70%">
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
                    row.original.name == selectedId ? "selected" : undefined
                  }
                  onClick={() => setSelectedId(row.original.name)}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize="30%">
          <DetailsPanel followUp={selected} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
