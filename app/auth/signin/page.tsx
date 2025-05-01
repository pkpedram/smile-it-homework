import Link from 'next/link';
import React from 'react';

const SignInPage = () => {
  return (
    <div className=" flex flex-col items-center gap-4">
      <div className="flex gap-1">
        <p>Don&apos;t have an account?</p>
        <Link href={'/auth/signin'} className="text-blue-500">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
