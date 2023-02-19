import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { AppRouter } from "../app.router/app.router";
import "./App.scss";
import { Navbar } from "../navbar/navbar";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "How to", path: "/howto" },
  { label: "Favourites", path: "/favourites" },
  { label: "Add", path: "/add" },
  { label: "Detail", path: "/detail" },
];

function App() {
  return (
    <div className="App">
      <Header>
        <Navbar menuOptions={menuOptions}></Navbar>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
