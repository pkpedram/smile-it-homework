import { InputHTMLAttributes } from 'react';

export type TSignUpFormFields = {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
};

export type TAuthFieldItem = {
  title: string;
  placeholder: string;
  name: keyof TSignUpFormFields;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
};
