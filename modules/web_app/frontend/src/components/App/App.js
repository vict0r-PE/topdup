import "./App.css";
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";
import useToken from "./useToken";
import TableView from "../tableView/TableView";

function App() {
  const { token, setToken } = useToken();

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              TopDup
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          {/* <div className="auth-inner"> */}
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return !token ? <Login setToken={setToken} /> : <Dashboard />;
              }}
            />
            <Route exact path="/tableView" component={TableView} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/Preferences" component={Preferences} />
          </Switch>
          {/* </div> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
