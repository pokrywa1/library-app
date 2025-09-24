import { api } from "../../app/lib/axios";

export const deleteAuthor = (id: number) => {
  return api.delete(`/authors/${id}`).then(({ data }) => data);
};
