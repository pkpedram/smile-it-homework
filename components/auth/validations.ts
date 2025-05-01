import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),

  email: Yup.string().required('Email is required').email('Invalid email address'),

  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),

  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match')
});
