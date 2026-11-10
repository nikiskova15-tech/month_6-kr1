import { Link } from 'react-router-dom';
import type { Recipe } from './recipeTypes';
import { Badge } from '../shared/ui/Badge';

interface RecipeCardProps {
  recipe: Recipe;
  favoriteSlot?: React.ReactNode;
}

export const RecipeCard = ({ recipe, favoriteSlot }: RecipeCardProps) => {
  const difficultyColor = {
    Easy: 'green',
    Medium: 'yellow',
    Hard: 'red',
  } as const;

  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md hover:border-orange-300 transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div
          className="absolute top-2 right-2 z-10"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {favoriteSlot}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <Badge color={difficultyColor[recipe.difficulty]}>{recipe.difficulty}</Badge>
            <span className="text-sm font-medium text-amber-500">★ {recipe.rating}</span>
          </div>
          <h3 className="font-semibold text-lg text-slate-900 group-hover:text-orange-500 transition-colors line-clamp-1">
            {recipe.name}
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            {recipe.cuisine} • {recipe.prepTimeMinutes + recipe.cookTimeMinutes} мин • {recipe.caloriesPerServing} ккал
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          {recipe.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};
