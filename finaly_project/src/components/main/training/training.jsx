import React from "react";
import { Link } from "react-router-dom";

import "./training.scss";

export class Training extends React.Component {
  render() {
    return (
      <div id="training" className="training">
        <div className="training__first-block">
          <div className="training__hover"></div>
          <div className="training__content">
            <Link to="/book">
              <h4 className="training__title">BEGINNERS</h4>
              <div className="training__img-cover">
                <div className="training__img"></div>
              </div>
            </Link>
          </div>
        </div>
        <div className="training__last-block">
          <div className="training__hover"></div>
          <div className="training__content">
            <Link to="/book">
              <h4 className="training__title">PROFESSIONALS</h4>
              <div className="training__img-cover">
                <div className="training__img"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
