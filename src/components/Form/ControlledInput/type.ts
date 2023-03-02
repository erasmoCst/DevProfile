import { Control } from 'react-hook-form';
import { TextInputProps } from 'react-native';

type TextInput = TextInputProps;

type ControlledInput = {
  control: Control;
  name: string;
};

export type ControlledInputType = ControlledInput & TextInput;
