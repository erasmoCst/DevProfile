import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.black};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.white};
  margin-bottom: 24px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: ${RFValue(24)}px;
`;

export const ForgotPasswordTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.gray500};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.primary};
`;

export const CreateAccount = styled.TouchableOpacity`
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

export const CreateAccountTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.primary};
  margin-left: ${RFValue(16)}px;
`;
