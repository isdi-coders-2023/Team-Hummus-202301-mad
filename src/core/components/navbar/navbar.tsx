import "./navbar.scss";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <img className="burger-menu" src="/img/menu.png" alt="" />
      <NavbarList></NavbarList>
    </nav>
  );
};

const NavbarList = () => {
  return (
    <ul className="navbar-list">
      <li className="navbar-list__home">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-list__howto">
        <Link to="/howto">How to</Link>
      </li>
      <li className="navbar-list__about">
        <Link to="/about">About</Link>
      </li>
      <li className="navbar-list__favorites">
        <Link to="/favorites">Favorites</Link>
      </li>
    </ul>
  );
};
