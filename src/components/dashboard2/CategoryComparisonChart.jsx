import React from "react";
import ComparisonBarChart from "../ComparisonBarChart";

const CategoryComparisonChart = ({
  firstDateData,
  secondDateData,
  firstDate,
  secondDate,
}) => {
  return (
    <ComparisonBarChart
      firstDateData={firstDateData}
      secondDateData={secondDateData}
      firstDate={firstDate}
      secondDate={secondDate}
      type={"Category"}
    />
  );
};

export default CategoryComparisonChart;
