import type { Difficulty, Recipe } from '../entities/recipeTypes';

export type SortOption = 'default' | 'rating-desc' | 'calories-asc' | 'time-asc';

export interface FilterParams {
  search: string;
  difficulty: Difficulty | 'All';
  tag: string;
  sort: SortOption;
}

export const searchRecipes = (recipes: Recipe[], query: string): Recipe[] => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return recipes;

  return recipes.filter(
    (r) =>
      r.name.toLowerCase().includes(normalized) ||
      r.ingredients.some((ing) => ing.toLowerCase().includes(normalized))
  );
};

export const filterRecipes = (
  recipes: Recipe[],
  difficulty: Difficulty | 'All',
  tag: string
): Recipe[] => {
  return recipes.filter((r) => {
    const matchDiff = difficulty === 'All' || r.difficulty === difficulty;
    const matchTag = !tag || r.tags.includes(tag);
    return matchDiff && matchTag;
  });
};

export const sortRecipes = (recipes: Recipe[], sortBy: SortOption): Recipe[] => {
  const copy = [...recipes];
  switch (sortBy) {
    case 'rating-desc':
      return copy.sort((a, b) => b.rating - a.rating);
    case 'calories-asc':
      return copy.sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
    case 'time-asc':
      return copy.sort(
        (a, b) => a.prepTimeMinutes + a.cookTimeMinutes - (b.prepTimeMinutes + b.cookTimeMinutes)
      );
    default:
      return copy;
  }
};

export const applyRecipeControls = (recipes: Recipe[], params: FilterParams): Recipe[] => {
  const searched = searchRecipes(recipes, params.search);
  const filtered = filterRecipes(searched, params.difficulty, params.tag);
  return sortRecipes(filtered, params.sort);
};
