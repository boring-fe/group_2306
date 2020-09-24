import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import { Page } from "./app.jsx";
ReactDOM.render(
  <Router>
    <Page />
  </Router>,
  document.querySelector("#root")
);
