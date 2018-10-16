import React, { Component } from "react";

import GenericPlot from "./generic-plot";

const styles = {
  width: 500,
  height: 300,
  padding: 30
};

const numDataPoints = 50;
const randomNum = () => Math.floor(Math.random() * 1000);
const randomDataSet = () => {
  return Array.apply(null, { length: numDataPoints }).map(() => [
    randomNum(),
    randomNum()
  ]);
};

class DataChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: randomDataSet()
    };
  }

  randomizeData = () => {
    this.setState({
      data: randomDataSet()
    });
  };

  render() {
    return (
      <div>
        <h2>data chart</h2>
        <GenericPlot {...this.state} {...styles} />
        <div>
          <button onClick={() => this.randomizeData()}>Randomize Data</button>
        </div>
      </div>
    );
  }
}

export default DataChart;
