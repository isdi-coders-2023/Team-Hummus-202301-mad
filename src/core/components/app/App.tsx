import React from "react";
import { Home } from "../../../features/home/home";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Route } from "react-router-dom";
import "./App.scss";
import { About } from "../../../features/about/about";
import { Instructions } from "../../../features/how.to.use/instructions";
import { Routes } from "react-router";

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
