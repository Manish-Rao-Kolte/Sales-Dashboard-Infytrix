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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonBarChart = ({
  firstDateData,
  secondDateData,
  firstDate,
  secondDate,
  type,
}) => {
  //chart data
  const chartData = {
    labels: firstDateData?.map((item) => {
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
        label: `Sales - ${firstDate}`,
        data: firstDateData?.map((item) => item.total_sales_amount),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: `Sales - ${secondDate}`,
        data: secondDateData?.map((item) => item.total_sales_amount),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff",
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#333",
        bodyColor: "#333",
      },
      title: {
        display: true,
        text: `Sales Data Comparison- ${type}`,
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

export default ComparisonBarChart;
