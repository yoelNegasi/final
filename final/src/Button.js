import React, { Component } from "react";
import Front from "./Front";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
class Button extends Component {
  render() {
    return (
      <div className="butt">
        <Router>
          <Link to="/Front" style={{ textDecoration: "none" }}>
            <h1 className="button">Get Start</h1>
          </Link>
          <Switch>
            <Route path="/Front" exact component={Front} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Button;
