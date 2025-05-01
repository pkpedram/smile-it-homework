import { InputHTMLAttributes } from 'react';

type TAuthFormType = 'signUp' | 'signIn';

export type TSignUpFormFields = {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
};
export type TSignInFormFields = {
  email: string;
  password: string;
};

type TFormFieldsMap = {
  signUp: TSignUpFormFields;
  signIn: TSignInFormFields;
};

export type TAuthFieldItem<T extends TAuthFormType> = {
  title: string;
  placeholder: string;
  name: keyof TFormFieldsMap[T];
  type: InputHTMLAttributes<HTMLInputElement>['type'];
};
