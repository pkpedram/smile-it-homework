import React from 'react';
type Props = {
  error?: boolean;
  helperText?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Input = ({ error, title, className, helperText, ...rest }: Props) => {
  return (
    <div className="w-full">
      {title && <label>{title}</label>}
      <input
        className={`h-12 w-full rounded-lg border border-gray-600 focus:border-primary text-white outline-none px-4 placeholder:text-gray-600 ${
          error ? '!border-red-500' : ''
        } ${className}`}
        {...rest}
        autoComplete="false"
      />
      {helperText && <p className={`text-sm ${error ? 'text-red-500' : 'text-gray-200'}`}>{helperText}</p>}
    </div>
  );
};

export default Input;
