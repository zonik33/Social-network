import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to ="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to ="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to ="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};
export default Nav;
