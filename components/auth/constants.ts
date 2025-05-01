import { TAuthFieldItem } from './types';

export const signupFields: TAuthFieldItem<'signUp'>[] = [
  {
    title: 'Your name',
    name: 'name',
    placeholder: 'John doe',
    type: 'text'
  },
  {
    title: 'Your email',
    name: 'email',
    placeholder: 'Johndoe@smileit.uk',
    type: 'text'
  },
  {
    title: 'Your Password',
    name: 'password',
    placeholder: '*****',
    type: 'password'
  },
  {
    title: 'Confirm Password',
    name: 'confirmPassword',
    placeholder: '*****',
    type: 'password'
  }
];

export const signInFields: TAuthFieldItem<'signIn'>[] = [
  {
    title: 'Your email',
    name: 'email',
    placeholder: 'Johndoe@smileit.uk',
    type: 'text'
  },
  {
    title: 'Your Password',
    name: 'password',
    placeholder: '*****',
    type: 'password'
  }
];
