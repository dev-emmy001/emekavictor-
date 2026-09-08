import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled';
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
}

export default function Button({
  variant = 'primary',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles: Record<string, string> = {
    primary: 'px-8 py-4 bg-white text-black hover:bg-orange-500 hover:text-white disabled:opacity-70',
    secondary: 'px-8 py-4 bg-gray-800 text-white border border-gray-700 hover:border-orange-500 hover:text-orange-500 disabled:opacity-70',
    outline: 'px-8 py-4 bg-gray-800 text-gray-100 border border-gray-600 hover:bg-gray-700 disabled:opacity-70',
    disabled: 'px-8 py-4 bg-gray-700 text-gray-500 cursor-not-allowed opacity-70',
  };

  const selectedVariant = disabled && variant !== 'disabled' ? 'disabled' : variant;
  const combinedClassName = `${baseStyles} ${variantStyles[selectedVariant]} ${className}`;

  const iconElement = icon ? (
    <span className="flex items-center justify-center">
      {icon}
    </span>
  ) : null;

  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </>
  );

  return (
    <button
      className={combinedClassName}
      disabled={disabled || selectedVariant === 'disabled'}
      {...props}
    >
      {content}
    </button>
  );
}
