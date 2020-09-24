import React from "react";
import { Route, Router } from "react-router-dom";

import { Home } from "./home/home.jsx";
import { Training } from "./training/training.jsx";
import { About } from "./about/about.jsx";

export class Main extends React.Component {
  render() {
    return (
      <div className="pageMain">
        <Route component={Home} />
        <Route component={Training} />
        <Route component={About} />
      </div>
    );
  }
}
