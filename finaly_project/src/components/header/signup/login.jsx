import React from "react";
import { Link } from "react-router-dom";
import "./signup.scss";

export class LogIn extends React.Component {
  render() {
    function signUpEmail() {
      const signUp = document.querySelector(".modal-window__signup");
      const classEmail = "modal-window_signup-email-active";
      const classWith = "modal-window_signup-with-active";
      signUp.classList.add(classEmail);
      signUp.classList.remove(classWith);
    }

    function signUpValide() {
      const signUp = document.querySelector(".modal-window__signup");
      const classEmail = "modal-window_signup-email-active";
      const classSuccess = "modal-window_signup-success-active";
      const email = document.querySelector(".email");
      const password = document.querySelector(".password");
      const emailError = "email_error";
      const passwordError = "password_error";
      const inputEmail = document.querySelector(".modal-window__input-email");
      const inputPassword = document.querySelector(
        ".modal-window__input-password"
      );
      if (inputEmail.checkValidity() === false) {
        email.classList.add(emailError);
      } else {
        email.classList.remove(emailError);
      }
      if (inputPassword.checkValidity() === false) {
        password.classList.add(passwordError);
      } else {
        password.classList.remove(passwordError);
      }
      if (
        inputEmail.checkValidity() === true &&
        inputPassword.checkValidity() === true
      ) {
        signUp.classList.remove(classEmail);
        signUp.classList.add(classSuccess);
      }
    }
    return (
      <div className="modal-window">
        <div className="modal-window__content">
          <Link to="/">
            <button className="modal-window__close">
              <svg width="26px" height="26px" className="log-in__close">
                <rect
                  transform="translate(13.227922, 12.727922) rotate(45.000000) translate(-13.227922, -12.727922) "
                  x="12.7279221"
                  y="-4.27207794"
                  width="1"
                  height="34"
                ></rect>
                <rect
                  transform="translate(13.227922, 12.727922) rotate(-45.000000) translate(-13.227922, -12.727922) "
                  x="12.7279221"
                  y="-4.27207794"
                  width="1"
                  height="34"
                ></rect>
              </svg>
            </button>
          </Link>

          <h2 className="modal-window__title">Log In</h2>
          <div className="modal-window__change">
            <p className="modal-window__text">New to this site?</p>
            <Link to="/signup" className="modal-window__change-link">
              Sign Up
            </Link>
          </div>

          <div className="modal-window__signup modal-window_signup-with-active">
            <div className="modal-window__signup-with">
              <button className="modal-window__btn modal-window_facebook">
                Log in with Facebook
              </button>
              <button className="modal-window__btn modal-window_google">
                Log in with Google
              </button>

              <p className="modal-window__txt">or</p>

              <button onClick={signUpEmail} className="modal-window__btn-email">
                Log in with email
              </button>
            </div>
            <form className="modal-window__signup-email">
              <div className="modal-window__input email">
                <input
                  type="email"
                  name=""
                  id=""
                  className="modal-window__input-email"
                  placeholder="Email"
                  required
                />
                <p className="modal-window__input-error">
                  Email cannot be blank
                </p>
              </div>
              <div className="modal-window__input password">
                <input
                  type="password"
                  name=""
                  id=""
                  className="modal-window__input-password"
                  placeholder="Password"
                  required
                />
                <p className="modal-window__input-error">
                  Make sure you enter a password.
                </p>
              </div>
              <button onClick={signUpValide} className="modal-window__submit">
                Log in
              </button>
            </form>
            <div className="modal-window__signup-success">
              <p className="modal-window__success-text">
                Login completed successfully
              </p>
              <Link className="modal-window__link-to-home" to="/#home">
                Go to Main page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
