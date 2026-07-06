import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

import AddContactDialog from "./contactDialog";
import { ContactQuery } from "@/types/searchParams";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";

interface Props {
  query: ContactQuery;
  setQuery: React.Dispatch<React.SetStateAction<ContactQuery>>;
}

export default function ContactToolbar({ query, setQuery }: Props) {
  const [searchInput, setSearchInput] = useState(query.search);

  const [debouncedSearch] = useDebounce(searchInput, 300);

  useEffect(() => {
    setQuery((q) => ({
      ...q,
      search: debouncedSearch,
      page: 1,
    }));
  }, [debouncedSearch, setQuery]);

  return (
    <div className="mb-4 flex items-center gap-3">
      <Input
        placeholder="Search contacts..."
        value={searchInput}
        className="max-w-sm"
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <Select
        value={query.status ?? "all"}
        onValueChange={(v) =>
          setQuery((q) => ({
            ...q,
            status: v === "all" ? undefined : v,
            page: 1,
          }))
        }
      >
        <SelectTrigger className="w-44">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="Interested">Interested</SelectItem>
          <SelectItem value="Qualified">Qualified</SelectItem>
          <SelectItem value="Won">Won</SelectItem>
          <SelectItem value="Lost">Lost</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={query.source ?? "all"}
        onValueChange={(v) =>
          setQuery((q) => ({
            ...q,
            source: v === "all" ? undefined : v,
            page: 1,
          }))
        }
      >
        <SelectTrigger className="w-44">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Sources</SelectItem>
          <SelectItem value="LinkedIn">LinkedIn</SelectItem>
          <SelectItem value="Referral">Referral</SelectItem>
          <SelectItem value="Website">Website</SelectItem>
        </SelectContent>
      </Select>

      <div className="ml-auto">
        <AddContactDialog />
      </div>
    </div>
  );
}
