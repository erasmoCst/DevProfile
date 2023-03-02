import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 18px 16px;
  background-color: ${theme.colors.gray800};
  color: ${theme.colors.light};
  border-radius: 5px;
  margin-bottom: 16px;
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.regular};
`;
