import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import About from '../pages/About';
import Home from '../pages/Home';
import Projects from '../pages/Projects'
import NotFound from '../pages/NotFound';

import type { ConfigRoute } from '../types';

/**
 * Все пути к страницам приложения (сайта)
 */
const routes: ConfigRoute[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { name: 'Главная', path: '/', element: <Home /> },
      { name: 'Проекты', path: 'projects', element: <Projects /> },
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
