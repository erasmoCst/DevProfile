import React, { FunctionComponent } from 'react';
import { buttonType } from './types';
import { Container, Icon, Title } from './styles';

export const FullSizeButton: FunctionComponent<buttonType> = ({
  title,
  icon,
  ...otherProps
}) => {
  return (
    <Container {...otherProps}>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  );
};
