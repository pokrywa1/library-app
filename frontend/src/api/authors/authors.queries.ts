import type { PaginationParams } from "../../app/types/api.types";
import { getAuthor } from "./getAuhor";
import { getAuthors } from "./getAuthors";

export const authorsQueries = {
  detail: (id: number) => ({
    queryKey: ["author", id],
    queryFn: () => getAuthor(id),
  }),
  list: (params?: PaginationParams) => ({
    queryKey: ["authors", params],
    queryFn: () => getAuthors(params),
  }),
};
