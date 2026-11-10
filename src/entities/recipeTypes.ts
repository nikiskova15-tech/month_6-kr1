export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Recipe {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  difficulty: Difficulty;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  tags: string[];
  ingredients: string[];
  instructions: string[];
}

export interface RecipesResponse {
  recipes: Recipe[];
  total: number;
}
