import React from "react";
import LineChart from "./LineChart";

const Boosting = () => {
  return (
    <div className="col-span-2 flex flex-col rounded-[20px] border border-secondarklight bg-cardbg py-12">
      <div>
        <div className="flex flex-col-reverse  justify-between gap-5">
          <div className="flex flex-col gap-2">
            <div className=" text-[28px] text-textcolor">Boosting Business. </div>
            <div className=" text-[28px] text-textcolor">Today and Tomorrow. </div>
          </div>
          <div className="order-first  px-12 text-[16px] leading-7 text-graycustom">
            Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of
            mind for you.
          </div>
        </div>
        <div>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Boosting;
