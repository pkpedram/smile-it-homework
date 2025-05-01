import React from 'react';
type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
const Button = ({ className, children, disabled, ...rest }: Props) => {
  return (
    <button
      className={`${
        disabled ? 'bg-gray-500' : 'bg-primary/70'
      } text-center text-black text-sm py-2 px-8 cursor-pointer hover:-translate-y-1 hover:bg-primary rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
