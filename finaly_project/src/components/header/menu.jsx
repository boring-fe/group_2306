import React from "react";
import "./menu.scss";

export class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li className="menu__item">
          <a href="" className="menu__link">
            HOME
          </a>
        </li>
        <li className="menu__item">
          <a href="" className="menu__link">
            TRAINING
          </a>
        </li>
        <li className="menu__item">
          <a href="" className="menu__link">
            ABOUT
          </a>
        </li>
        <li className="menu__item">
          <a href="" className="menu__link">
            WINNINGS
          </a>
        </li>
        <li className="menu__item">
          <a href="" className="menu__link">
            THE STUDIO
          </a>
        </li>
        <li className="menu__item">
          <a href="" className="menu__link">
            BOOK ONLINE
          </a>
        </li>
        <li className="menu__item">
          <a href="" className="menu__link">
            PLANS
          </a>
        </li>
        <li className="menu__item">
          <a href="" className="menu__link">
            CONTANT
          </a>
        </li>
      </ul>
    );
  }
}
