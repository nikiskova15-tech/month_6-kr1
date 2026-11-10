import { useEffect, useMemo, useState } from 'react';
import { fetchAllRecipes, fetchRecipeTags } from '../entities/RecipeApi';
import type { Recipe } from '../entities/recipeTypes';
import { RecipeControls } from '../features/RecipeControls';
import { applyRecipeControls, type FilterParams } from '../features/recipeFilters';
import { Loader } from '../shared/ui/Loader';
import { RecipeCatalog } from '../widgets/RecipeCatalog';

export const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [params, setParams] = useState<FilterParams>({
    search: '',
    difficulty: 'All',
    tag: '',
    sort: 'default',
  });

  useEffect(() => {
    Promise.all([fetchAllRecipes(), fetchRecipeTags()])
      .then(([recipesData, tagsData]) => {
        setRecipes(recipesData);
        setTags(tagsData);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredRecipes = useMemo(() => applyRecipeControls(recipes, params), [recipes, params]);

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-rose-500 py-10">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Каталог рецептов ({filteredRecipes.length})</h1>
      <RecipeControls params={params} tags={tags} onChange={setParams} />
      <RecipeCatalog recipes={filteredRecipes} />
    </div>
  );
};
