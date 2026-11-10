import { useFavoritesStore } from './favoritesStore';

interface FavoriteButtonProps {
  recipeId: number;
}

export const FavoriteButton = ({ recipeId }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const active = isFavorite(recipeId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(recipeId);
      }}
      className={`p-2 rounded-full shadow-sm transition-colors cursor-pointer ${
        active ? 'bg-rose-500 text-white' : 'bg-white/90 text-slate-600 hover:text-rose-500'
      }`}
      title={active ? 'Убрать из избранного' : 'В избранное'}
    >
      {active ? '❤️' : '🤍'}
    </button>
  );
};
