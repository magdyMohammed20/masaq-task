import React from "react";

interface Props {
  title: string;
  firstPercentage: number;
  secondPercentage: number;
}
const Bar: React.FC<Props> = ({ title, firstPercentage, secondPercentage }) => {
  return (
    <div>
      <div className="text-left text-[20px] text-textcolor">{title}</div>

      <div className="mt-4 flex flex-col gap-4">
        <div>
          <div
            className="h-[14px] rounded-[7px] bg-herobg"
            style={{ width: `${firstPercentage}%` }}
          ></div>
        </div>

        <div>
          <div
            className="h-[14px] rounded-[7px] bg-darklight3"
            style={{ width: `${secondPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
