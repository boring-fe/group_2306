import React from "react";

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
      </div>
    );
  }
}
