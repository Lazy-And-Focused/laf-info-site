/* eslint-disable react-refresh/only-export-components */

import type { ConfigRoute } from '../types';

import { createBrowserRouter } from 'react-router-dom';

import { lazy } from 'react';

import App from '../App';
import Home from '../pages/Home';

const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Links = lazy(() => import('../pages/Links'));

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
      { name: 'Ссылки', path: 'links', element: <Links /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes.map((r) => r));

export default routes;
