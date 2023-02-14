import "./navbar.scss";
import { MenuOption } from "../app/App";

type NavProps = {
  options: MenuOption[];
};
export function Navbar({ options }: NavProps) {
  return (
    <nav>
      <img className="burger-menu" src="/img/menu.png" alt="" />
      <ul className="navbar-list">
        {options.map((item) => (
          <li key={item.label} className="navbar-list__home">
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
