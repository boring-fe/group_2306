import React from "react";

import "./plans.scss";

export class Plans extends React.Component {
  render() {
    return (
      <div className="plans" id="plans">
        <div className="plans__title">
          <h2 className="plans__title-text">PLANS & PRICING</h2>
        </div>
        <div className="plans__card">
          <div className="plans__item">
            <div className="plans__tariff">
              <div className="plans__tariff-title">
                <h3 className="plans__tariff-title-text">Silver Membership</h3>
              </div>
              <div className="plans__tariff-price">
                <h3 className="plans__tariff-currency">$</h3>
                <h3 className="plans__tariff-number">30</h3>
              </div>
              <div className="plans__tariff-frequency">
                <h5 className="plans__tariff-frequency-text plans_disable">
                  Every month
                </h5>
              </div>
              <div className="plans__tariff-info">
                <h5 className="plans__tariff-info-text">
                  Short-term trial for beginners
                </h5>
              </div>
              <div className="plans__tariff-duration">
                <h5 className="plans__tariff-duration-text">
                  Valid for one month
                </h5>
              </div>
              <div className="plans__tariff-btn">
                <button className="plans__tariff-select">Select</button>
              </div>
            </div>
            <div className="plans__privileges">
              <p className="plans__privileges-text">
                Unlimited classes
                <br />
                Fitness assessment
                <br />
                Locker room with showers
              </p>
            </div>
          </div>
          <div className="plans__item">
            <div className="plans_best">Best Value</div>
            <div className="plans__tariff plans_tariff-best">
              <div className="plans__tariff-title">
                <h3 className="plans__tariff-title-text">Gold Membership</h3>
              </div>
              <div className="plans__tariff-price">
                <h3 className="plans__tariff-currency">$</h3>
                <h3 className="plans__tariff-number">25</h3>
              </div>
              <div className="plans__tariff-frequency">
                <h5 className="plans__tariff-frequency-text">Every month</h5>
              </div>
              <div className="plans__tariff-info">
                <h5 className="plans__tariff-info-text">
                  Ideal for advanced trainers
                </h5>
              </div>
              <div className="plans__tariff-duration">
                <h5 className="plans__tariff-duration-text">
                  Valid for 12 months
                </h5>
              </div>
              <div className="plans__tariff-btn">
                <button className="plans__tariff-select">Select</button>
              </div>
            </div>
            <div className="plans__privileges plans_privileges-best">
              <p className="plans__privileges-text">
                Unlimited classes
                <br />
                Fitness assessment
                <br />
                Locker room with showers
                <br />
                Free parking
              </p>
            </div>
          </div>
          <div className="plans__item">
            <div className="plans__tariff">
              <div className="plans__tariff-title">
                <h3 className="plans__tariff-title-text">
                  Platinum Membership
                </h3>
              </div>
              <div className="plans__tariff-price">
                <h3 className="plans__tariff-currency">$</h3>
                <h3 className="plans__tariff-number">40</h3>
              </div>
              <div className="plans__tariff-frequency">
                <h5 className="plans__tariff-frequency-text">Every month</h5>
              </div>
              <div className="plans__tariff-info">
                <h5 className="plans__tariff-info-text">
                  Perfect for committed trainers
                </h5>
              </div>
              <div className="plans__tariff-duration">
                <h5 className="plans__tariff-duration-text plans_disable">
                  Valid for one month
                </h5>
              </div>
              <div className="plans__tariff-btn">
                <button className="plans__tariff-select">Select</button>
              </div>
            </div>
            <div className="plans__privileges">
              <p className="plans__privileges-text">
                Unlimited classes
                <br />
                Fitness assessment
                <br />
                Locker room with showers
                <br />
                Free parking
                <br />
                Guest privileges
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
