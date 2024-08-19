import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarNumber } from "react-icons/io5";
import { formatDateToString } from "../utils/utils";

const CustomDatePicker = ({ selectedDate, setDate }) => {
  const handleDateChange = (date) => {
    const formatedDate = formatDateToString(date);
    if (formatedDate > "2024-08-19" || formatedDate < "2024-08-13") return;
    setDate(formatDateToString(date));
  };
  return (
    <div className='relative flex-1'>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        startDate={"2024-08-13"}
        endDate={"2024-08-19"}
        dateFormat={"yyyy/MM/dd"}
        className='text-gray-800 h-5 lg:h-8 bg-slate-100 border shadow-lg shadow-slate-950 rounded-2xl p-2 w-full text-sm lg:text-base'
      />
      <IoCalendarNumber className='absolute right-2 lg:right-4 w-4 h-4 lg:w-6 lg:h-6 text-slate-600 top-[50%] -translate-y-[50%]' />
    </div>
  );
};

export default CustomDatePicker;
