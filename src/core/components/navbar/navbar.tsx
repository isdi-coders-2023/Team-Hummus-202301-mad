import "./navbar.scss";
import { slide as Menu } from "react-burger-menu";

export const Navbar = () => {
  return (
    <Menu>
      <img className="burger-menu" src="/images/menu.png" alt="" />
      <NavbarList></NavbarList>
    </Menu>
  );
};

const NavbarList = () => {
  return (
    <ul className="navbar-list">
      <li className="navbar-list__home">Home</li>
      <li className="navbar-list__howto">How to</li>
      <li className="navbar-list__about">About</li>
      <li className="navbar-list__favorites">Favorites</li>
    </ul>
  );
};
