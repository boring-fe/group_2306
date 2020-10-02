import React from "react";

import "./studio.scss";

export class Studio extends React.Component {
  render() {
    function phoneValide() {
      const appContent = document.querySelector(".app__content");
      const classError = "number_error";
      const classSuccess = "number_success";
      const classAgain = "number_again";
      const phoneNumber = document.querySelector(".phone__number");
      if (phoneNumber.checkValidity() === false) {
        appContent.classList.add(classError);
      } else {
        appContent.classList.remove(classError);
        appContent.classList.remove(classAgain);
        appContent.classList.add(classSuccess);
      }
    }

    function phoneAgain() {
      const appContent = document.querySelector(".app__content");
      const classAgain = "number_again";
      const classSuccess = "number_success";
      appContent.classList.remove(classSuccess);
      appContent.classList.add(classAgain);
    }

    return (
      <div id="studio">
        <div className="studio">
          <div className="studio__title">
            <h2 className="studio__title-text">THE STUDIO</h2>
          </div>
          <div className="studio__description">
            <p className="studio__description-text">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
          </div>
          <div className="studio__schedule">
            <h3 className="studio__schedule-title">ADDRESS</h3>
            <h3 className="studio__schedule-text">500 TERRY FRANCOIS ST.</h3>
            <h3 className="studio__schedule-text">SF, CA 94158</h3>
          </div>
          <div className="studio__schedule">
            <h3 className="studio__schedule-title">HOURS</h3>
            <h3 className="studio__schedule-text">MONDAY - FRIDAY</h3>
            <h3 className="studio__schedule-text">6:30AM - 7:00PM</h3>
          </div>
        </div>
        <div className="app">
          <div className="app__image"></div>
          <div className="app__content">
            <div className="app__title">
              <h3 className="app__title-text">
                Book on the Go with the Wix Mobile App
              </h3>
            </div>
            <div className="app__description">
              <p className="app__description-text">
                The app lets your clients book services, get notifications &
                stay engaged with your business on the go. Let them join with a
                download link sent to their mobile.
              </p>
            </div>
            <p className="phone__error">Please insert a valid phone number</p>
            <form action="" className="phone">
              <input
                disabled
                type="text"
                placeholder="+380"
                name=""
                id=""
                className="phone__prefix phone__input"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name=""
                id=""
                className="phone__number phone__input"
                required
              />
              <button onClick={phoneValide} className="phone__send">
                Send
              </button>
            </form>
            <div className="phone__success">
              <p className="phone__success-text">Download Link sent.</p>
              <button onClick={phoneAgain} className="phone__success-again">
                Send Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
