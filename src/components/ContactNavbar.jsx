import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from "../assets/export.js"; // Ensure the path is correct

const ContactNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scrolling to sections on the homepage
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (window.location.pathname === "/") {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate("/");
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Adjust timing if needed
    }
    setIsMobileMenuOpen(false); // Close the mobile menu after selecting an option
  };

  return (
    <nav className="absolute top-0 left-0 w-full py-4 px-6 flex justify-between items-center z-20 bg-black">
      {/* Logo */}
      <div className="text-white text-2xl font-bold lg:pl-8">
        <img src={Logo} alt="Logo" className="h-12 cursor-pointer" onClick={() => navigate("/")} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-20 text-white text-lg lg:pr-8">
        <li
          className="cursor-pointer hover:text-teal-400"
          onClick={() => handleScrollToSection('home')}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:text-teal-400"
          onClick={() => handleScrollToSection('features')}
        >
          Features
        </li>
        <li
          className="cursor-pointer hover:text-teal-400"
          onClick={() => handleScrollToSection('about-us')}
        >
          About Us
        </li>
        <li
          className="cursor-pointer hover:text-teal-400"
          onClick={() => handleScrollToSection('testimonials')}
        >
          Testimonials
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-teal-500 text-white flex flex-col items-center space-y-4 py-4 md:hidden rounded-b-lg shadow-lg">
          <span
            className="hover:text-teal-300 cursor-pointer"
            onClick={() => handleScrollToSection('home')}
          >
            Home
          </span>
          <span
            className="hover:text-teal-300 cursor-pointer"
            onClick={() => handleScrollToSection('features')}
          >
            Features
          </span>
          <span
            className="hover:text-teal-300 cursor-pointer"
            onClick={() => handleScrollToSection('about-us')}
          >
            About Us
          </span>
          <span
            className="hover:text-teal-300 cursor-pointer"
            onClick={() => handleScrollToSection('testimonials')}
          >
            Testimonials
          </span>
        </div>
      )}
    </nav>
  );
};

export default ContactNavbar;
