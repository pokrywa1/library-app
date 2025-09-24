import type { PaginationParams } from "../../app/types/api.types";
import { getBook } from "./getBook";
import { getBooks } from "./getBooks";

export const booksQueries = {
  detail: (id: number) => ({
    queryKey: ["book", id],
    queryFn: () => getBook(id),
  }),
  list: (params?: PaginationParams) => ({
    queryKey: ["books", params],
    queryFn: () => getBooks(params),
  }),
};
