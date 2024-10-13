import { NavLink } from "react-router-dom";
import routes from "../config/routes";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.main}>
      {routes[0].children?.map((r) => (
        <NavLink key={r.path} to={r.path} className={style.link}>
          {r.name}
        </NavLink>
      ))}
    </header>
  );
};

export default Header;
