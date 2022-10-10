import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"></img>
        <div className={s.loginBlock}>
          {props.isAuth ? <div><div>{props.login}</div><div><button onClick={props.logout}>Log out</button></div></div>: <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  );
};
export default Header;
