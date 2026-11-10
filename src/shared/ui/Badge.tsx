interface BadgeProps {
  children: React.ReactNode;
  color?: 'gray' | 'green' | 'yellow' | 'red';
}

export const Badge = ({ children, color = 'gray' }: BadgeProps) => {
  const styles = {
    gray: 'bg-stone-100 text-stone-600 border-stone-200/80',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    yellow: 'bg-amber-50 text-amber-700 border-amber-200',
    red: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  return (
    <span
      className={`items-center px-2.5 py-1 rounded-md text-xs font-medium border ${styles[color]}`}
    >
      {color !== 'gray' && (
        <span className={`w-1.5 h-1.5 rounded-full`} />
      )}
      {color === 'gray' ? `${children}` : children}
    </span>
  );
};
