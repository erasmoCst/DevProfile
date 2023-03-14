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
import { FullSizeButton } from '../../components/FullSizeButton';
import { Logo } from '../../components/Logo';
import { Container, Content, Title } from './styles';
import { api } from '../../services/api';
import { schemaFormSignUp } from '../../Schemas';

export const SignUp: FunctionComponent = () => {
  const { goBack } = useNavigation<NavigateProps>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(schemaFormSignUp) });

  const handleSignUp = async (form: GenericFormInputType) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    try {
      await api.post('users', data);
      Alert.alert(
        'Cadastro realizado com Sucesso!',
        'Faça seu Login para acessar o aplicativo.',
      );
    } catch (error) {
      Alert.alert(
        'Erro no cadastro',
        `Ocorreu um erro ao fazer o cadastro. Por favor, tente novamente!\n erro: ${error}`,
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

            <Title>Faça seu Cadastro</Title>

            <ControlledInput
              name="name"
              control={control}
              autoCorrect={false}
              autoCapitalize="words"
              placeholder="Nome Completo"
              error={errors.name && errors.name.message}
            />
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
              name="password"
              secureTextEntry
              control={control}
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              error={errors.password && errors.password.message}
            />

            <Button title="Criar Conta" onPress={handleSubmit(handleSignUp)} />
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
