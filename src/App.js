import "./App.css";
import "tachyons";
import "bootstrap/dist/css/bootstrap.min.css";
import EditList from "./components/EditList/EditList";
import Createalist from "./components/Createalist/Createalist";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="f1 center">WELCOME USER!</h1>
        <Router>
          <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
            <div className="container">
              <nav className="">
                <div className="collpase navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/history" className="nav-link">
                        History of names
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <br />
              <Switch>
                <Route path="/" exact component={Createalist} />
                <Route path="/history" component={EditList} />
              </Switch>
            </div>
          </article>
        </Router>
      </div>
    );
  }
}
export default App;
