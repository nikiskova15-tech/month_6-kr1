import type { SelectHTMLAttributes } from 'react';

export const Select = ({ className = '', children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    className={`px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
    {...props}
  >
    {children}
  </select>
);