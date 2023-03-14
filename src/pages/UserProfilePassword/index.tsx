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
import { GenericFormInputType, NavigateProps } from '../../global/@types';
import { schemaFormUpdatePassword } from '../../Schemas';

export const UserProfilePassword: React.FunctionComponent = () => {
  const { goBack } = useNavigation<NavigateProps>();
  const { user, updateUser } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schemaFormUpdatePassword),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const handleUpdatePassword = async (form: GenericFormInputType) => {
    const data = {
      name: user.name,
      email: user.email,
      old_password: form.old_password,
      password: form.password,
      passwordConfirmation: form.passwordConfirmation,
    };

    try {
      const response = await api.put('profile', data);

      updateUser(response.data);

      Alert.alert('Senha atualizada', 'Senha alterada com Sucesso.');

      goBack();
    } catch (error) {
      Alert.alert(
        'Erro ao atualizar',
        'Ocorreu um erro ao atualizar senha. Tente novamente.',
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
            <Title>Alterar senha</Title>

            <ControlledInput
              autoCapitalize="none"
              autoCorrect={false}
              control={control}
              secureTextEntry
              name="old_password"
              placeholder="Senha atual"
              error={errors.old_password && errors.old_password.message}
            />
            <ControlledInput
              name="password"
              secureTextEntry
              control={control}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nova senha"
              error={errors.password && errors.password.message}
            />
            <ControlledInput
              secureTextEntry
              control={control}
              autoCorrect={false}
              autoCapitalize="none"
              name="password_confirmation"
              placeholder="Confirmar senha"
              error={
                errors.password_confirmation &&
                errors.password_confirmation.message
              }
            />

            <Button
              title="Salvar alterações"
              onPress={handleSubmit(handleUpdatePassword)}
              disabled={
                !!errors.old_password ||
                !!errors.empasswordail ||
                !!errors.password_confirmation
              }
            />
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
