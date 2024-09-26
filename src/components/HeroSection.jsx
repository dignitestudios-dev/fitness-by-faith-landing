import React from 'react';
import Navbar from './Navbar';
import { background } from "../assets/export.js"; // Make sure the path is correct
import { Appstore } from "../assets/export.js"; // Make sure the path is correct
import { Playstore } from "../assets/export.js"; // Make sure the path is correct

const HeroSection = () => {
  return (
    <div className="text-white h-screen flex items-center justify-center relative">
      {/* Background image */}
      <div className="absolute inset-0 -mt-2">
        <img
          src={background}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl px-4 sm:px-6">
        <p className="text-white lg:text-[14px] sm:text-sm mb-4 sm:mb-8">
          - The Best Fitness & Workout App -
        </p>
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-bold leading-tight md:whitespace-nowrap mb-4">
          YOUR&nbsp;ALL-IN-ONE
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-[68px] font-bold text-teal-400 mb-4 sm:mb-6  sm:-mt-6">
          FITNESS APP
        </h2>
        <p className="text-xs sm:text-sm md:text-[14px] text-gray-300 mb-4 sm:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
        </p>
        <div className="mt-4 sm:mt-6 flex justify-center space-x-4">
          <a href="#">
            <img
              src={Playstore}
              alt="Google Play"
              className="h-12 sm:h-16"
            />
          </a>
          <a href="#">
            <img
              src={Appstore}
              alt="App Store"
              className="h-12 sm:h-16"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
