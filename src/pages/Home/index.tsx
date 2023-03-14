import React, { useEffect, useState } from 'react';
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
  UserList,
  UserName,
  UserWrapper,
  UserListHeader,
  UserListEmpty,
} from './styles';

import AvatarDefault from '../../assets/avatar02.png';
import { Alert, SafeAreaView } from 'react-native';
import { useAuth } from '../../context/hooks';
import { UserDTO } from '../../global/@types';
import { api } from '../../services/api';
import { User } from '../../components/Users';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp {
  navigate: (screeen: string, params?: unknown) => void;
}

export const Home = () => {
  const [users, setUsers] = useState<Array<UserDTO>>([]);
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation<ScreenNavigationProp>();

  const handleSignOut = () => {
    Alert.alert(
      'Siar da aplicação',
      'Tem certeza que deseja sair da aplicação?',
      [
        { text: 'Cancelar', onPress: () => {} },
        { text: 'Confirmar', onPress: () => signOut() },
      ],
    );
  };

  const handleUserDetails = (userId: string) => {
    navigate('UserDetails', { userId });
  };

  const handleUserProfile = (userId: string) => {
    navigate('UserProfile');
  };

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('users');
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <UseAvatarButton onPress={() => handleUserProfile}>
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

        <UserList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <User data={item} onPress={() => handleUserDetails(item.id)} />
          )}
          ListHeaderComponent={<UserListHeader>Usuários</UserListHeader>}
          ListEmptyComponent={
            <UserListEmpty>Ainda não há registros...</UserListEmpty>
          }
        />
      </Container>
    </SafeAreaView>
  );
};
