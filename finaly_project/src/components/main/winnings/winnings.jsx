import React from "react";
import { Link } from "react-router-dom";

import "./winnings.scss";

export class Winnings extends React.Component {
  render() {
    return (
      <div id="winnings">
        <div className="winnings">
          <div className="winnings__content">
            <div className="winnings__title">
              <h2 className="winnings__title-text">WINNINGS</h2>
            </div>
            <div className="winnings__result">
              <div className="winnings__result-name">
                <h3 className="winnings__result-title">15</h3>
                <p className="winnings__result-description">
                  15 YEARS OF BOXING EXPERIENCE
                </p>
              </div>
              <div className="winnings__result-name">
                <h3 className="winnings__result-title">3</h3>
                <p className="winnings__result-description">
                  3 TIMES WBA INTERCONTINENTAL CRUISERWEIGHT
                </p>
              </div>
              <div className="winnings__result-name">
                <h3 className="winnings__result-title">4</h3>
                <p className="winnings__result-description">
                  4 TIMES WBC INTERCONTINENTAL CRUISERWEIGHT
                </p>
              </div>
              <div className="winnings__result-name">
                <h3 className="winnings__result-title">2</h3>
                <p className="winnings__result-description">
                  2 TIMES IBF INTERCONTINENTAL CRUISERWEIGHT
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="start">
          <div className="start__title">
            <h2 className="start__title-text">START TRAINING TODAY</h2>
          </div>
          <div className="start__btn">
            <Link className="start__link" to="/book">
              <span>Book a Session</span>
            </Link>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery__image gallery_img-1">
            <div className="gallery__hover">
              <h3 className="gallery__title">I'm an image title</h3>
              <p className="gallery__description">
                Describe your image here. Use catchy text to tell people the
                story behind the photo.
              </p>
            </div>
            <div className="gallery__text"></div>
          </div>
          <div className="gallery__image gallery_img-2">
            <div className="gallery__hover">
              <h3 className="gallery__title">I'm an image title</h3>
              <p className="gallery__description">
                Describe your image here. Use catchy text to tell people the
                story behind the photo.
              </p>
            </div>
          </div>
          <div className="gallery__image gallery_img-3">
            <div className="gallery__hover">
              <h3 className="gallery__title">I'm an image title</h3>
              <p className="gallery__description">
                Describe your image here. Use catchy text to tell people the
                story behind the photo.
              </p>
            </div>
          </div>
          <div className="gallery__image gallery_img-4">
            <div className="gallery__hover">
              <h3 className="gallery__title">I'm an image title</h3>
              <p className="gallery__description">
                Describe your image here. Use catchy text to tell people the
                story behind the photo.
              </p>
            </div>
          </div>
          <div className="gallery__image gallery_img-5">
            <div className="gallery__hover">
              <h3 className="gallery__title">I'm an image title</h3>
              <p className="gallery__description">
                Describe your image here. Use catchy text to tell people the
                story behind the photo.
              </p>
            </div>
          </div>
          <div className="gallery__image gallery_img-6">
            <div className="gallery__hover">
              <h3 className="gallery__title">I'm an image title</h3>
              <p className="gallery__description">
                Describe your image here. Use catchy text to tell people the
                story behind the photo.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
