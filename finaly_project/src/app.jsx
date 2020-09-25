import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Nav } from "./components/header/nav.jsx";
import { PageMain } from "./components/main/pageMain.jsx";

import "./app.scss";

export class Page extends React.Component {
  render() {
    return (
      <div className="other">
        <header className="header">
          <Nav />
        </header>
        <div className="content">
          <main className="main">
            <Switch>
              <Route exact={true} component={PageMain} />
              <Route path="/404" component={() => <h1>Not found!</h1>} />
              <Redirect to="/404" />
            </Switch>
          </main>
          <footer className="footer"></footer>
        </div>
      </div>
    );
  }
}
