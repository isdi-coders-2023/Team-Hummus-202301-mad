import "./header.scss";

type HeaderProps = { children: JSX.Element };
export function Header({ children }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header__logo">
        <img src="img\logo_rick_and_morty.svg" alt="logo" />
      </div>
      <div>{children}</div>
    </header>
  );
}
