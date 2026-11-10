import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../widgets/MainLayout';
import { HomePage } from '../pages/HomePage';
import { RecipePage } from '../pages/RecipePage';
import { FavoritesPage } from '../pages/FavoritesPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'recipe/:id', element: <RecipePage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
