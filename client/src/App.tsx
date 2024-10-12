import { Outlet } from "react-router-dom";
import Header from "./components/Header";

/**
 * Корневой компонент приложения
 */
const App = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App;
