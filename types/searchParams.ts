export type SortOrder = "asc" | "desc";

export interface ContactQuery {
  page: number;
  pageSize: number;

  search: string;

  status?: string;
  source?: string;
  due?: string;

  sortBy: string;
  sortOrder: SortOrder;
}

export const defaultContactQuery: ContactQuery = {
  page: 1,
  pageSize: 15,

  search: "",

  status: undefined,
  source: undefined,
  due: undefined,

  sortBy: "next_followup",
  sortOrder: "desc",
};
