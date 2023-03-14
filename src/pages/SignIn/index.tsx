import React, { FunctionComponent, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  Title,
} from './styles';
import { Logo } from '../../components/Logo';
import { FullSizeButton } from '../../components/FullSizeButton';
import { useNavigation } from '@react-navigation/native';
import { ControlledInput } from '../../components/Form/ControlledInput';
import { FieldValues, useForm } from 'react-hook-form';
import { GenericFormInputType, NavigateProps } from '../../global/@types';
import { useAuth } from '../../context/hooks';
import { schemaFormSignIn } from '../../Schemas';

export const SignIn: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { navigate } = useNavigation<NavigateProps>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(schemaFormSignIn) });

  const handleSignIn = async (form: GenericFormInputType) => {
    const data = {
      email: form.email,
      password: form.password,
    };

    try {
      setLoading(true);
      signIn(data);
    } catch (error) {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, verifique as credenciais.',
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

              <Title>Faça seu Login</Title>

              <ControlledInput
                name="email"
                control={control}
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                error={errors.email && errors.email.message}
              />
              <ControlledInput
                secureTextEntry
                name="password"
                control={control}
                autoCorrect={false}
                placeholder="Senha"
                autoCapitalize="none"
                error={errors.password && errors.password.message}
              />

              <Button
                title="Fazer Login"
                onPress={handleSubmit(handleSignIn)}
                disabled={loading || !!errors.email || !!errors.password}
              />

              <ForgotPasswordButton
                onPress={() => {
                  navigate('ForgotPassword');
                }}
              >
                <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
              </ForgotPasswordButton>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <FullSizeButton
        onPress={() => {
          navigate('SignUp');
        }}
        icon="log-in"
        title="Criar uma Conta"
      />
    </>
  );
};
