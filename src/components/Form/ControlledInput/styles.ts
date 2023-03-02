import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
`;

export const ErrorMessage = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.danger};
  margin-bottom: 16px;
`;
