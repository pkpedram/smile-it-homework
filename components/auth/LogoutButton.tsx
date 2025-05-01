'use client';
import React, { useState } from 'react';
import Button from '../shared/Button';
import { signOut } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    signOut(
      {},
      {
        onError: err => {
          setIsLoading(false);
          toast.error(err?.error?.message ?? 'Unknown error happened.');
        },
        onSuccess: () => {
          setIsLoading(true);
          router.push('/auth/signin');
        }
      }
    );
  };
  return (
    <Button disabled={isLoading} onClick={handleSubmit}>
      {isLoading ? 'Loading...' : 'Log out'}
    </Button>
  );
};

export default LogoutButton;
