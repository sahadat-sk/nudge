"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

type FollowUp = {
  name: string;
  lastContacted: string;
  nextFollowup: string;
  source: string;
  status: string;
};

const followUps: FollowUp[] = [
  {
    name: "Sahadat Sk",
    lastContacted: "2026-06-20",
    nextFollowup: "2026-06-30",
    source: "LinkedIn",
    status: "Interested",
  },
  {
    name: "Priya Sharma",
    lastContacted: "2026-06-18",
    nextFollowup: "2026-06-28",
    source: "Referral",
    status: "Pending",
  },
  {
    name: "Amit Patel",
    lastContacted: "2026-06-15",
    nextFollowup: "2026-07-01",
    source: "Website",
    status: "Qualified",
  },
  {
    name: "Neha Gupta",
    lastContacted: "2026-06-10",
    nextFollowup: "2026-06-27",
    source: "Email Campaign",
    status: "No Response",
  },
  {
    name: "Rahul Verma",
    lastContacted: "2026-06-22",
    nextFollowup: "2026-07-02",
    source: "Networking Event",
    status: "Meeting Scheduled",
  },
  {
    name: "Ananya Roy",
    lastContacted: "2026-06-12",
    nextFollowup: "2026-06-29",
    source: "Cold Outreach",
    status: "Follow Up",
  },
  {
    name: "Karan Mehta",
    lastContacted: "2026-06-05",
    nextFollowup: "2026-06-26",
    source: "WhatsApp",
    status: "Won",
  },
  {
    name: "Sneha Das",
    lastContacted: "2026-06-08",
    nextFollowup: "2026-07-05",
    source: "Instagram",
    status: "Lost",
  },
  {
    name: "Vikram Singh",
    lastContacted: "2026-06-24",
    nextFollowup: "2026-07-03",
    source: "Conference",
    status: "Interested",
  },
  {
    name: "Meera Joshi",
    lastContacted: "2026-06-16",
    nextFollowup: "2026-06-30",
    source: "Existing Customer",
    status: "Renewal Discussion",
  },
];

const columnHelper = createColumnHelper<FollowUp>();

export default function Home() {
  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("lastContacted", {
        header: "Last Contacted",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("nextFollowup", {
        header: "Next Followup",
        cell: (info) => info.getValue(),
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

  const table = useReactTable({
    data: followUps,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
