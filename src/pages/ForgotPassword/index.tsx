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
import { schemaFormForgotPassword } from '../../Schemas';
import { FullSizeButton } from '../../components/FullSizeButton';
import { Logo } from '../../components/Logo';
import { Container, Content, Title } from './styles';
import { api } from '../../services/api';

export const ForgotPassword: FunctionComponent = () => {
  const { goBack, navigate } = useNavigation<NavigateProps>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(schemaFormForgotPassword) });

  const handleForgotPassword = async (form: GenericFormInputType) => {
    const data = {
      email: form.email,
    };

    try {
      await api.post('password/forgot', data);

      Alert.alert(
        'Email enviado',
        'Você receberá um email com as instruções para redefinição de senha',
      );
      navigate('ResetPassword');
    } catch (error) {
      Alert.alert(
        'Erro no cadastro',
        `Ocorreu um erro ao enviar o email. Por favor, tente novamente!\n ${error}`,
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
          <Content>
            <Logo />

            <Title>Esqueci minha senha</Title>

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
              title="Enviar Email"
              onPress={handleSubmit(handleForgotPassword)}
            />
          </Content>
        </Container>
      </ScrollView>

      <FullSizeButton
        onPress={() => {
          goBack();
        }}
        icon="arrow-left"
        title="Fazer Login"
      />
    </KeyboardAvoidingView>
  );
};
