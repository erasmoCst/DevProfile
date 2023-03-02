import React, { FunctionComponent } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Form/Input';
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

export const SignIn: FunctionComponent = () => {
  const { navigate } = useNavigation<NavigateProps>();

  return (
    <>
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
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Button title="Fazer Login"></Button>

            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>

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
