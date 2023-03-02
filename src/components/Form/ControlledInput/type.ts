import {
  Control,
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from 'react-hook-form';
import { TextInputProps } from 'react-native';

type TextInput = TextInputProps;

type ControlledInput = {
  control: Control;
  name: string;
  error:
    | string
    | FieldErrors<FieldValues>
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
};

export type ControlledInputType = ControlledInput & TextInput;
