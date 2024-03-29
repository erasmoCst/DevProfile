import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useForm, FieldValues } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import {
  Container,
  Content,
  GoBackButton,
  Header,
  HeaderTitle,
  Icon,
  Title,
  UserAvatar,
} from './styles';
import avatarDefault from '../../assets/avatar02.png';
import { ControlledInput } from '../../components/Form/ControlledInput';
import { Button } from '../../components/Button';
import { useAuth } from '../../context/hooks';
import { schemaFormUpdatePassword } from '../../Schemas';
import { GenericFormInputType, NavigateProps } from '../../global/@types';

export const UserProfileEdit: React.FunctionComponent = () => {
  const { user, updateUser } = useAuth();
  const { goBack } = useNavigation<NavigateProps>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schemaFormUpdatePassword),
  });

  const handleProfileEdit = async (form: GenericFormInputType) => {
    const data = {
      name: form.name,
      email: form.email,
    };

    try {
      const response = await api.put('profile', data);

      updateUser(response.data);

      Alert.alert(
        'Perfil atualizado',
        'Os dados do seu perfil foram atualizados.',
      );

      goBack();
    } catch (error) {
      Alert.alert(
        'Erro ao atualizar',
        'Ocorreu um erro ao atualizar o perfil. Tente novamente.',
      );
    }
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Header>
            <GoBackButton onPress={goBack}>
              <Icon name="chevron-left" />
            </GoBackButton>

            <HeaderTitle>Seu Perfil</HeaderTitle>

            <UserAvatar
              source={
                user.avatar_url ? { uri: user.avatar_url } : avatarDefault
              }
            />
          </Header>

          <Content>
            <Title>Editar dados do perfil</Title>

            <ControlledInput
              name="name"
              control={control}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              error={errors.name && errors.name.message}
            />
            <ControlledInput
              name="email"
              control={control}
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />

            <Button
              title="Salvar alterações"
              onPress={handleSubmit(handleProfileEdit)}
              disabled={!!errors.name || !!errors.email}
            />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
