import React from 'react';
import { ChakraTextarea, ChakraTextareaProps, FormLabel } from '../../chakra';

type CustomControlledTextareaProps = {
  label?: string; // optional, displays label if provided
  name?: string; // optional, not required since no form control
  tip?: string; // optional, displays tip if provided
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

type ControlledTextareaProps = ChakraTextareaProps &
  CustomControlledTextareaProps;

const ControlledTextarea: React.FC<ControlledTextareaProps> = ({
  label,
  name,
  defaultValue,
  onChange,
  value,
  ...props
}: ControlledTextareaProps) => {
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraTextarea
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        {...props} // catches other ChakraInput props such as placeholder
      />
    </>
  );
};

export default ControlledTextarea;
