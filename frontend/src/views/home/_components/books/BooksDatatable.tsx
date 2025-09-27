import { Table } from "@mantine/core";
import { useGetBooks } from "../../../../api/books/getBooks";
import { useState } from "react";
import { PaginatedQuery } from "../../../../app/components/special/PaginatedQuery";
import { CardWithTitle } from "../../../../app/components/cards/CardWithTitle";
import { DEFAULT_PAGINATION } from "../../../../app/config/api";
import { AddBookButtonWithModal } from "./AddBookButtonWithModal";
import { BooksDatatableActionButtons } from "./BooksDatatableActionButtons";

export const BooksDatatable = () => {
  const [page, setPage] = useState(1);

  const query = useGetBooks({
    ...DEFAULT_PAGINATION,
    page,
  });

  return (
    <CardWithTitle title="Książki">
      <AddBookButtonWithModal />
      <PaginatedQuery
        query={query}
        currentPage={page}
        onPageChange={setPage}
        render={(data) => (
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Tytuł</Table.Th>
                <Table.Th>Gatunek</Table.Th>
                <Table.Th>Autor</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data?.map((book) => (
                <Table.Tr key={book.id}>
                  <Table.Td>{book.title}</Table.Td>
                  <Table.Td>{book.genre}</Table.Td>
                  <Table.Td>{book.author?.name || book.authorId}</Table.Td>
                  <Table.Td>
                    <BooksDatatableActionButtons book={book} />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        )}
      />
    </CardWithTitle>
  );
};
