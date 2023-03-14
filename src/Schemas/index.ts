import * as yup from 'yup';

export const schemaFormSignUp = yup.object({
  email: yup.string().required('Informe um email.').email('Email inválido.'),
  name: yup.string().required('Informe seu nome completo.'),
  password: yup.string().required('Informe uma senha.'),
});

export const schemaFormSignIn = yup.object({
  email: yup.string().required('Informe um email.').email('Email inválido.'),
  password: yup.string().required('Informe uma senha.'),
});

export const schemaFormForgotPassword = yup.object({
  email: yup.string().required('Informe um email.').email('Email inválido.'),
});

export const schemaFormResetPassword = yup.object({
  token: yup.string().required('Informe um código').uuid('Código Inválido'),
  password: yup.string().required('Informe a nova senha.'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Confirmação incorreta'),
});

export const schemaFormUpdatePassword = yup.object({
  old_pasword: yup.string().required('Campo obrigatório.'),
  pasword: yup
    .string()
    .required('Campo obrigatório.')
    .oneOf([yup.ref('password')], 'Confirmação incorreta.'),
});

export const schemaFormUpdateProfile = yup.object({
  name: yup.string().required('Informe o nome completo.'),
  email: yup.string().email('Email inválido.').required('Informe o email.'),
});
