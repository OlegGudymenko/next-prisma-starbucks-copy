import * as yup from 'yup';

export const signUpSchema = yup.object({
  firstName: yup.string().required('Enter your first name'),
  lastName: yup.string().required('Enter your last name'),
  email: yup.string().email('Please enter a valid email address.').required(),
  password: yup.string().required().label(''),
  // TODO: ADD PASS VALIDATION
});
