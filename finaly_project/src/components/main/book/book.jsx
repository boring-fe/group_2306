import React from "react";

import "./book.scss";

export class Book extends React.Component {
  render() {
    return (
      <div className="book" id="book">
        <div className="book__title">
          <h2 className="book__title-text">MY CLASSES</h2>
        </div>
        <div className="card">
          <div className="card__item">
            <div className="card__img card__img-1"></div>
            <div className="card__content">
              <div className="card__title">
                <h5 className="card__title-text">BoxFit</h5>
              </div>
              <div className="card__price">
                <span className="card__price-text">$60</span>
              </div>
              <div className="card__btn">
                <button className="card__click">Book Now</button>
              </div>
            </div>
          </div>
          <div className="card__item">
            <div className="card__img card__img-2"></div>
            <div className="card__content">
              <div className="card__title">
                <h5 className="card__title-text">Boxing for Beginners</h5>
              </div>
              <div className="card__price">
                <span className="card__price-text">$60</span>
              </div>
              <div className="card__btn">
                <button className="card__click">Book Now</button>
              </div>
            </div>
          </div>
          <div className="card__item">
            <div className="card__img card__img-3"></div>
            <div className="card__content">
              <div className="card__title">
                <h5 className="card__title-text">Boxing for Pros</h5>
              </div>
              <div className="card__price">
                <span className="card__price-text">$60</span>
              </div>
              <div className="card__btn">
                <button className="card__click">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
