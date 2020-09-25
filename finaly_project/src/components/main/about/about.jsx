import React from "react";

import "./about.scss";

export class About extends React.Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="about__content">
          <div className="about__title-block">
            <h2 className="about__title">MEET THE COACH</h2>
          </div>
          <div className="about__paragraph-block">
            <p className="about__paragraph">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="about__paragraph">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
          <div className="about__links">
            <ul className="about__items">
              <li className="about__item">
                <a href="https://www.facebook.com/wix" target="_blank">
                  <div className="about__facebook about_img"></div>
                </a>
              </li>
              <li className="about__item">
                <a href="https://twitter.com/wix" target="_blank">
                  <div className="about__twitter about_img"></div>
                </a>
              </li>
              <li className="about__item">
                <a href="https://www.instagram.com/wix/" target="_blank">
                  <div className="about__instagram about_img"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
