import z from "zod";
import { api } from "../../app/lib/axios";

export type TEditAuthor = {
  name: string;
  email: string;
};

export const editAuthorSchema: z.ZodSchema<TEditAuthor> = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email format").min(1, "Email is required"),
});

export const editAuthor = (id: number) => (data: TEditAuthor) => {
  return api.put(`/authors/${id}`, data).then(({ data }) => data);
};
