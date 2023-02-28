import React, { FunctionComponent } from 'react';
import { TouchableOpacityProps } from 'react-native/types';
import { Container, Title } from './styles';

type Button = {
  title: string;
};

type buttonType = TouchableOpacityProps & Button;

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
