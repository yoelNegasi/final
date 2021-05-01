import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Service from "./Service";
class HomeNav extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/">homeee</Link>
          <Link to="/Service">homeee</Link>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/Service" exact component={Service} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default HomeNav;
