import React from 'react';
import { timeicon, usericon, speed, dollar, dollarwhite, usericonwhite, speediconwhite, timeiconwhite } from "../assets/export.js"; // Adjust path as needed

const features = [
  {
    title: 'Time Efficiency',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    iconDefault: timeicon,
    iconHover: timeiconwhite,
    alt: "Time Efficiency"
  },
  {
    title: 'Personalized Workouts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    iconDefault: usericon,
    iconHover: usericonwhite,
    alt: "Personalized Workouts"
  },
  {
    title: 'Cost Savings',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    iconDefault: dollar,
    iconHover: dollarwhite,
    alt: "Cost Savings"
  },
  {
    title: 'Fast And Accurate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    iconDefault: speed,
    iconHover: speediconwhite,
    alt: "Fast And Accurate"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="lg:text-[48px] font-bold text-black text-[25px]">
          <span className="text-[#64B5AC]"> - </span> Features of <span className="text-[#64B5AC]">Fitness App</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 text-left transition duration-300 ease-in-out hover:bg-[#64B5AC] hover:text-white group lg:w-[297px] lg:h-[260px] mx-auto rounded-2xl"
          >
            <div className="mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E7F3F2] transition-all duration-300 ease-in-out group-hover:bg-[#5CAAA3]">
                {/* Change icon on hover */}
                <img
                  src={feature.iconDefault}
                  alt={feature.alt}
                  className="w-12 h-12 group-hover:hidden"
                />
                <img
                  src={feature.iconHover}
                  alt={feature.alt}
                  className="w-12 h-12 hidden group-hover:block"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#64B5AC] group-hover:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-[13px] group-hover:text-white mt-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
