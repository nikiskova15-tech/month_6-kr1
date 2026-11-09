import { useLoaderData } from 'react-router-dom';
import RecipeFilters from '../components/RecipeFilters';
import RecipeList from '../components/RecipeList';
import RecentlyViewed from '../components/RecentlyViewed';

export default function HomePage() {
    const data = useLoaderData();

    return (
        <div>
            <h1>Книга рецептов</h1>

            <RecipeFilters />

            <RecipeList recipes={data.recipes} />

            <RecentlyViewed />
        </div>
    );
}