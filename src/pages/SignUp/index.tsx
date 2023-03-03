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
import {
  GenericFormInputType,
  StackNavigationGoBack,
} from '../../global/@types';
import { Button } from '../../components/Button';
import { ControlledInput } from '../../components/Form/ControlledInput';
import { formSchema } from '../../components/Form/Schemas';
import { FullSizeButton } from '../../components/FullSizeButton';
import { Logo } from '../../components/Logo';
import { Container, Content, Title } from './styles';
import { api } from '../../services/api';

export const SignUp: FunctionComponent = () => {
  const { goBack } = useNavigation<StackNavigationGoBack>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(formSchema) });

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
        'Ocorreu um erro ao fazer o cadastro. Por favor, tente novamente!',
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
              <Title>Faça seu Cadastro</Title>

              <ControlledInput
                autoCapitalize="words"
                autoCorrect={false}
                control={control}
                error={errors.name && errors.name.message}
                name="name"
                placeholder="Nome Completo"
              />
              <ControlledInput
                autoCapitalize="none"
                autoCorrect={false}
                control={control}
                error={errors.email && errors.email.message}
                keyboardType="email-address"
                name="email"
                placeholder="Email"
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
