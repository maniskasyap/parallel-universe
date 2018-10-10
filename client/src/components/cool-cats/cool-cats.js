import React, { Component } from "react";
import "./cool-cats.css";

class CoolCats extends Component {
  constructor() {
    super();
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    fetch("/cats")
      .then(res => res.json())
      .then(cats =>
        this.setState(
          {
            cats
          },
          () => console.log("cats fetched...", cats)
        )
      );
  }
  render() {
    return (
      <div>
        <h2>CoolCats</h2>
        <ul>
          {this.state.cats.map(cat => (
            <li key={cat._id}>
              {cat.name} - {cat.style}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CoolCats;
