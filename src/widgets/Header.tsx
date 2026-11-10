import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useFavoritesStore } from '../features/favoritesStore';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const count = useFavoritesStore((s) => s.favoriteIds.length);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-slate-700 hover:text-orange-500'}`;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-orange-500">
          🍳 Книга рецептов
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>Каталог</NavLink>
          <NavLink to="/favorites" className={linkClass}>
            Избранное ({count})
          </NavLink>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-slate-700 text-2xl cursor-pointer"
          aria-label="Меню"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex flex-col gap-3">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClass}>
            Каталог
          </NavLink>
          <NavLink to="/favorites" onClick={() => setMenuOpen(false)} className={linkClass}>
            Избранное ({count})
          </NavLink>
        </nav>
      )}
    </header>
  );
};
