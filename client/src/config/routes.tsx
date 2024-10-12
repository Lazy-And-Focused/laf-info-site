import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Achievements from "../pages/Achievements";
import Home from "../pages/Home";
import Information from "../pages/Information";
import News from "../pages/News";
import Projects from "../pages/Projects";

interface ConfigRoute {
  name?: string;
  path: string;
  element: React.ReactNode;
  children?: ConfigRoute[];
}

/**
 * Все пути к страницам приложения (сайта)
 */
const routes: ConfigRoute[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { name: "Главная", path: "/", element: <Home /> },
      { name: "Новости", path: "news", element: <News /> },
      { name: "Достижения", path: "achievements", element: <Achievements /> },
      { name: "Информация", path: "information", element: <Information /> },
      { name: "Проекты", path: "projects", element: <Projects /> },
    ],
  },
];

export const router = createBrowserRouter(routes.map((r) => r));

export default routes;
