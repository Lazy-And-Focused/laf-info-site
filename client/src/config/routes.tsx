import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import { ConfigRoute } from '../types';
import NotFound from '../pages/NotFound';

/**
 * Все пути к страницам приложения (сайта)
 */
const routes: ConfigRoute[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { name: 'Главная', path: '/', element: <Home /> },
      { name: 'Новости', path: 'news', element: <News /> },
      { name: 'О нас', path: 'about', element: <About /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes.map((r) => r));

export default routes;
