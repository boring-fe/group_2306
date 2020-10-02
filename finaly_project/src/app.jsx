import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./app.scss";

import { Nav } from "./components/header/nav.jsx";
import { PageMain } from "./components/main/pageMain.jsx";
import { Conact } from "./components/footer/footer.jsx";
import { Book } from "./components/main/book/book.jsx";
import { Plans } from "./components/main/plans/plans.jsx";
import { SignUp } from "./components/header/signup/signup.jsx";
import { LogIn } from "./components/header/signup/login.jsx";

export class Page extends React.Component {
  render() {
    return (
      <div className="other">
        <header className="header" id="up">
          <Nav />
        </header>
        <div className="content">
          <main className="main">
            <Switch>
              <Route exact={true} path="/" component={PageMain} />
              <Route path="/book" component={Book} />
              <Route path="/plans" component={Plans} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
              <Route
                path="/404"
                component={() => <h1 className="not-found">Page not found!</h1>}
              />
              <Redirect to="/404" />
            </Switch>
          </main>
          <footer className="footer">
            <Conact />
          </footer>
        </div>
      </div>
    );
  }
}
