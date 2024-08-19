import React from "react";
import BarChart from "../BarChart";

const CategorySalesChart = ({ data }) => {
  return <BarChart data={data} type={"Category"} />;
};

export default CategorySalesChart;
