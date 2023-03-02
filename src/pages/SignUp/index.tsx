import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Form/Input';
import { FullSizeButton } from '../../components/FullSizeButton';
import { Logo } from '../../components/Logo';
import { Container, Content, Title } from './styles';

export const SignUp: FunctionComponent = () => {
  const { goBack } = useNavigation<StackNavigationGoBack>();

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
              <Input placeholder="Nome Completo" />
              <Input placeholder="Email" />
              <Input placeholder="Senha" />
              <Button title="Criar Conta"></Button>
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
