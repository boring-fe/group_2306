import React from "react";
import { Route } from "react-router-dom";

import { Home } from "./home/home.jsx";
import { Training } from "./training/training.jsx";
import { About } from "./about/about.jsx";
import { Winnings } from "./winnings/winnings.jsx";
import { Studio } from "./studio/studio.jsx";

export class PageMain extends React.Component {
  render() {
    return (
      <div className="pageMain">
        <Route component={Home} />
        <Route component={Training} />
        <Route component={About} />
        <Route component={Winnings} />
        <Route component={Studio} />
      </div>
    );
  }
}
