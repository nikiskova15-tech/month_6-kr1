import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllRecipes } from '../entities/RecipeApi';
import type { Recipe } from '../entities/recipeTypes';
import { useFavoritesStore } from '../features/favoritesStore';
import { Button } from '../shared/ui/Button';
import { Loader } from '../shared/ui/Loader';
import { RecipeCatalog } from '../widgets/RecipeCatalog';

export const FavoritesPage = () => {
  const favoriteIds = useFavoritesStore((s) => s.favoriteIds);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllRecipes()
      .then(setRecipes)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  const favoriteRecipes = recipes.filter((r) => favoriteIds.includes(r.id));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Избранные рецепты ({favoriteRecipes.length})</h1>

      {favoriteRecipes.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
          <p className="text-slate-500 mb-4">Вы пока не добавили ни одного рецепта в избранное.</p>
          <Link to="/">
            <Button>Перейти в каталог</Button>
          </Link>
        </div>
      ) : (
        <RecipeCatalog recipes={favoriteRecipes} />
      )}
    </div>
  );
};
