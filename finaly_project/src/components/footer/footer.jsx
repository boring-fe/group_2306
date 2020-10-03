import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./footer.scss";

export class Conact extends React.Component {
  render() {
    function sendMessage() {
      const formMessage = document.querySelector(".form");
      const formInputs = document.querySelectorAll(".form__input");
      const classSent = "form_sent";
      let count = 0;

      function removeSent() {
        formMessage.classList.remove(classSent);
      }

      function addSent() {
        formMessage.classList.add(classSent);
      }

      for (let input of formInputs) {
        if (input.checkValidity() === false) {
          count++;
        }
      }
      if (count === 0) {
        addSent();
        formMessage.reset();
        setTimeout(removeSent, 3000);
      }
    }

    return (
      <div className="contact" id="footer">
        <div className="contact__content">
          <div className="contact__info">
            <h3 className="contact__title">CONTACT ME</h3>
            <h4 className="contact__text">
              WRITE OR CALL ME IF YOU HAVE MORE QUESTIONS
            </h4>
            <h4 className="contact__text">
              INFO@MYSITE.COM
              <br />
              123-456-7890
            </h4>
            <div className="contact__links">
              <ul className="contact__items">
                <li className="contact__item">
                  <a href="https://www.facebook.com/wix" target="_blank">
                    <div className="contact__facebook contact_img"></div>
                  </a>
                </li>
                <li className="contact__item">
                  <a href="https://twitter.com/wix" target="_blank">
                    <div className="contact__twitter contact_img"></div>
                  </a>
                </li>
                <li className="about__item">
                  <a href="https://www.instagram.com/wix/" target="_blank">
                    <div className="contact__instagram contact_img"></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact__form">
            <form className="form">
              <input
                type="text"
                name=""
                id=""
                className="form__input"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name=""
                id=""
                className="form__input"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name=""
                id=""
                className="form__input"
                placeholder="Subject"
                required
              />
              <textarea
                type="text"
                name=""
                id=""
                className="form__input form_message"
                placeholder="Message"
                required
              />
              <div className="form__btn-block">
                <button onClick={sendMessage} className="form__btn">
                  Submit
                </button>
                <p className="form__success">Thanks for submitting!</p>
              </div>
            </form>
            <div className="copyrigth">
              <Link to="#up" className="copyrigth__up">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  id="comp-imagmsgdsvgcontent"
                  data-bbox="6.443 47.497 187.114 105.008"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="6.443 47.497 187.114 105.008"
                  role="img"
                  className="copyrigth__img"
                >
                  <g>
                    <path d="M174.476 51.261l-74.704 74.193L25.578 50.75c-4.287-4.316-11.566-4.341-15.882-.054s-4.341 11.565-.055 15.882l82.107 82.673c4.287 4.316 11.566 4.341 15.882.055l82.673-82.107c4.316-4.287 4.341-11.566.055-15.882s-11.235-4.342-15.882-.056z"></path>
                  </g>
                </svg>
              </Link>
              <h5 className="copyrigth__text">
                ©2023 BY JOEY DIXON. PROUDLY CREATED WITH WIX.COM
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
