import { ChartIcon } from "@/svg/navbar/heroSvg";
import React from "react";
import Card from "../card/Card";
import Total from "../total/Total";
import Chart from "../chart/Chart";
import Employee from "../employee/Employee";

const DashboardCard = () => {
  return (
    <div className="rounded-[20px] bg-darklight2 py-6 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className=" grid grid-cols-1 gap-4  rounded-2xl  sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Total Profit"
              icon={<ChartIcon color="#72A700" />}
              price={"350.240"}
              increase={18.23}
              increaseColor="text-textsuccess"
            />

            <Card
              increaseColor="text-red"
              title="Total revenue"
              icon={<ChartIcon color="#EE1F1F" />}
              price={"400.690"}
              increase={28.35}
            />

            <Card
              increaseColor="text-blue"
              title="Product sold"
              icon={<ChartIcon color="#003FDB" />}
              price={"200.000"}
              increase={28.35}
            />
          </div>
          <div className=" mt-4 grid grid-cols-1 gap-4 rounded-2xl  sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-1">
              <Total
                totalBalance="350.0"
                totalIncome="320.0"
                incomePercentage={92}
                totalExpense="220.0"
                expensePercentage={92}
              />
            </div>
            <div className="col-span-2">
              <Chart />
            </div>
            <div className="col-span-1">
              <Employee />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
