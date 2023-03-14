import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { GenericFormInputType, NavigateProps } from '../../global/@types';
import { Button } from '../../components/Button';
import { ControlledInput } from '../../components/Form/ControlledInput';
import { formSchemaResetPassword } from '../../components/Form/Schemas';
import { FullSizeButton } from '../../components/FullSizeButton';
import { Logo } from '../../components/Logo';
import { Container, Content, Title } from './styles';
import { api } from '../../services/api';

export const ResetPassword: FunctionComponent = () => {
  const { goBack, navigate } = useNavigation<NavigateProps>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(formSchemaResetPassword) });

  const handleResetPassword = async (form: GenericFormInputType) => {
    const data = {
      token: form.token,
      password: form.password,
      passwordConfirmation: form.passwordConfirmation,
    };

    try {
      console.log(data);
      await api.post('password/resst', data);
      Alert.alert('Senha redefinida', 'A senha foi redefinida com sucesso.');
      navigate!('SignIn');
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Erro ao redefinir senha',
        `Ocorreu um erro ao redefinir senha. Por favor, tente novamente!\n erro: ${error}`,
      );
    }
  };

  return (
    <>
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
            <Content>
              <Logo />
              <Title>Redefinir senha</Title>

              <ControlledInput
                autoCapitalize="words"
                autoCorrect={false}
                control={control}
                error={errors.token && errors.token.message}
                name="token"
                placeholder="Código"
              />
              <ControlledInput
                autoCapitalize="none"
                autoCorrect={false}
                control={control}
                error={errors.password && errors.password.message}
                name="password"
                placeholder="Senha"
                secureTextEntry
              />
              <ControlledInput
                autoCapitalize="none"
                autoCorrect={false}
                control={control}
                error={
                  errors.confirmationPassword &&
                  errors.confirmationPassword.message
                }
                name="confirmationPassword"
                placeholder="Senha"
                secureTextEntry
              />
              <Button
                title="Redefinir senha"
                onPress={handleSubmit(handleResetPassword)}
              />
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <FullSizeButton
        onPress={() => {
          goBack!();
        }}
        icon="arrow-left"
        title="Fazer Login"
      />
    </>
  );
};
