import React from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { AppRouter } from "../app.router/app.router";
import "./App.scss";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "How to", path: "/howto" },
  { label: "Favorites", path: "/favorites" },
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/howto" element={<Instructions></Instructions>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
