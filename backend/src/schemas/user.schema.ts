import * as yup from 'yup';

const userSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required()
      .matches(/^[A-zà-úÀ-Ú| ]+$/, 'Must contain only letters')
      .max(255, 'Must be a maximum of 255 characters'),
    email: yup
      .string()
      .email()
      .required()
      .max(255, 'Must be a maximum of 255 characters'),
    password: yup
      .string()
      .required()
      .min(8, 'The password must have 8 characters at least.'),
  })
  .strict()
  .noUnknown(true, 'Please enter only valid keys');

export default userSchema;