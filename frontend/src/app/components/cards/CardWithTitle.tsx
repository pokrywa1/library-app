import { Card, Divider, Title } from "@mantine/core";

type CardWithTitleProps = {
  title: string;
  children: React.ReactNode;
};
export const CardWithTitle = ({ title, children }: CardWithTitleProps) => {
  return (
    <Card>
      <Title order={5}>{title}</Title>
      <Divider my="sm" />
      {children}
    </Card>
  );
};
