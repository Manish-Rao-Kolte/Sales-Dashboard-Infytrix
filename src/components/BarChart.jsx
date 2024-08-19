import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data = [], type = "Prodouct" }) => {
  // Check if data is provided and not empty
  if (!data || data?.length === 0) {
    return (
      <div className='p-5 justify-center items-center bg-gray-700'>
        <h1 className='font-bold text-white text-lg'>Today's sales</h1>
        <p className='text-white text-lg text-center font-semibold'>
          No data available
        </p>
      </div>
    );
  }
  // Prepare the data for the chart
  const chartData = {
    labels: data?.map((item) => {
      if (type === "Category") {
        return item.category;
      } else if (type === "Product") {
        return item.product_name;
      } else {
        return "";
      }
    }),
    datasets: [
      {
        label: "Sales Amount",
        data: data?.map((item) => item.total_sales_amount),
        barPercentage: 0.5,
        minBarLength: 2,
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // Teal
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)", // Teal
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(255, 159, 64, 1)", // Orange
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
        ],
        borderWidth: 1.5,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
        // labels: {
        //   color: "#fff",
        // },
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        bodyColor: "#333",
      },
      title: {
        display: true,
        padding: 20,
        text: `Sales Data- ${type}`,
        color: "#fff",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#fff",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className='flex-1 bg-gray-700 p-4'>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
