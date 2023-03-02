import * as yup from 'yup';

export const formSchema = yup.object({
  email: yup.string().required('Informe um email.').email('Email inválido.'),
  name: yup.string().required('Informe seu nome completo.'),
  password: yup.string().required('Informe uma senha.'),
});
