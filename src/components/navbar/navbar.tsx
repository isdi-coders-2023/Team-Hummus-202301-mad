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
          <a href={item.path}>
            <li
              key={item.label}
              className={`navbar-list__${item.label.toLocaleLowerCase()} navbar-list__item`}
            >
              {item.label}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
