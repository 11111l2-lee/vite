import React from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, type = 'button', disabled = false, className }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          'btn',
          'text-center text-red-500 leading-3',
          'hover:bg-gray-100',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

export default Button;
