import { useQuery } from "@tanstack/react-query";
import { api } from "../../app/lib/axios";
import { authorsQueries } from "./authors.queries";
type TBook = {
  id: number;
  title: string;
  genre: string;
  authorId: number;
  author: string;
};

export type TAuthor = {
  id: number;
  name: string;
  email: string;
  books: TBook[];
};

export const getAuthor = (id: number) => {
  return api.get<TAuthor>(`/authors/${id}`).then(({ data }) => data);
};

export const useGetAuthor = (id: number) => {
  return useQuery(authorsQueries.detail(id));
};
