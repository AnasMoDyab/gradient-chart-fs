import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import styles from "../LineChart/LineChart.module.css";

const CompaniesChart = (props) => {
  const chartRef = useRef();
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "#753BBD");
    gradient.addColorStop(1, "#753BBD00");

    const { data, labels } = props;

    new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            data,
            pointRadius: 0,
            backgroundColor: gradient,
            hoverBackgroundColor: "rgb(230,223,231)",
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
          text: "Site Traffic",
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
                z: 100,
              },
            },
          ],
        },
      },
    });
  });

  return (
    <canvas className={styles.canvas} id="mycanvas" ref={chartRef}></canvas>
  );
};

/* class CompaniesChart extends Component {
    chartRef = React.createRef();
    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");
        const gradient =ctx.createLinearGradient(0, 0, 0, 450);


        gradient.addColorStop(0, 'rgb(133,7,105)');
        gradient.addColorStop(0.5, 'rgb(238,154,207)');
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        const { data, labels } = this.props;

        new Chart(ctx, {
            type: "line",
            data: {
                datasets: [
                    {
                        data,
                        pointRadius: 0,
                        backgroundColor:gradient,
                        hoverBackgroundColor:  'rgb(230,223,231)',
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
                    text: "Site Traffic",
                    display: true,
                    fontStyle: 'bold',
                    fontSize: 24
                },
                centerText: {
                    display: true,
                    text: "250",
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:false
                        }
                    }]
                }
            },
        });

    }

    render() {
        return <canvas className={styles.canvas} id="mycanvas" ref={this.chartRef}></canvas>;
    }
} */

export default CompaniesChart;
