import React from 'react';
import { FaApple, FaAndroid } from 'react-icons/fa'; // Icons for iOS and Android
import { download } from "../assets/export.js";
import { qrcode } from "../assets/export.js"; // Make sure the path is correct
import { DiAndroid } from "react-icons/di";



const DownloadSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Side: Text and Stats */}
        <div className="lg:w-1/3  lg:text-left sm:text-left lg:mr-12">
          <h2 className="text-4xl font-semibold mb-4">
            Download Our  <span className='text-white'>----</span>   <span className="text-[#64B5AC]">  Fitness App</span> Today!
          </h2>
          <p className="text-gray-500 mb-6 text-[14px] sm:text-left">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
          </p>  
          <p className="text-gray-500 mb-6 text-[14px] sm:text-left">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
            <div className="text-center">
              <p className="text-2xl font-semibold text-[#64B5AC] text-left"> 5 Million+</p> 
              <p className="text-gray-500 text-[12px] text-left">Worldwide Active Users</p>
            </div>
            <span className='text-[#C2C2C2] mt-2'> │ </span>

            <div className="text-center">
              <p className="text-2xl font-semibold text-[#64B5AC] text-left">1250+</p>
              <p className="text-gray-500 text-[12px] text-left">Diet Plans</p>
            </div>
            <span className='text-[#C2C2C2] mt-2'> │ </span>

            <div className="text-center">
              <p className="text-2xl font-semibold text-[#64B5AC] text-left">750+</p>
              <p className="text-gray-500 text-[12px] text-left">Workouts</p>
            </div>
          </div>
          
        </div>

        {/* Center: Phone Mockup */}
        <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <img 
            src={download} 
            alt="Mobile App" 
            className="w-full max-w-xs"
          />
        </div>

        {/* Right Side: Download Buttons */}
        <div className="lg:w-1/3 flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* iOS Download */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2 mr-6">
              <FaApple className="text-4xl text-gray-400 mr-2" />
              <div className="text-left">
                <p className="text-gray-800 font-semibold">For iOS</p>
                <p className="text-gray-500 text-sm">iOS 15.6 +</p>
              </div>
            </div>
            <button className="bg-[#0075FF] text-[15px] text-white px-6 py-3 mt-2 rounded-full shadow-md">
              Download App
            </button>
            <div className="mt-4">
              <img src={qrcode} alt="QR Code" />
            </div>
          </div>

          {/* Android Download */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <DiAndroid className="text-4xl text-[#3DDC84] mr-2" />
              <div className="text-left">
                <p className="text-gray-800 font-semibold">For Android</p>
                <p className="text-gray-500 text-sm">Android 8.6 +</p>
              </div>
            </div>
            <button className="bg-[#0075FF] text-[15px] text-white px-6 py-3 mt-2 rounded-full shadow-md">
              Download App
            </button>
            <div className="mt-4">
              <img src={qrcode} alt="QR Code" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
