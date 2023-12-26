import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJs.register(CategoryScale, LinearScale, BarElement);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const WebChart4 = () => {
  const Webdata = {
    labels,
    datasets: [
      {
        data: [200,300, 400,500, 100, 600, 700, 800, 900, 100],
        backgroundColor: [""],
        borderColor: ["green"],
        borderWidth: 10,
        height: 100,
        borderRadius: 10,
      },
    ],
  };
  return (
    <div style={{ width: "200px", height: "200px", margin: "30px" }}>
      <Bar data={Webdata} />
    </div>
  );
};

export default WebChart4;
