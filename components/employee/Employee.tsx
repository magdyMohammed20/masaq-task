import React from "react";
import Bar from "../bar/Bar";

const Employee = () => {
  return (
    <div className="flex flex-col rounded-[20px]   p-6">
      <div className="flex  flex-col gap-6">
        <div className="flex flex-col gap-6">
          <Bar
            title="Employee"
            firstPercentage={50}
            secondPercentage={100}
          />

          <Bar
            title="Independent Contractor"
            firstPercentage={50}
            secondPercentage={100}
          />

          <Bar
            title="Contracted Employee"
            firstPercentage={50}
            secondPercentage={100}
          />

          <Bar
            title="Stakeholders"
            firstPercentage={50}
            secondPercentage={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Employee;
