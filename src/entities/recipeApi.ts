import type { Recipe, RecipesResponse } from './recipeTypes';

const BASE_URL = 'https://dummyjson.com/recipes';

export const fetchAllRecipes = async (): Promise<Recipe[]> => {
  const res = await fetch(`${BASE_URL}?limit=0`);
  if (!res.ok) throw new Error('Ошибка загрузки рецептов');
  const data: RecipesResponse = await res.json();
  return data.recipes;
};

export const fetchRecipeById = async (id: string): Promise<Recipe> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Рецепт не найден');
  return res.json();
};

export const fetchRecipeTags = async (): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/tags`);
  if (!res.ok) throw new Error('Ошибка загрузки тегов');
  return res.json();
};
