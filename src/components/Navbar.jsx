import Logo from '../assets/logo.jpg';
import React, { useState, useEffect } from 'react';
import NavItem from './dependables/NavItem';
import Burger from './dependables/Burger';
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaInfo, FaPhone, FaHandsHelping, FaTractor, FaImages, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full text-black bg-white body-font ${scrollPos > 0 ? "fixed top-0 left-0 md:h-[7vw] z-50 shadow-lg" : ""}`}>
      {/* DESKTOP MENU */}
      <div className="container relative flex items-center justify-between py-2 mx-auto md:justify-center sm:pt-7">
        {/* Burger icon standard */}
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* Navbar left part */}
        <nav className="flex items-center justify-center space-x-8 md:space-x-16 md:flex-row md:justify-start">
          <Link to="/" >
            <NavItem>
              <FaHome size={20} className='mt-1' />
              Home
            </NavItem>
          </Link>
          <Link to="/about">
            <NavItem>
              <FaInfo size={20} className='mt-1' />
              About
            </NavItem>
          </Link>
          <Link to="/farms">
            <NavItem>
              <FaTractor size={20} className='mt-1' />
              Farms
            </NavItem>
          </Link>
          <Link to="/gallery">
            <NavItem>
              <FaImages size={22} className='mt-1' />
              Gallery
            </NavItem>
          </Link>
        </nav>
        {/* Site logo and Name */}
        <Link to="/" className="flex items-center justify-center flex-shrink-0 ml-4 sm:mr-12 md:mb-0">
          <img src={Logo} className="w-18 h-14" alt='' />
        </Link>
        {/* Navbar right part */}
        <nav className="flex items-center justify-center space-x-8 md:space-x-16 md:flex-row md:justify-start">
          <Link to="/news">
            <NavItem>
              <FaImages size={22} className='mt-1' />
              News
            </NavItem>
          </Link>
          <Link to="/download" >
            <NavItem>
              <FaDownload size={20} className='mt-1' />
              Download
            </NavItem>
          </Link>
          <Link to="/services">
            <NavItem>
              <FaHandsHelping size={20} className='mt-1' />
              Services
            </NavItem>
          </Link>
          <Link to="/contacts">
            <NavItem>
              <FaPhone size={20} className='mt-1' />
              Contact
            </NavItem>
          </Link>
        </nav>
        <Outlet />
      </div>

      {/* MOBILE MENU */}
      {isOpen &&
        <div className="flex flex-col w-full px-3 py-4 text-base font-semibold text-center uppercase bg-white md:hidden">
          <Link to="/" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Home</Link>
          <Link to="/about" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">About</Link>
          <Link to="/farms" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Farms</Link>
          <Link to="/download" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Download</Link>
          <Link to="/services" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Services</Link>
          <Link to="/contacts" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Contact</Link>
          <Link to="/gallery" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Gallery</Link>
        </div>
      }
    </header>
  );
};

export default Navbar;
