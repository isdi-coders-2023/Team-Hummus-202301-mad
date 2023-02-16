import "./navbar.scss";
import { MenuOption } from "../app/App";

type NavProps = {
  menuOptions: MenuOption[];
};
export function Navbar({ menuOptions }: NavProps) {
  return (
    <nav>
      <img className="burger-menu" src="/img/menu.png" alt="" />
      <ul className="navbar-list">
        {menuOptions.map((item) => (
          <li key={item.label} className="navbar-list__home">
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
