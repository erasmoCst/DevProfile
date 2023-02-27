import React, { FunctionComponent } from 'react';
import { TextInput } from 'react-native';
import theme from '../../../global/styles/theme';
import { Container } from './styles';

export const Input: FunctionComponent<TextInput> = ({ ...props }) => {
  return <Container placeholderTextColor={theme.colors.gray500} {...props} />;
};
