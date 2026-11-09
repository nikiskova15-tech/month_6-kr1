import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useRecipeStore } from '../store/useRecipeStore';

export default function RecipePage() {
    const recipe = useLoaderData();
    const addRecent = useRecipeStore((state) => state.addRecent);

    useEffect(() => {
        addRecent(recipe);
    }, [recipe, addRecent]);

    return (
        <div className="recipe-details">
            <Link to="/">← Назад в каталог</Link>

            <h1>{recipe.name}</h1>

            <img src={recipe.image} alt={recipe.name} />

            <p>Кухня: {recipe.cuisine}</p>
            <p>Сложность: {recipe.difficulty}</p>
            <p>Рейтинг: ⭐ {recipe.rating}</p>
            <p>Время подготовки: {recipe.prepTimeMinutes} мин.</p>
            <p>Время готовки: {recipe.cookTimeMinutes} мин.</p>
            <p>Калории на порцию: {recipe.caloriesPerServing}</p>

            <h2>Ингредиенты</h2>

            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2>Приготовление</h2>

            <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}