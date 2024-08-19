import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex-1 flex justify-between px-10 py-3 items-center bg-teal-700'>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `flex justify-center items-center px-4 py-1.5 text-white font-bold border rounded-xl border-slate-700 text-sm lg:text-base shadow-md shadow-teal-900 ${
            isActive
              ? "bg-slate-950 bg-opacity-50"
              : "bg-slate-600 bg-opacity-25 hover:bg-slate-700 hover:bg-opacity-30"
          }`
        }
      >
        Today's Sales
      </NavLink>
      <NavLink
        to={"/comparison"}
        className={({ isActive }) =>
          `flex justify-center items-center px-4 py-1.5 text-white font-bold border rounded-xl border-slate-700 text-sm lg:text-base shadow-md shadow-teal-900 ${
            isActive
              ? "bg-slate-950 bg-opacity-50"
              : "bg-slate-600 bg-opacity-25 hover:bg-slate-700 hover:bg-opacity-30"
          }`
        }
      >
        Comparison Dashboard
      </NavLink>
    </div>
  );
};

export default Header;
