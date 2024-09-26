import React from 'react';
import { FooterLogo } from "../assets/export.js"; // Make sure the path is correct
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Appstore } from "../assets/export.js"; // Make sure the path is correct
import { Playstore } from "../assets/export.js"; // Make sure the path is correct

const Footer = () => {
  return (
    <footer className="text-white relative">
      {/* Download the App Section */}
      <div className="relative z-10 lg:-mb-20">
        <div className="container mx-auto text-center">
          <div className="bg-[#64B5AC] p-10 rounded-2xl max-w-3xl mx-auto shadow-lg lg:w-[874px] lg:h-[284px]">
            <h2 className="text-xl font-medium">
              Unlock your Fitness Potential: Your Workout Hub
            </h2>
            <h3 className="text-3xl font-medium mt-2 text-black">Download the App Now</h3>
            <p className="text-[14px] mt-4 max-w-md mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="#">
                <img
                src={Playstore}
                  alt="Google Play"
                  className="h-12"
                />
              </a>
              <a href="#">
                <img
                  src={Appstore}
                  alt="App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black py-16 relative mt-10 p-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
          {/* Left Section - Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-white text-2xl font-bold">
              <img src={FooterLogo} alt="Logo" />
            </div>
          </div>

          {/* Middle Section - Social Media Links */}
          <div className="my-5 md:my-0 flex flex-col items-center lg:ml-36">
            <h3 className="font-medium mb-3 lg:text-[24px] mt-4">Find us on Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-lg hover:text-teal-400 border border-white rounded-full p-3">
                <FaFacebookF />
              </a>
              <a href="#" className="text-lg hover:text-teal-400 border border-white rounded-full p-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-lg hover:text-teal-400 border border-white rounded-full p-3">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <p className="lg:text-[20px]">We’re always happy to help.</p>
            <p className="mt-2 text-[14px] font-thin">info@fitnessbyfaith.com</p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-600 mt-6 pt-10 text-sm">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
            {/* Left Section - Copyright */}
            <p className="mt-3 text-sm md:order-1 order-2 text-center md:text-left">
              Copyright © 2024 FitnessbyFaith. All rights reserved.
            </p>

            {/* Right Section - Bottom Links */}
            <div className="flex space-x-3 md:order-2 order-1">
              <a href="#" className="hover:text-teal-400">Terms of Services</a>
              <span> | </span>
              <a href="#" className="hover:text-teal-400">Privacy Policy</a>
              <span> | </span>
              <a href="#" className="hover:text-teal-400">FAQs</a>
              <span> | </span>
              <a href="/contact-us" className="hover:text-teal-400">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
