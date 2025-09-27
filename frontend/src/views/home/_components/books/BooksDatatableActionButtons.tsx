import { ActionIcon, Button, Group, Modal, Stack } from "@mantine/core";
import type { TBookList } from "../../../../api/books/getBooks";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook } from "../../../../api/books/deleteBook";
import toast from "react-hot-toast";
import { useDisclosure } from "@mantine/hooks";
import { booksQueries } from "../../../../api/books/books.queries";
import { FormProvider, useForm } from "react-hook-form";
import {
  editBook,
  editBookSchema,
  type TEditBook,
} from "../../../../api/books/editBook";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { InputTextController } from "../../../../app/components/inputs/InputText";
import { InputSelectController } from "../../../../app/components/inputs/InputSelect";
import { useGetAuthors } from "../../../../api/authors/getAuthors";

type BooksDatatableActionButtonsProps = {
  book: TBookList;
};
export const BooksDatatableActionButtons = ({
  book,
}: BooksDatatableActionButtonsProps) => {
  return (
    <Group justify="end">
      <DeleteButton bookId={book.id} />
      <EditBookButton book={book} />
    </Group>
  );
};

const DeleteButton = ({ bookId }: { bookId: number }) => {
  const queryClient = useQueryClient();
  const [opened, { open, close }] = useDisclosure(false);

  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [booksQueries.list().queryKey[0]],
      });
      toast.success("Book deleted successfully");
      close();
    },
    onError: () => {
      toast.error("Book deletion failed");
    },
  });

  return (
    <>
      <ActionIcon color="red" onClick={open}>
        <TbTrash />
      </ActionIcon>
      <Modal opened={opened} onClose={close} title="Confirm Deletion">
        Are you sure you want to delete this book?
        <Group mt="md" justify="end">
          <Button variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button color="red" onClick={() => mutate(Number(bookId))}>
            Delete
          </Button>
        </Group>
      </Modal>
    </>
  );
};

const EditBookButton = ({ book }: { book: TBookList }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon onClick={open}>
        <TbEdit />
      </ActionIcon>
      <Modal opened={opened} onClose={close} title="Edit Book">
        <EditBookForm book={book} />
      </Modal>
    </>
  );
};

const EditBookForm = ({ book }: { book: TBookList }) => {
  const queryClient = useQueryClient();
  const { data: authorsData } = useGetAuthors({ limit: 100 });

  const { mutate } = useMutation({
    mutationFn: editBook(book.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [booksQueries.list().queryKey[0]],
      });
      toast.success("Book updated successfully");
      close();
    },
    onError: () => {
      toast.error("Book editing failed");
    },
  });

  const form = useForm<TEditBook>({
    resolver: standardSchemaResolver(editBookSchema),
    defaultValues: {
      title: book.title,
      genre: book.genre,
      authorId: book.authorId,
    },
  });

  const onSubmit = (data: TEditBook) => mutate(data);

  const authorOptions =
    authorsData?.items?.map((author) => ({
      value: author.id.toString(),
      label: author.name,
    })) || [];

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Stack>
          <InputTextController name="title" placeholder="Book Title" />
          <InputTextController name="genre" placeholder="Book Genre" />
          <InputSelectController
            name="authorId"
            placeholder="Select Author"
            data={authorOptions}
            searchable
          />
          <Group justify="end">
            <Button variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </Group>
        </Stack>
      </form>
    </FormProvider>
  );
};
