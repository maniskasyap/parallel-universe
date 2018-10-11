import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import CoolCats from "./components/cool-cats/cool-cats";

class App extends Component {
  render() {
    return (
      <div className="App">
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
