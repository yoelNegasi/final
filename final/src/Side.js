import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Service from "./Service";
import "./App.css";
import Nav from "./Nav";
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div></div>,
    main: () => <h2></h2>,
  },
  {
    path: "/Service",
    sidebar: () => <div></div>,
    main: () => <Service />,
  },
  {
    path: "/Nav",
    sidebar: () => <div>SOCIAL MEDIA</div>,
    main: () => <Nav />,
  },
];

export default function SidebarExample() {
  return (
    <Router>
      <div className="side2">
        <div className="side1">
          <NavLink to="/" className="si">
            HOME
          </NavLink>

          <NavLink to="/Service" className="si">
            LIST
          </NavLink>

          <NavLink to="/Nav" className="si">
            SOCIAL MEDIA
          </NavLink>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
