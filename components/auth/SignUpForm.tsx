'use client';
import React, { useState } from 'react';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { useFormik } from 'formik';
import { TSignUpFormFields } from './types';
import { signupFields } from './constants';
import { signUpValidationSchema } from './validations';
import { signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik<TSignUpFormFields>({
    validationSchema: signUpValidationSchema,
    validateOnChange: false,
    initialValues: {
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    },
    onSubmit: data => {
      setIsLoading(true);
      signUp.email(
        {
          email: data.email,
          name: data.name,
          password: data.password
        },
        {
          onSuccess: () => {
            setIsLoading(false);
            toast.success('Your profile was created successfully!');
            router.push('/');
          },
          onError: e => {
            setIsLoading(false);
            toast.error(e.error.message);
          }
        }
      );
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-11/12 lg:w-max p-8 rounded-lg shadow flex flex-col gap-4 bg-dark">
      <h1 className="text-lg  w-full text-center">Sign up</h1>
      {signupFields.map(item => (
        <Input
          key={item.name}
          name={item.name}
          value={formik.values[item.name]}
          title={item.title}
          disabled={isLoading}
          placeholder={item.placeholder}
          onChange={e => formik.setFieldValue(item.name, e.target.value)}
          error={!!formik.errors[item.name]}
          helperText={formik.errors[item.name]}
          type={item.type}
        />
      ))}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>
    </form>
  );
};

export default SignUpForm;
