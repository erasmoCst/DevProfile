import React, { FunctionComponent } from 'react';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from 'react-hook-form';
import theme from '../../../global/styles/theme';
import { Input } from '../Input';
import { Container } from './styles';
import { ControlledInputType } from './type';

export const ControlledInput: FunctionComponent<ControlledInputType> = ({
  control,
  name,
  ...otherProps
}) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...otherProps} />
        )}
        name={name}
      />
    </Container>
  );
};
