import { Title } from "@mantine/core";
import { useGetAuthor } from "../../api/authors/getAuhor";
import { useGetAuthors } from "../../api/authors/getAuthors";

export const ViewHome = () => {
  const { data } = useGetAuthor(2);

  const { data: dataList } = useGetAuthors();

  if (!data) {
    return null;
  }

  return (
    <div>
      <Title>Author: {data.name}</Title>
    </div>
  );
};
