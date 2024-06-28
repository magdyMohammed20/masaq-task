import React from "react";
import LineChart from "./LineChart";

const SimpleAnalytics = () => {
  return (
    <div className="col-span-1 flex flex-col rounded-[20px] border border-secondarklight bg-cardbg px-3 py-12">
      <div>
        <div className="flex flex-col-reverse  justify-between gap-5">
          <div className=" text-[20px] text-textcolor">Simple analytics</div>
          <div className="order-first  text-[16px] tracking-tight text-graycustom ">
            Make informed decisions backed by data through our analytics tools. 
          </div>
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default SimpleAnalytics;
