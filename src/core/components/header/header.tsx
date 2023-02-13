import "./header.scss";

export function Header() {
  return (
    <header className="app-header">
      <div className="app-header__logo">
        <img src="images\logo_rick_and_morty.svg" alt="logo" />
      </div>
      <div className="app-header__menu">Home Favourites About</div>
    </header>
  );
}
