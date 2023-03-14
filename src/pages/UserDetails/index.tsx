import React, { FunctionComponent, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  Content,
  ContentTitle,
  EmailData,
  EmailTitle,
  GoBackButton,
  Header,
  HeaderTile,
  Icon,
  NameData,
  NameTitle,
  UserAvatar,
  UserDetailAvatar,
  UserEmailDetail,
  UserNameDetail,
} from './styles';
import { NavigateProps, RouteParams, UserDTO } from '../../global/@types';
import { api } from '../../services/api';
import { useAuth } from '../../context/hooks';
import avatarDefault from '../../assets/avatar02.png';

export const UserDetails: FunctionComponent = () => {
  const [userDetails, setUserDetails] = useState<UserDTO>({} as UserDTO);
  const route = useRoute();
  const { user } = useAuth();
  const { userId } = route.params as RouteParams;
  const { goBack } = useNavigation<NavigateProps>();

  useEffect(() => {
    const loadUser = async () => {
      const response = await api.get(`/users/${userId}`);
      setUserDetails(response.data);
    };

    loadUser();
  }, [userId]);

  return (
    <Container>
      <Header>
        <GoBackButton onPress={goBack}>
          <Icon name="chevron-left" />
        </GoBackButton>

        <HeaderTile>Usuários</HeaderTile>

        <UserAvatar
          source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
        />
      </Header>

      <Content>
        <ContentTitle>Detalhes do Usuário</ContentTitle>

        <UserDetailAvatar
          source={
            userDetails.avatar_url
              ? { uri: userDetails.avatar_url }
              : avatarDefault
          }
        />
      </Content>

      <Content>
        <ContentTitle>Detalhes do Usuário</ContentTitle>

        <UserDetailAvatar
          source={
            userDetails.avatar_url
              ? { uri: userDetails.avatar_url }
              : avatarDefault
          }
        />

        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{userDetails.name}</NameData>
        </UserNameDetail>

        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{userDetails.email}</EmailData>
        </UserEmailDetail>
      </Content>
    </Container>
  );
};
