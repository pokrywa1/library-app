import { Button, Modal, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import {
  addBook,
  addBookSchema,
  type TAddBook,
} from "../../../../api/books/addBook";
import { InputTextController } from "../../../../app/components/inputs/InputText";
import { InputSelectController } from "../../../../app/components/inputs/InputSelect";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { booksQueries } from "../../../../api/books/books.queries";
import { useGetAuthors } from "../../../../api/authors/getAuthors";

export const AddBookButtonWithModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button w="fit-content" onClick={open}>
        Add Book
      </Button>

      <Modal title="Add Book" onClose={close} opened={opened}>
        <AddBookForm onSuccess={close} />
      </Modal>
    </>
  );
};

const AddBookForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();
  const { data: authorsData } = useGetAuthors({ limit: 100 });

  const form = useForm<TAddBook>({
    resolver: standardSchemaResolver(addBookSchema),
  });

  const onSubmit: SubmitHandler<TAddBook> = (data) => mutate(data);

  const { mutate } = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      form.reset();
      toast.success("Book added successfully");
      onSuccess?.();

      queryClient.invalidateQueries({
        queryKey: [booksQueries.list().queryKey[0]],
      });
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

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
          <Button type="submit">Add Book</Button>
        </Stack>
      </form>
    </FormProvider>
  );
};
