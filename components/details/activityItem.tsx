"use client";

import { format } from "date-fns";

import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import ActivityIcon from "./activityIcon";

export default function ActivityItem({ activity }: any) {
  return (
    <div className="group flex gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/40">
      <div className="mt-1 rounded-full bg-muted p-2">
        <ActivityIcon type={activity.type} />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">{activity.title}</p>

            <p className="text-xs text-muted-foreground">
              {format(new Date(activity.created_at), "hh:mm a")}
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 transition-opacity group-hover:opacity-100"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className="mt-3 whitespace-pre-wrap leading-7 text-muted-foreground">
          {activity.description}
        </p>
      </div>
    </div>
  );
}
