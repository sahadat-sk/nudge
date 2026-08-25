"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Props {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  className?: string;
}

export default function EditableSelect({
  value,
  options,
  onChange,
  className,
}: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={cn(className)}>
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
