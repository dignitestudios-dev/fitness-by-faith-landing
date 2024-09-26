import React from 'react';
import { About } from "../assets/export.js";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-4 py-10 lg:px-20">
      {/* Phone mockup section */}
      <div className="relative overflow-hidden mb-8 lg:mb-0">
        {/* Single Phone Mockup */}
        <img 
          src={About} 
          alt="Phone"
          className="w-[300px] h-auto sm:w-[400px] lg:h-[483px] lg:w-[602px]"
        />
      </div>

      {/* About Us section */}
      <div className="lg:w-1/3 text-center lg:text-left lg:ml-20">
        <h2 className="text-xl sm:text-3xl lg:text-[50px] font-bold mb-4">
          <span className="text-teal-500"> - </span> About us
        </h2>
        <p className="text-[#757474] text-[10px] sm:text-[12px] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-[#757474] text-[10px] sm:text-[12px] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-[#757474] text-[10px] sm:text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
