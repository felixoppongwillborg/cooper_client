import React, { Component } from "react";
import { getData } from "../modules/performanceData";
import { Bar } from "react-chartjs-2";

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null,
  };

  componentDidMount() {
    this.getPerformanceData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getPerformanceData();
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    });
  }

  render() {
    let dataIndex;

    if (this.state.performanceData != null) {
      const distances = [];
      const labels = [];

      this.state.performanceData.forEach((entry) => {
        distances.push(entry.data.distance);
        labels.push(entry.data.message);
      });

      const data = {
        labels: labels,
        datasets: [
          {
            data: distances,
            label: "saved distance",
            backgroundColor: "rgba(147, 186, 183)",
            hoverBackgroundColor: "rgba(101, 166, 161)",
            hoverBorderColor: "rgba(101, 166, 161)",
          },
        ],
      };
      dataIndex = (
        <div>
          <Bar data={data} />
        </div>
      );
    }

    return <div>{dataIndex}</div>;
  }
}

export default DisplayPerformanceData;
