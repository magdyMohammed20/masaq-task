"use client";

import { useRef, useState } from "react";
import styles from "./nav.module.css";
import { LogoSvg } from "@/svg/navbar/navbarSvg";

const Navbar = () => {
  const [links] = useState(["Product", "Pages", "integrations", "Pricing"]);
  const [toggle, setToggle] = useState(false);
  const headerRef = useRef();
  const stylesAll = `${styles.link}  dark:text-gray-400  dark:hover:bg-gray-100 hover:bg-slate-900 dark:md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-blue-500 dark:hover:bg-slate-800 dark:hover:text-white hover:text-white`;
  const handleOpenSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <header className={`${styles.headerStyle} dark:bg-mobColor bg-white`}>
      <div className={styles.navContainer}>
        <div>
          <a
            href="#"
            className={`${styles.logo} text-slate-900 dark:text-white`}
          >
            <LogoSvg />
            <span className="text-[20px]">FinBiz</span>
          </a>
        </div>

        <nav className="flex items-center  gap-x-3">
          <ul className={styles.ulList}>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={`/${link}`}
                  className={`${styles.navLink} text-slate-900 hover:text-slate-900 dark:text-gray-200 dark:hover:text-white`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:hidden">
            <button
              className="group relative"
              onClick={() => handleOpenSidebar()}
              data-collapse-toggle="navbar-default"
              type="button"
            >
              <div className="relative  flex h-[45px] w-[45px] transform items-center justify-center overflow-hidden rounded-full bg-[#263353] shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-2 group-focus:ring-2">
                <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
                  <div
                    className={`h-[2px] w-7 origin-left rotate-[42deg] transform bg-white
                      transition-all
                     duration-300 `}
                  ></div>
                  <div
                    className={`h-[2px] w-1/2 transform rounded bg-white transition-all duration-300 ${
                      toggle && "-translate-x-10"
                    }`}
                  ></div>
                  <div
                    className={`h-[2px] w-7 origin-left rotate-[42deg] transform bg-white 
                    
                   transition-all

                    duration-300`}
                  ></div>
                </div>
              </div>
            </button>

            <div
              className={`dark:bg-sideNav fixed -left-full bottom-0 top-0 block h-screen w-[300px] bg-white transition-all duration-300 ease-in-out md:hidden`}
              id="navbar-default"
            >
              <ul className="flex flex-col font-medium md:mt-0 md:flex-row md:space-x-8  md:p-0  ">
                <li>
                  <a
                    href="#"
                    className={`
                      "font-bold"
                     block bg-indigo-600 px-3 py-4 text-white  md:bg-transparent md:p-0 md:text-blue-700 dark:text-gray-300 md:dark:text-blue-500`}
                    aria-current="page"
                  >
                    side_nav.Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${stylesAll}`}
                  >
                    side_nav.About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${stylesAll}`}
                  >
                    side_nav.Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`${stylesAll}`}
                  >
                    side_nav.Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={` ${stylesAll}`}
                  >
                    side_nav.Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <button className={`${styles.navBtn} px-5`}>Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;
