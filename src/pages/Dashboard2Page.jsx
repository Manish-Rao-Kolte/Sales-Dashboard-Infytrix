import React, { useEffect, useState } from "react";
import ProductComparisonChart from "../components/dashboard2/ProductComparisonChart";
import CategoryComparisonChart from "../components/dashboard2/CategoryComparisonChart";
import CustomDatePicker from "../components/DatePicker";
import Loading from "../components/Loading";
import { getCategoryWiseSalesData } from "../utils/utils";
import ComparisonTable from "../components/dashboard2/ComparisonTable";

const Dashboard2Page = () => {
  const [firstDateData, setFirstDateData] = useState([]);
  const [secondDateData, setSecondDateData] = useState([]);
  const [firstDate, setFirstDate] = useState("2024-08-19"); // can use current dates
  const [secondDate, setSecondDate] = useState("2024-08-18");

  //get data on mount and when date changes.
  useEffect(() => {
    const fetchData = async (date) => {
      const response = await fetch(
        `http://localhost:5000/sales_data?date=${date}`
      );
      const result = await response.json();
      return result[0].sales;
    };
    //use stimeout to make api call effect
    setTimeout(async () => {
      setFirstDateData(await fetchData(firstDate));
      setSecondDateData(await fetchData(secondDate));
    }, 1000);
  }, [firstDate, secondDate]);

  if (!firstDateData.length && !secondDateData.length) {
    return <Loading />;
  }

  return (
    <div className='flex-1 flex flex-col gap-5 bg-slate-800 p-5'>
      <div className='flex items-center'>
        <h1 className='text-white flex-1 text-base lg:text-xl font-bold'>
          Sales Comparison Dashboard
        </h1>
        <div className='flex flex-col lg:flex-row items-center lg:gap-2'>
          <span className='text-white text-sm lg:text-base hidden lg:flex'>
            {" "}
            Select Dates -{" "}
          </span>
          <CustomDatePicker selectedDate={firstDate} setDate={setFirstDate} />
          <span className='text-white text-sm lg:text-base'> &</span>
          <CustomDatePicker selectedDate={secondDate} setDate={setSecondDate} />
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-4'>
        <div className='flex-1 flex gap-5 flex-col lg:flex-row'>
          <ProductComparisonChart
            firstDateData={firstDateData}
            secondDateData={secondDateData}
            firstDate={firstDate}
            secondDate={secondDate}
          />
          <CategoryComparisonChart
            firstDateData={getCategoryWiseSalesData(firstDateData)}
            secondDateData={getCategoryWiseSalesData(secondDateData)}
            firstDate={firstDate}
            secondDate={secondDate}
          />
        </div>
        <div className='flex-1 flex gap-5 flex-col'>
          <ComparisonTable
            firstDateData={firstDateData}
            secondDateData={secondDateData}
            firstDate={firstDate}
            secondDate={secondDate}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard2Page;
