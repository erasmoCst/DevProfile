import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.secondary};

  height: ${RFPercentage(16)}px;
  width: 100%;
  padding: ${RFValue(48)}px ${RFValue(24)}px ${RFValue(8)}px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-right: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(24)}px;
`;

export const HeaderTile = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: bold;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
  margin-left: auto;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;

  padding: ${RFValue(48)}px ${RFValue(24)}px;
`;

export const ContentTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: bold;

  margin: 0 auto;
`;

export const UserDetailAvatar = styled.Image`
  height: ${RFValue(120)}px;
  width: ${RFValue(120)}px;

  border-radius: 10px;
  margin: 0 auto;
`;

export const UserNameDetail = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 10px;

  padding: ${RFValue(16)}px ${RFValue(24)}px;
`;

export const NameTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-transform: uppercase;
`;

export const NameData = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`;

export const UserEmailDetail = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  border-radius: 10px;
  padding: ${RFValue(16)}px ${RFValue(24)}px;
`;

export const EmailTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
`;

export const EmailData = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`;
