import React, { FunctionComponent } from 'react';
import { Container, Title } from './styles';
import { buttonType } from './types';

export const Button: FunctionComponent<buttonType> = ({
  title,
  ...otherProps
}) => {
  return (
    <Container {...otherProps}>
      <Title>{title}</Title>
    </Container>
  );
};
