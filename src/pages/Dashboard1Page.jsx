import React, { useEffect, useState } from "react";
import ProductSalesChart from "../components/dashboard1/ProductSalesChart";
import CategorySalesChart from "../components/dashboard1/CategorySalesChart";
import TodaySalesTable from "../components/dashboard1/TodaySalesTable";
import { getCategoryWiseSalesData } from "../utils/utils";
import CustomDatePicker from "../components/DatePicker";
import Loading from "../components/Loading";

const Dashboard1Page = () => {
  const [data, setData] = useState(null);
  const [date, setDate] = useState("2024-08-19"); //current date can be given by Date() or dayjs() if getting regular data.

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
      setData(await fetchData(date));
    }, 1000);
  }, [date]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className='flex-1 flex flex-col gap-5 bg-slate-800 p-5'>
      <div className='flex items-center gap-5'>
        <h1 className='text-white flex-1 text-base lg:text-xl font-bold'>
          Today's Sales Dashboard
        </h1>
        <span className='flex gap-2 items-center'>
          <span className='text-white text-sm lg:text-base hidden lg:flex'>
            {" "}
            Select Date -{" "}
          </span>
          <CustomDatePicker selectedDate={date} setDate={setDate} />
        </span>
      </div>
      <div className='flex-1 flex flex-col gap-4'>
        <div className='flex-1 flex gap-5 flex-col lg:flex-row'>
          <ProductSalesChart data={data} />
          <CategorySalesChart data={getCategoryWiseSalesData(data)} />
        </div>
        <div className='flex-1 flex gap-5 flex-col'>
          <TodaySalesTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard1Page;
