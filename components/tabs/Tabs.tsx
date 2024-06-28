"use client";

import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("HTML");

  const tabs = ["HTML", "React", "Vue", "Angular", "Svelte"];

  return (
    <div className=" mx-auto w-1/2 rounded-full border border-gray7 bg-custom-gradient px-2 py-[6px]">
      <div className="relative right-0">
        <ul
          className="bg-blue-gray-50/60 relative flex list-none flex-wrap rounded-lg p-1"
          role="list"
        >
          {tabs.map((tab) => (
            <li
              key={tab}
              className="z-30 flex-auto text-center"
            >
              <a
                onClick={() => setActiveTab(tab)}
                className={`z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-full  border-0 py-3 transition-all ease-in-out ${
                  activeTab === tab ? " bg-white" : "bg-inherit text-slate-700"
                }`}
                role="tab"
                aria-selected={activeTab === tab}
              >
                <span className={`ml-1 font-[500] ${activeTab == tab ? "text-slate-950" : "text-white"}`}>{tab}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
