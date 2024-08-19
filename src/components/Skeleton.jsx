import React from "react";

const Skeleton = () => {
  return (
    <div className='flex-1 flex flex-col gap-10'>
      <div className=' w-[10vh] h-[10vh] rounded-full bg-slate-100 animate-pulse'></div>
      <div className='flex-1 flex flex-col gap-5'>
        <div className='w-full h-6 bg-slate-100 animate-pulse rounded-lg'></div>
        <div className='w-full h-6 bg-slate-100 animate-pulse rounded-lg'></div>
        <div className='w-full h-6 bg-slate-100 animate-pulse rounded-lg'></div>
        <div className='w-full h-6 bg-slate-100 animate-pulse rounded-lg'></div>
        <div className='w-full h-6 bg-slate-100 animate-pulse rounded-lg'></div>
      </div>
    </div>
  );
};

export default Skeleton;
