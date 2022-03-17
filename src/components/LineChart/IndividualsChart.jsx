import React, { Component, useRef, useState } from "react";
import Chart from "chart.js";
import styles from "../LineChart/LineChart.module.css";

const IndividualsChart = (props) => {
  const chartRef = useRef();

  React.useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#0057B8");
    gradient.addColorStop(1, "#0057B800");

    const { data, labels } = props;
    new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            data,
            pointRadius: 0,
            backgroundColor: gradient,
            borderColor: "transparent",

            hoverBackgroundColor: "#4f88ca",
          },
        ],
        labels,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        title: {
          text: "Applications",
          display: true,
          fontStyle: "bold",
          fontSize: 24,
          fontColor: "black",
        },
        centerText: {
          display: true,
          text: "250",
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <canvas className={styles.canvas} id="mycanvas" ref={chartRef}></canvas>
  );
};

export default IndividualsChart;
