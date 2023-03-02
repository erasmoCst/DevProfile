import React, { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../Input';
import { Container, ErrorMessage } from './styles';
import { ControlledInputType } from './type';

export const ControlledInput: FunctionComponent<ControlledInputType> = ({
  control,
  name,
  error,
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
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
