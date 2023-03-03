import React, { FunctionComponent, useContext, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
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
import { formSchema } from '../../components/Form/Schemas';
import { useAuth } from '../../context/hooks';

export const SignIn: FunctionComponent = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation<NavigateProps>();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignIn = (form: GenericFormInputType) => {
    const data = {
      email: form.email,
      password: form.password,
    };
    try {
      setLoading(true);
      console.log('data', data);
      signIn(data);
    } catch (error) {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login. \n Verifique as credenciais.',
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
              <View>
                <Title>Faça seu Login</Title>
              </View>
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
                disabled={loading || !!errors.email || !!errors.password}
                onPress={handleSubmit(handleSignIn)}
                title="Fazer Login"
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
