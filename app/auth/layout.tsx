import React from 'react';

const AuthPagesLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-screen w-screen flex items-center justify-center flex-col relative">{children}</div>;
};

export default AuthPagesLayout;
