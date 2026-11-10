import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchRecipeById } from '../entities/RecipeApi';
import type { Recipe } from '../entities/recipeTypes';
import { FavoriteButton } from '../features/FavoriteButton';
import { Badge } from '../shared/ui/Badge';
import { Button } from '../shared/ui/Button';
import { Loader } from '../shared/ui/Loader';

export const RecipePage = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!id) return;
        fetchRecipeById(id)
            .then(setRecipe)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loader />;
    if (error || !recipe) return <p className="text-center text-rose-500 py-10">{error || 'Рецепт не найден'}</p>;

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-72 sm:h-96">
                <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                    <FavoriteButton recipeId={recipe.id} />
                </div>
            </div>

            <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <Link to="/">
                        <Button variant="outline">← Назад в каталог</Button>
                    </Link>
                    <span className="text-lg font-semibold text-amber-500">★ {recipe.rating}</span>
                </div>

                <h1 className="text-3xl font-bold mb-3">{recipe.name}</h1>

                <div className="flex flex-wrap gap-2 mb-6">
                    <Badge color="yellow">{recipe.difficulty}</Badge>
                    <Badge>{recipe.cuisine}</Badge>
                    <Badge>Подготовка: {recipe.prepTimeMinutes} мин</Badge>
                    <Badge>Готовка: {recipe.cookTimeMinutes} мин</Badge>
                    <Badge>{recipe.caloriesPerServing} ккал / порция</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-3">Ингредиенты</h2>
                        <ul className="list-disc list-inside space-y-1.5 text-slate-700">
                            {recipe.ingredients.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">Приготовление</h2>
                        <ol className="list-decimal list-inside space-y-2.5 text-slate-700">
                            {recipe.instructions.map((step, idx) => (
                                <li key={idx}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};
