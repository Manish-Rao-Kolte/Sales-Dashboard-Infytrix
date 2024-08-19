import React from "react";
import BarChart from "../BarChart";

const ProductSalesChart = ({ data }) => {
  return <BarChart data={data} type={"Product"} />;
};

export default ProductSalesChart;
