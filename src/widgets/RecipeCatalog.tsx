import type { Recipe } from '../entities/recipeTypes';
import { RecipeCard } from '../entities/RecipeCard';
import { FavoriteButton } from '../features/FavoriteButton';

interface RecipeCatalogProps {
  recipes: Recipe[];
  emptyMessage?: string;
}

export const RecipeCatalog = ({
  recipes,
  emptyMessage = 'Рецепты по вашему запросу не найдены.',
}: RecipeCatalogProps) => {
  if (recipes.length === 0) {
    return <p className="text-center text-slate-500 py-12">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          favoriteSlot={<FavoriteButton recipeId={recipe.id} />}
        />
      ))}
    </div>
  );
};
