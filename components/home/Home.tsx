import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./hero/Hero";
import Tabs from "../tabs/Tabs";
import SimpleAnalytics from "../analytics/SimpleAnalytics";
import Analytics from "../analytics/Analytics";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-dark py-4">
        <div className="mx-auto w-1/2 ">
          <div className=" bg-custom-radial ">
            <Tabs />
          </div>
        </div>

        <div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            <Analytics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
