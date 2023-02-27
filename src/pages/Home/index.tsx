import React from 'react';
import {
  Container,
  Header,
  Icon,
  UseAvatarButton,
  UserAvatar,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';

import DefaultAvatar02 from '../../assets/avatar02.png';
import { SafeAreaView } from 'react-native';

export const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <UseAvatarButton onPress={() => {}}>
                <UserAvatar source={DefaultAvatar02} />
              </UseAvatarButton>
              <UserInfoDetail>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Erasus</UserName>
              </UserInfoDetail>
            </UserInfo>
            <Icon name="power" />
          </UserWrapper>
        </Header>
      </Container>
    </SafeAreaView>
  );
};
