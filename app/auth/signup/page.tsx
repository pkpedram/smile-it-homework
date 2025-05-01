import SignUpForm from '@/components/auth/SignUpForm';
import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className=" flex flex-col items-center gap-4">
      <SignUpForm />
      <div className="flex gap-1">
        <p>Already have an account?</p>
        <Link href={'/auth/signin'} className="text-blue-500">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
