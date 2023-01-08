import React from 'react';
import { UseFormReturn, Controller } from 'react-hook-form';
import { Select as ReactSelect } from 'chakra-react-select';
import { FormLabel, FormControl, Box, Stack } from '../../chakra';

export type Option =
  | {
      label: string | number;
      value: string | number;
    }
  | { value: number | null; label: string }
  | { value: number; label: string | null | undefined }
  | { value: null; label: string }
  | { label: string | number; value: string | number }
  | { value: number; label: string };
export interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: Option | Option[];
  id?: string;
  options: Option[];
  isRequired?: boolean;
  localForm: Pick<UseFormReturn, 'control' | 'formState'>;
  isMulti?: boolean;
  isClearable?: boolean;
  onChange?: (option: Option) => void;
  isDisabled?: boolean;
  variant?: 'outline' | 'filled' | 'flushed' | undefined;
  value?: any;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  placeholder,
  defaultValue,
  options,
  isMulti,
  isClearable,
  onChange,
  isDisabled,
  value,
  variant,
  localForm,
}: SelectProps) => {
  const {
    control,
    formState: { errors },
  } = localForm;

  return (
    <FormControl mb={4} isInvalid={errors && errors[name] !== undefined}>
      <Stack spacing={2}>
        {label && <FormLabel>{label}</FormLabel>}
        <Box my={2}>
          <Controller
            name={name}
            control={control}
            shouldUnregister={false}
            render={({ field }) => (
              <ReactSelect
                {...field}
                onBlur={field.onBlur}
                options={options}
                defaultValue={defaultValue}
                placeholder={placeholder}
                isClearable={isClearable}
                isMulti={isMulti}
                onChange={onChange}
                isDisabled={isDisabled}
                variant={variant}
                value={value}
              />
            )}
          />
        </Box>
      </Stack>
    </FormControl>
  );
};

export default Select;
