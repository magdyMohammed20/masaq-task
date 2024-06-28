import React from "react";

interface Props {
  icon: any;
  title: string;
  price: string;
  increase: number;
  increaseColor: string;
}

const Card: React.FC<Props> = ({ title, icon, price, increase, increaseColor }) => {
  return (
    <div className="flex flex-col rounded-[20px] border border-secondarklight bg-cardbg p-6">
      <div className="flex  justify-between gap-6">
        <div className="flex flex-col-reverse  justify-between gap-5">
          <div className="text-left text-[20px] text-textcolor">{title}</div>
          <div className="order-first  text-[36px] font-semibold tracking-tight text-white">${price}</div>
        </div>
        <div className="flex flex-col  justify-between gap-5">
          <div className={`${increaseColor} font-[700]`}>+{increase}</div>
          <div className="h-[38px] w-[62px]">{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
