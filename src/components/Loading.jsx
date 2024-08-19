import React from "react";
import Skeleton from "./Skeleton";

const Loading = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col gap-10 bg-slate-900 p-5'>
      <div className='h-full flex-1 flex gap-10 flex-col lg:flex-row'>
        <Skeleton />
        <Skeleton />
      </div>
      <div className='h-full flex-1 flex'>
        <Skeleton />
      </div>
    </div>
  );
};

export default Loading;
