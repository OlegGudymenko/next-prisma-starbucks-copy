import * as yup from 'yup';

export const signInSchema = yup.object({
  email: yup.string().required('Enter an email/username.'),
  password: yup.string().required('Enter a password.'),
});
