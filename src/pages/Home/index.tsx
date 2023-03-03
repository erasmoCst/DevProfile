import React from 'react';
import {
  Container,
  Header,
  Icon,
  LogOutButton,
  UseAvatarButton,
  UserAvatar,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';

import AvatarDefault from '../../assets/avatar02.png';
import { Alert, SafeAreaView } from 'react-native';
import { useAuth } from '../../context/hooks';

export const Home = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert(
      'Siar da aplicação',
      'Tem certeza que deseja sair da aplicação?',
      [
        { text: 'Cancelar', onPress: () => {} },
        { text: 'Cancelar', onPress: () => signOut() },
      ],
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <UseAvatarButton onPress={() => {}}>
                <UserAvatar
                  source={
                    user.avatar_url ? { uri: user.avatar_url } : AvatarDefault
                  }
                />
              </UseAvatarButton>

              <UserInfoDetail>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>{user.name}</UserName>
              </UserInfoDetail>
            </UserInfo>

            <LogOutButton onPress={handleSignOut}>
              <Icon name="power" />
            </LogOutButton>
          </UserWrapper>
        </Header>
      </Container>
    </SafeAreaView>
  );
};
