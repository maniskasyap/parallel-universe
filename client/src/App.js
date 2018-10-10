import React, { Component } from "react";
import "./App.css";
import CoolCats from "./components/cool-cats/cool-cats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoolCats />
      </div>
    );
  }
}

export default App;
