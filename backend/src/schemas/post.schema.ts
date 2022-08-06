import * as yup from 'yup';

const postSchema = yup
  .object()
  .shape({
    post: yup
      .string()
      .required()
      .max(300, 'Must be a maximum of 300 characters'),
  })
  .strict()
  .noUnknown(true, 'Please enter only valid keys');

export default postSchema;