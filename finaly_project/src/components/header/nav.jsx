import React from "react";

import { Menu } from "./menu.jsx";
import { LogIn } from "./login.jsx";
import "./nav.scss";

export class Nav extends React.Component {
  render() {
    function toggleMenu() {
      const menuToggle = document.querySelector(".head__menu");
      const ACTIVE_CLASS_NAME_TOGGLE = "head_toggle";
      menuToggle.classList.toggle(ACTIVE_CLASS_NAME_TOGGLE);
      const menuLink = document.querySelector(".head__nav");
      const ACTIVE_CLASS_NAME_LINK = "head_active";
      menuLink.classList.toggle(ACTIVE_CLASS_NAME_LINK);
    }
    return (
      <div className="head">
        <div className="head__content">
          <nav className="head__nav">
            <Menu />
            <LogIn />
          </nav>
        </div>
        <div className="head__menu-block">
          <button onClick={toggleMenu} className="head__menu"></button>
        </div>
      </div>
    );
  }
}
