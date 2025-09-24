import { api } from "../../app/lib/axios";
import type {
  PaginatedResponse,
  PaginationParams,
} from "../../app/types/api.types";
import { booksQueries } from "./books.queries";
import { useQuery } from "@tanstack/react-query";

type TAuthor = {
  id: number;
  name: string;
  email: string;
};

export type TBookList = {
  id: number;
  title: string;
  genre: string;
  authorId: number;
  author?: TAuthor;
};

export const getBooks = (params?: PaginationParams) => {
  return api
    .get<PaginatedResponse<TBookList>>(`/books`, {
      params,
    })
    .then(({ data }) => data);
};

export const useGetBooks = (params?: PaginationParams) =>
  useQuery(booksQueries.list(params));
