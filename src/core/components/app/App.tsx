import React from "react";
import { Home } from "../../../features/home/home";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
