import React from "react";
import { Link } from "react-router-dom";
import "./signup.scss";

export class SignUp extends React.Component {
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

          <h2 className="modal-window__title">Sign Up</h2>
          <div className="modal-window__change">
            <p className="modal-window__text">Already a member?</p>
            <Link to="/login" className="modal-window__change-link">
              Log In
            </Link>
          </div>

          <div className="modal-window__signup modal-window_signup-with-active">
            <div className="modal-window__signup-with">
              <a
                href="https://www.facebook.com/v2.11/dialog/oauth?app_id=309042052760104&auth_type=rerequest&cbt=1601654941650&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3dbb403bf28fa4%26domain%3Dusers.wix.com%26origin%3Dhttps%253A%252F%252Fusers.wix.com%252Ff1f0370cb905ad4%26relation%3Dopener&client_id=309042052760104&display=popup&domain=users.wix.com&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fusers.wix.com%2Fwix-sm%2Fview%2Fsocial%2Fframe%2Fa9d31726-d54f-4833-b9e9-aceee612e7ee%3Fmode%3Dsignup%26lang%3Den%26vendors%3Dgoogle%2Cfacebook%26extraCss%3Dsvg-style%26visitorId%3D99848801-380d-4bfa-97eb-4b6738090652%26collectionId%3D3d667dfe-7b2f-46e3-a55b-f0fa6dbe2c3c%23privacyStatus%3DPRIVATE&locale=ru_RU&logger_id=f979edf64c719c&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df280c8618538a5%26domain%3Dusers.wix.com%26origin%3Dhttps%253A%252F%252Fusers.wix.com%252Ff1f0370cb905ad4%26relation%3Dopener%26frame%3Df2d5cbcd7bd3834&response_type=token%2Csigned_request%2Cgraph_domain&scope=public_profile%2Cemail&sdk=joey&version=v2.11"
                target="_blank"
              >
                <button className="modal-window__btn modal-window_facebook">
                  Sign up with Facebook
                </button>
              </a>
              <a
                href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=353985333474-88ga5vak3e1r9jr9pnh4amaj7fa39far.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fusers.wix.com%2Fwix-sm%2Fapi%2Foauth2%2FsocialLogin&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=%7B%22mode%22%3A%22signup%22%2C%22lang%22%3A%22en%22%2C%22provider%22%3A%22google%22%2C%22visitorId%22%3A%2299848801-380d-4bfa-97eb-4b6738090652%22%2C%22collectionId%22%3A%223d667dfe-7b2f-46e3-a55b-f0fa6dbe2c3c%22%2C%22privacyStatus%22%3A%22PRIVATE%22%2C%22svSession%22%3A%22425f7929-96d4-4708-89da-770a8630dcb1%22%7D&flowName=GeneralOAuthFlow"
                target="_blank"
              >
                <button className="modal-window__btn modal-window_google">
                  Sign up with Google
                </button>
              </a>
              <p className="modal-window__txt">or</p>

              <button onClick={signUpEmail} className="modal-window__btn-email">
                Sign up with email
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
                Sign Up
              </button>
            </form>
            <div className="modal-window__signup-success">
              <p className="modal-window__success-text">
                Registration completed successfully!
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
