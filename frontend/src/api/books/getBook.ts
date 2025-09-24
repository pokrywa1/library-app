import { api } from "../../app/lib/axios";
import { booksQueries } from "./books.queries";
import { useQuery } from "@tanstack/react-query";

type TAuthor = {
  id: number;
  name: string;
  email: string;
};

export type TBook = {
  id: number;
  title: string;
  genre: string;
  authorId: number;
  author?: TAuthor;
};

export const getBook = (id: number) => {
  return api.get<TBook>(`/books/${id}`).then(({ data }) => data);
};

export const useGetBook = (id: number) => {
  return useQuery(booksQueries.detail(id));
};
