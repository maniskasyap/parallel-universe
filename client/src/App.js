import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import CoolCats from "./components/cool-cats/cool-cats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="home">
          <Link to="/">
            <FontAwesomeIcon icon="home" />
          </Link>
        </div>
        <nav>
          <Link to="/cats">Cats</Link>
          <Link to="/dogs">Dogs</Link>
          <Link to="/bunnies">Bunnies</Link>
        </nav>
        <div>
          <Route path="/cats" component={CoolCats} />
        </div>
      </div>
    );
  }
}

export default App;
