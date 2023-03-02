import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { FormInputType, StackNavigationGoBack } from '../../@types';
import { Button } from '../../components/Button';
import { ControlledInput } from '../../components/Form/ControlledInput';
import { Input } from '../../components/Form/Input';
import { FullSizeButton } from '../../components/FullSizeButton';
import { Logo } from '../../components/Logo';
import { Container, Content, Title } from './styles';

export const SignUp: FunctionComponent = () => {
  const { goBack } = useNavigation<StackNavigationGoBack>();
  const { handleSubmit, control } = useForm<FieldValues>();

  const handleSignUp = (form: FormInputType) => {
    const data = {
      name: form.name,
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
              <Title>Faça seu Cadastro</Title>

              <ControlledInput
                control={control}
                name="name"
                placeholder="Nome Completo"
                autoCorrect={false}
                autoCapitalize="words"
              />
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
                title="Criar Conta"
                onPress={handleSubmit(handleSignUp)}
              />
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <FullSizeButton
        onPress={() => {
          goBack();
        }}
        icon="arrow-left"
        title="Fazer Login"
      />
    </>
  );
};
