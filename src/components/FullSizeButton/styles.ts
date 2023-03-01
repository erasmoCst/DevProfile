import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled(TouchableOpacity)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.gray800};
  border-top: 1px;
  border-color: ${theme.colors.black};
  padding: 16px 0;
  justify-content: center;
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.primary};
  margin-left: ${RFValue(16)}px;
`;
