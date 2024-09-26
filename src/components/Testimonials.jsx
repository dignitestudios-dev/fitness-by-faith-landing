import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Albert Laangster',
    role: 'Satisfied Trainee',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 4,
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Doe',
    role: 'Happy Client',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 5,
    testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    name: 'John Smith',
    role: 'Satisfied Customer',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 3,
    testimonial: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    name: 'Emily Clark',
    role: 'Pleased User',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 4,
    testimonial: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'George Brown',
    role: 'Happy User',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    rating: 5,
    testimonial: 'Nulla facilisi. Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec.',
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');

  const handleTestimonialClick = (testimonial, position) => {
    if (testimonial.name !== currentTestimonial.name) {
      setSlideDirection(position === 'left' ? 'left' : 'right');
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentTestimonial(testimonial);
        setIsTransitioning(false);
      }, 700); 
    }
  };

  // Filter out the current testimonial from the list of small circle testimonials
  const otherTestimonials = testimonials.filter(
    (testimonial) => testimonial.name !== currentTestimonial.name
  );

  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <style>
        {`
          .transition-transform {
            transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
          }
          .translate-x-full {
            transform: translateX(100%);
          }
          .translate-x-0 {
            transform: translateX(0);
          }
          .translate-x-negative-full {
            transform: translateX(-100%);
          }
          .scale-up {
            transform: scale(1.1);
          }
        `}
      </style>

      <h2 className="text-2xl sm:text-3xl lg:text-[55px] font-bold mb-2 text-black">
        <span className="text-[#64B5AC]">- </span>Testimonials
      </h2>
      <p className="text-black mb-10 font-medium text-lg sm:text-[24px] ml-4 sm:ml-6">
        Our Featured{' '}
        <span className="text-[#64B5AC] ml-1">Testimonials</span>
      </p>

      {/* Updated Layout with 5 circles */}
      <div className="flex justify-center items-center gap-4 sm:gap-16 mb-10">
        {/* Left Side Small Images */}
        <div className="flex items-center gap-4 sm:gap-6">
          {otherTestimonials.slice(0, 2).map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.name}
              onClick={() => handleTestimonialClick(testimonial, 'left')}
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover cursor-pointer transition-transform duration-700 ease-in-out 
              ${isTransitioning ? (slideDirection === 'left' ? 'translate-x-negative-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'}
              ${currentTestimonial.name === testimonial.name ? 'border-1 border-teal-500 scale-up' : 'border-2 border-transparent'}`}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ))}
        </div>

        {/* Big Main Circle */}
        <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 flex-shrink-0">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className={`absolute w-full h-full rounded-full object-cover border-4 border-teal-500 transition-transform duration-700 ease-in-out 
            ${isTransitioning ? (slideDirection === 'left' ? 'translate-x-negative-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'}`}
          />
        </div>

        {/* Right Side Small Images */}
        <div className="flex items-center gap-4 sm:gap-6">
          {otherTestimonials.slice(2, 4).map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.name}
              onClick={() => handleTestimonialClick(testimonial, 'right')}
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover cursor-pointer transition-transform duration-700 ease-in-out 
              ${isTransitioning ? (slideDirection === 'left' ? 'translate-x-negative-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'}
              ${currentTestimonial.name === testimonial.name ? 'border-1 border-teal-500 scale-up' : 'border-2 border-transparent'}`}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <div className={`flex flex-col items-center text-center transition-transform duration-700 ease-in-out ${isTransitioning ? (slideDirection === 'left' ? 'translate-x-full opacity-0' : 'translate-x-negative-full opacity-0') : 'translate-x-0 opacity-100'}`}>
        <h3 className="text-base sm:text-lg font-bold text-black">{currentTestimonial.name}</h3>
        <p className="text-sm text-gray-500">{currentTestimonial.role}</p>

        <div className="flex mt-2 mb-4">
          {Array(currentTestimonial.rating)
            .fill()
            .map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          {Array(5 - currentTestimonial.rating)
            .fill()
            .map((_, i) => (
              <span key={i} className="text-gray-300">★</span>
            ))}
        </div>

        <p className="text-gray-600 max-w-xs sm:max-w-lg italic leading-relaxed relative transition-opacity duration-700 ease-in-out px-4 sm:px-0">
          <span className="absolute left-0 -top-12 text-[100px] sm:text-[120px] text-gray-300 opacity-40 leading-none">“</span>
          {currentTestimonial.testimonial}
          <span className="absolute right-0 -bottom-12 text-[100px] sm:text-[120px] text-gray-300 opacity-40 leading-none">”</span>
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
