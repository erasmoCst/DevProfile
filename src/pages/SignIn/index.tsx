import React, { FunctionComponent } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
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
import { FormInputType, NavigateProps } from '../../@types';

export const SignIn: FunctionComponent = () => {
  const { handleSubmit, control } = useForm<FieldValues>();
  const { navigate } = useNavigation<NavigateProps>();

  const handleSignIn = (form: FormInputType) => {
    const data = {
      email: form.email,
      password: form.password,
    };
    console.log(data);
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
              <View>
                <Title>Faça seu Login</Title>
              </View>
              <ControlledInput
                control={control}
                name="email"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <ControlledInput
                control={control}
                name="password"
                placeholder="Senha"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />

              <Button
                title="Fazer Login"
                onPress={handleSubmit(handleSignIn)}
              />

              <ForgotPasswordButton>
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
