import React from "react";
import { Link } from "react-router-dom";

import "./home.scss";

export class Home extends React.Component {
  render() {
    return (
      <div className="home" id="home">
        <div className="home__container">
          <h2 className="home__title">JOEY DIXON</h2>
          <h4 className="home__description">TRAINING WITH A WORLD CHAMPION</h4>
          <div className="home__btn">
            <Link className="home__link" to="/book">
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
