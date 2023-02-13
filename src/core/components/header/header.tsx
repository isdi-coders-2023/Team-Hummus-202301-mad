import Navbar from "../navbar/navbar";
import "./header.scss";

export function Header() {
  return (
    <header className="app-header">
      <div className="app-header__logo">
        <img src="images\logo_rick_and_morty.svg" alt="logo" />
      </div>
      <Navbar></Navbar>
    </header>
  );
}
