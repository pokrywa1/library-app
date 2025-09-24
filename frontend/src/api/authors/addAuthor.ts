import * as z from "zod";
import { api } from "../../app/lib/axios";

export type TAddAuthor = {
  name: string;
  email: string;
};

export const addAuthorSchema: z.ZodType<TAddAuthor> = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
});

export const addAuthor = (data: TAddAuthor) => {
  return api.post("/authors", data).then(({ data }) => data);
};
