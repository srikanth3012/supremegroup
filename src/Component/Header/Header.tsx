"use client";
import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menuIcon, setMenuIcon] = useState<boolean>(false);
  const menuIconHandler = () => setMenuIcon(!menuIcon);
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img alt="logo" src="./Supreme_logos.png" />
      </div>
      <nav className={`${menuIcon ? "active" : ""}`}>
        <button>Contact Us</button>
        <img alt="linkdin" src="./bxl-linkedin.svg.png" />
        <div className="translateContainer">
          <img alt="translate" src="./translate 1.png" />
          <span>Eng</span>
        </div>
      </nav>

      <div className="menuCont">
        <img
          alt="menu"
          src="./menu.png"
          className="menuIcon"
          onClick={menuIconHandler}
        />
      </div>
    </div>
  );
};

export default Header;
