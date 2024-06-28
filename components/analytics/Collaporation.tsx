import React from "react";
import LineChart from "./LineChart";

const Collaporation = () => {
  return (
    <div className="col-span-1 flex flex-col rounded-[20px] border border-secondarklight bg-cardbg py-12">
      <div>
        <div className="flex flex-col-reverse  justify-between gap-5">
          <div className=" text-[28px] text-textcolor">Easy collaboration </div>

          <div className="order-first  px-12 text-[16px] leading-7 text-graycustom">
            Seamlessly collaborate with your team members like never before. 
          </div>
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Collaporation;
