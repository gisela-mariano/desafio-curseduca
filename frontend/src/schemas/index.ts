import * as yup from 'yup';

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Você deve preencher esse campo.')
    .max(255, 'Deve ter no máximo 255 caracteres.'),
  password: yup
    .string()
    .required('Você deve preencher esse campo.')
    .min(8, 'Senha deve ter pelo menos 8 caracteres'),
});

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .required('Você deve preencher esse campo.')
    .matches(/^[A-zà-úÀ-Ú| ]+$/, 'Deve conter apenas letras.')
    .max(255, 'Deve ter no máximo 255 caracteres.'),
  email: yup
    .string()
    .email()
    .required('Você deve preencher esse campo.')
    .max(255, 'Deve ter no máximo 255 caracteres.'),
  password: yup
    .string()
    .required('Você deve preencher esse campo.')
    .min(8, 'Senha deve ter pelo menos 8 caracteres'),
});