import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native';
import { Input } from '../../components/form/input';
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
        </Content>
      </Container>
    </ScrollView>
  );
};
