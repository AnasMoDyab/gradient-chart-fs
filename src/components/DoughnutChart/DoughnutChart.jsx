import React, { Component } from "react";
import Chart from "chart.js";
import styles from "./DoughnutChart.module.css";

class Doughnut extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");

    const { data, labels } = this.props;

    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data,
            backgroundColor: ["#E03E52", "#FCE300"],
            borderColor: "transparent",
          },
        ],
        labels,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        title: {
          display: false,
        },
        centerText: {
          display: true,
          text: "250",
        },
        legend: {
          display: false,
        },
      },
    });
  }
  render() {
    return <canvas className={styles.canvas} id="mycanvas" ref={this.chartRef}></canvas>;
  }
}
export default Doughnut;
