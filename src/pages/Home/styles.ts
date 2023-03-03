import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.black};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;

  background-color: ${theme.colors.secondary};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: ${RFValue(28)}px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: 10px;
`;

export const UseAvatarButton = styled.TouchableOpacity``;

export const UserInfoDetail = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(28)}px;
  color: ${theme.colors.dark};
`;

export const LogOutButton = styled.TouchableOpacity``;
