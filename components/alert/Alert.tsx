import { ArrowRightSvg } from "@/svg/navbar/heroSvg";
import React from "react";

const Alert = () => {
  return (
    <a
      href="#"
      className="mb-7 inline-flex items-center justify-between gap-2 rounded-full bg-successlight  px-2 py-1 text-sm text-gray-700  dark:text-white "
      role="alert"
    >
      <span className="mr-3 rounded-full bg-successgreen px-4 py-1.5 text-xs font-[500] text-white">New</span>{" "}
      <span className="text-sm font-medium text-successgreen">Flowbite is out! See what new</span>
      <ArrowRightSvg />
    </a>
  );
};

export default Alert;
