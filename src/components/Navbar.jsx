import React, { useState, useEffect } from 'react';
import { Logo } from "../assets/export.js"; // Make sure the path is correct

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false); // Close mobile menu on click
  };

  // Track which section is in view using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'features', 'about-us', 'testimonials'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full py-4 px-6 flex justify-between items-center z-20 bg-transparent">
      {/* Logo */}
      <div className="text-white text-2xl font-bold lg:pl-8">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-20 text-white text-lg lg:pr-8">
        <li
          className={`cursor-pointer ${
            activeSection === 'home' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => handleScrollToSection('home')}
        >
          Home
        </li>
        <li
          className={`cursor-pointer ${
            activeSection === 'features' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => handleScrollToSection('features')}
        >
          Features
        </li>
        <li
          className={`cursor-pointer ${
            activeSection === 'about-us' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => handleScrollToSection('about-us')}
        >
          About Us
        </li>
        <li
          className={`cursor-pointer ${
            activeSection === 'testimonials' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => handleScrollToSection('testimonials')}
        >
          Testimonials
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="bg-teal-500 bg-opacity-10 rounded-sm p-2 text-white text-3xl transition duration-300 hover:bg-teal-600"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu (Dropdown or Overlay) */}
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

export default Navbar;
