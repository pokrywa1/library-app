import { Select, type SelectProps } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

type InputSelectProps = SelectProps;
export const InputSelect = ({ ...props }: InputSelectProps) => {
  return <Select {...props} />;
};

type InputSelectControllerProps = InputSelectProps & {
  name: string;
};

export const InputSelectController = ({
  name,
  ...props
}: InputSelectControllerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value } = field;
        return (
          <Select
            onChange={(val) => onChange(val ? parseInt(val, 10) : null)}
            value={value?.toString() || ""}
            error={error?.message}
            {...props}
          />
        );
      }}
    />
  );
};
