import React from "react";
import "./menu.scss";
import { HashLink as Link } from "react-router-hash-link";

export class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li className="menu__item">
          <Link className="menu__link" to="/#home">
            HOME
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/#training">
            TRAINING
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/#about">
            ABOUT
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/">
            WINNINGS
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/">
            THE STUDIO
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/book">
            BOOK ONLINE
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="plans">
            PLANS
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="contact">
            CONTACT
          </Link>
        </li>
      </ul>
    );
  }
}
