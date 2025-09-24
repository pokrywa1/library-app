import z from "zod";
import { api } from "../../app/lib/axios";

export type TEditBook = {
  title: string;
  genre: string;
  authorId: number;
};

export const editBookSchema: z.ZodSchema<TEditBook> = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title is too long"),
  genre: z.string().min(1, "Genre is required").max(100, "Genre is too long"),
  authorId: z.number().min(1, "Author must be selected"),
});

export const editBook = (id: number) => (data: TEditBook) => {
  return api.put(`/books/${id}`, data).then(({ data }) => data);
};
