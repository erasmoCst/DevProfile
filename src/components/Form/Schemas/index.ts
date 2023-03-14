import * as yup from 'yup';

export const formSchemaSignUp = yup.object({
  email: yup.string().required('Informe um email.').email('Email inválido.'),
  name: yup.string().required('Informe seu nome completo.'),
  password: yup.string().required('Informe uma senha.'),
});

export const formSchemaSignIn = yup.object({
  email: yup.string().required('Informe um email.').email('Email inválido.'),
  password: yup.string().required('Informe uma senha.'),
});

export const formSchemaForgotPassword = yup.object({
  email: yup.string().required('Informe um email.').email('Email inválido.'),
});

export const formSchemaResetPassword = yup.object({
  token: yup.string().required('Informe um código').uuid('Código Inválido'),
  password: yup.string().required('Informe a nova senha.'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Confirmação incorreta'),
});
