import { Table } from "@mantine/core";
import { useGetAuthors } from "../../../api/authors/getAuthors";
import { useState } from "react";
import { PaginatedQuery } from "../../../app/components/special/PaginatedQuery";
import { CardWithTitle } from "../../../app/components/cards/CardWithTitle";
import { DEFAULT_PAGINATION } from "../../../app/config/api";

export const AuthorsDatatable = () => {
  const [page, setPage] = useState(1);

  const query = useGetAuthors({
    ...DEFAULT_PAGINATION,
    page,
  });

  return (
    <CardWithTitle title="Autorzy">
      <PaginatedQuery
        query={query}
        currentPage={page}
        onPageChange={setPage}
        render={(data) => (
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Nazwa</Table.Th>
                <Table.Th>Adres email</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data?.map((author) => (
                <Table.Tr key={author.id}>
                  <Table.Td>{author.name}</Table.Td>
                  <Table.Td>{author.email}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        )}
      />
    </CardWithTitle>
  );
};
