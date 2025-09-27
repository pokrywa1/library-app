import { ActionIcon, Button, Group, Modal, Stack } from "@mantine/core";
import type { TAuthorList } from "../../../../api/authors/getAuthors";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAuthor } from "../../../../api/authors/deleteAuthor";
import toast from "react-hot-toast";
import { useDisclosure } from "@mantine/hooks";
import { authorsQueries } from "../../../../api/authors/authors.queries";
import { FormProvider, useForm } from "react-hook-form";
import {
  editAuthor,
  editAuthorSchema,
  type TEditAuthor,
} from "../../../../api/authors/editAuthor";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { InputTextController } from "../../../../app/components/inputs/InputText";

type AuthorsDatatableActionButtonsProps = {
  author: TAuthorList;
};
export const AuthorsDatatableActionButtons = ({
  author,
}: AuthorsDatatableActionButtonsProps) => {
  return (
    <Group justify="end">
      <DeleteButton authorId={author.id} />
      <EditAuthorButton author={author} />
    </Group>
  );
};

const DeleteButton = ({ authorId }: { authorId: number }) => {
  const queryClient = useQueryClient();
  const [opened, { open, close }] = useDisclosure(false);

  const { mutate } = useMutation({
    mutationFn: deleteAuthor,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [authorsQueries.list().queryKey[0]],
      });
    },
    onError: () => {
      toast.error("Author deletion failed");
    },
  });

  return (
    <>
      <ActionIcon color="red" onClick={open}>
        <TbTrash />
      </ActionIcon>
      <Modal opened={opened} onClose={close} title="Confirm Deletion">
        Are you sure you want to delete this author?
        <Group mt="md" justify="end">
          <Button color="red" onClick={() => mutate(Number(authorId))}>
            Delete
          </Button>
        </Group>
      </Modal>
    </>
  );
};

const EditAuthorButton = ({ author }: { author: TAuthorList }) => {
  const queryClient = useQueryClient();

  const [opened, { open, close }] = useDisclosure(false);

  const { mutate } = useMutation({
    mutationFn: editAuthor(author.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [authorsQueries.list().queryKey[0]],
      });
    },
    onError: () => {
      toast.error("Author editing failed");
    },
  });

  const form = useForm<TEditAuthor>({
    resolver: standardSchemaResolver(editAuthorSchema),
    defaultValues: author,
  });

  const onSubmit = (data: TEditAuthor) => mutate(data);

  return (
    <>
      <ActionIcon onClick={open}>
        <TbEdit />
      </ActionIcon>
      <Modal opened={opened} onClose={close} title="Edit Author">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack>
              <InputTextController name="name" placeholder="Author Name" />
              <InputTextController name="email" placeholder="Author Email" />
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </FormProvider>
      </Modal>
    </>
  );
};
