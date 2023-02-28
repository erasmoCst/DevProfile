import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Form/Input';
import { Container, Content, Title } from './styles';

export const SignIn: FunctionComponent = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Title>Faça seu Login</Title>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Button title="Fazer Login"></Button>
        </Content>
      </Container>
    </ScrollView>
  );
};
