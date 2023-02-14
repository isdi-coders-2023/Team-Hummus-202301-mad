import "./navbar.scss";

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
      <li className="navbar-list__home">Home</li>
      <li className="navbar-list__howto">How to</li>
      <li className="navbar-list__about">About</li>
      <li className="navbar-list__favorites">Favorites</li>
    </ul>
  );
};
