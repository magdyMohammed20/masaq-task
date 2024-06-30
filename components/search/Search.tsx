import React from "react";

const Search = () => {
  return (
    <div className="my-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
      <form className="w-1/2">
        <div className="relative  flex items-center rounded-full bg-secondarklight">
          <input
            type="search"
            id="default-search"
            className="block w-full   border-gray-300  bg-transparent  p-4 pr-0  text-sm text-gray-900 placeholder-gray7  focus:outline-none dark:text-white "
            placeholder="Enter your email adress"
            required
          />
          <button
            type="submit"
            className="absolute bottom-0 right-0  top-0  w-[160px] rounded-full bg-gray6 px-4 py-2 font-[700]   text-slate-950   focus:outline-none focus:ring-4 "
          >
            Book a Demo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
