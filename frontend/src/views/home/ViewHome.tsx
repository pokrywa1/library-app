import { Stack } from "@mantine/core";
import { AuthorsDatatable } from "./_components/AuthorsDatatable";
import { BooksDatatable } from "./_components/BooksDatatable";

export const ViewHome = () => {
  return (
    <Stack>
      <AuthorsDatatable />
      <BooksDatatable />
    </Stack>
  );
};
