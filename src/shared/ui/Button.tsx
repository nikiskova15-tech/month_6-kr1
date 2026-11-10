import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = ({ variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 cursor-pointer';
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
  };

  return <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />;
};
