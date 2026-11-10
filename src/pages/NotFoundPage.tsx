import { Link } from 'react-router-dom';
import { Button } from '../shared/ui/Button';

export const NotFoundPage = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold mb-2">404</h1>
    <p className="text-slate-500 mb-6">Страница не найдена</p>
    <Link to="/">
      <Button>На главную</Button>
    </Link>
  </div>
);
