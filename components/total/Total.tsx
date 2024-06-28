import React from "react";

interface Props {
  totalBalance: string;
  totalIncome: string;
  totalExpense: string;
  incomePercentage: number;
  expensePercentage: number;
}

const Total: React.FC<Props> = ({ totalBalance, totalIncome, totalExpense, incomePercentage, expensePercentage }) => {
  return (
    <div className="flex flex-col rounded-[20px] border border-secondarklight bg-cardbg p-6">
      <div className="flex  flex-col gap-6">
        <div>
          <p className="text-left text-[20px] text-textcolor">Total Balance</p>
          <div className="mt-3 text-left text-[36px] font-semibold text-white">${totalBalance}</div>
          <button className="mt-3 h-10 w-full rounded-[8px] bg-white font-[500] text-herobg">Transfer</button>
        </div>
        <div className="border-y border-secondarklight py-4">
          <div className="flex items-center justify-between">
            <p className="text-left text-[20px] text-textcolor">Total Income</p>
            <p className="text-textcolor">{incomePercentage}%</p>
          </div>
          <div className="mt-3 text-left text-[36px] font-semibold text-white">${totalIncome}</div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-left text-[20px] text-textcolor">Total Expense</p>
            <p className="text-textcolor">{expensePercentage}%</p>
          </div>
          <div className="mt-3 text-left text-[36px] font-semibold text-white">${totalExpense}</div>
        </div>
      </div>
    </div>
  );
};

export default Total;
