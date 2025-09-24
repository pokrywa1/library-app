import { api } from "../../app/lib/axios";
import type {
  PaginatedResponse,
  PaginationParams,
} from "../../app/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { authorsQueries } from "./authors.queries";

export type TAuthorList = {
  id: number;
  name: string;
  email: string;
};

export const getAuthors = (params?: PaginationParams) => {
  return api
    .get<PaginatedResponse<TAuthorList>>(`/authors`, {
      params,
    })
    .then(({ data }) => data);
};

export const useGetAuthors = (params?: PaginationParams) =>
  useQuery(authorsQueries.list(params));
