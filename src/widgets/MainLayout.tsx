import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const MainLayout = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
    <Header />
    <main className="max-w-6xl w-full mx-auto px-4 py-8 flex-1">
      <Outlet />
    </main>
  </div>
);
