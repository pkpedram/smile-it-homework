import React from 'react';

const AuthPagesLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default AuthPagesLayout;
