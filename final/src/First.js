import React, { Component } from "react";
import "./first.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import Child from "./Child";
import Senior from "./Senior.js";
import Pet from "./Pet";

class First extends Component {
  render() {
    return (
      <div className="top">
        <div className="title">
          <h1 className="tt">CARE</h1>
          <h1 className="tt">Find trusted caregivers for your every need</h1>
        </div>
        <br />
        <Router>
          <div className="mid">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="mid2">
                <h1>CHILD CARE</h1>
              </div>
            </Link>

            <Link to="/Senior" style={{ textDecoration: "none" }}>
              <div className="mid2">
                <h1>SENIOR CARE</h1>
              </div>
            </Link>
            <Link to="/Pet" style={{ textDecoration: "none" }}>
              <div className="mid2">
                <h1>PET CARE</h1>
              </div>
            </Link>
          </div>
          <Switch>
            <Route path="/" exact component={Child} />
            <Route path="/Senior" exact component={Senior} />
            <Route path="/Pet" exact component={Pet} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default First;
