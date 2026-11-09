import { useRecipeStore } from "../store/useRecipeStore"
import RecipeCard from "../components/RecipeCard"

export default function FavoritesPage() {
  const { favorites } = useRecipeStore()

  return (
    <div>
      <h1>Избранное</h1>

      {favorites.length === 0 ? (
        <p>Нет избранных рецептов</p>
      ) : (
        <div className="recipes">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}
    </div>
  )
}