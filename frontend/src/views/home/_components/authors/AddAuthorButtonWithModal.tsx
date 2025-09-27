import { Button, Modal, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import {
  addAuthor,
  addAuthorSchema,
  type TAddAuthor,
} from "../../../../api/authors/addAuthor";
import { InputTextController } from "../../../../app/components/inputs/InputText";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { authorsQueries } from "../../../../api/authors/authors.queries";

export const AddAuthorButtonWithModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button w="fit-content" onClick={open}>
        Add Author
      </Button>

      <Modal title="Add Author" onClose={close} opened={opened}>
        <AddAuthorForm />
      </Modal>
    </>
  );
};

const AddAuthorForm = () => {
  const queryClient = useQueryClient();

  const form = useForm<TAddAuthor>({
    resolver: standardSchemaResolver(addAuthorSchema),
  });

  const onSubmit: SubmitHandler<TAddAuthor> = (data) => mutate(data);

  const { mutate } = useMutation({
    mutationFn: addAuthor,
    onSuccess: () => {
      form.reset();

      queryClient.invalidateQueries({
        queryKey: [authorsQueries.list().queryKey[0]],
      });
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Stack>
          <InputTextController name="name" placeholder="Author Name" />
          <InputTextController name="email" placeholder="Author Email" />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </FormProvider>
  );
};
