import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav>
        <ul className="burger-menu" onClick={updateMenu}>
          <li className={burger_class}>Home</li>
          <li className={burger_class}>Favorites</li>
          <li className={burger_class}>How to use</li>
          <li className={burger_class}>About</li>
        </ul>
      </nav>

      <div className={menu_class}></div>
    </div>
  );
};

export default Navbar;
