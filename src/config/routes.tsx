/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from 'react-router-dom';

import type { ConfigRoute } from '../types';
import { lazy } from 'react';

import App from '../App';
import Home from '../pages/Home';

const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const NotFound = lazy(() => import('../pages/NotFound'));

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
