export type SortOrder = "asc" | "desc";

export interface ContactQuery {
  page: number;
  pageSize: number;

  search: string;

  status?: string;
  source?: string;

  sortBy: string;
  sortOrder: SortOrder;
}

export const defaultContactQuery: ContactQuery = {
  page: 1,
  pageSize: 50,

  search: "",

  status: undefined,
  source: undefined,

  sortBy: "next_followup",
  sortOrder: "asc",
};
