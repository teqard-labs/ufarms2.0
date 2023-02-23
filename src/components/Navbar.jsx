import Logo from '../assets/logo.jpg'
import React, { useState,useEffect } from 'react'
import NavItem from './dependables/NavItem'
import Burger from './dependables/Burger'
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaInfo, FaShoppingCart, FaPhone, FaHandsHelping,FaTractor } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
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
    <header className={`w-full mb-4 text-black bg-white body-font ${scrollPos > 0 ? "fixed top-0 left-0 z-50 shadow-lg" : ""}`}>

      {/* :DESKTOP MENU */}
      <div className="container relative flex items-center justify-between px-5 py-2 mx-auto md:justify-center sm:py-7">
        {/* ::Burger icon standard */}
        <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
        {/* ::Navbar left part */}
        <nav className="flex-wrap items-center hidden text-base tracking-wide md:flex md:justify-start">
        <Link to="/"><NavItem className='flex flex-col'><FaHome size={20} className='mt-1 ml-[0.7vw]' />Home</NavItem></Link>
        <Link to="/about"><NavItem className='flex flex-col'><FaInfo size={20} className='mt-1 ml-[0.7vw]' />About</NavItem></Link>
        <Link to="/farms"><NavItem className='flex flex-col'><FaTractor size={20} className='mt-1 ml-[0.7vw]' />Farms</NavItem></Link>
        </nav>
        {/* ::Site logo and Name */}
        <Link to="/" className="flex items-center justify-center flex-shrink-0 ml-4 sm:mr-12 md:mb-0">
          <img src={Logo} className="w-18 h-14" alt=''/>
         
        </Link>
        {/* ::Navbar rigth part */}
        <nav className="flex-wrap items-center hidden text-base tracking-wide md:flex md:justify-start">
        <Link to="/products"><NavItem className='flex flex-col'><FaShoppingCart size={20} className='mt-1 ml-[1.2vw]' />Products</NavItem></Link>
        <Link to="/services "><NavItem className='flex flex-col'><FaHandsHelping size={20} className='mt-1 ml-[1.2vw]' />Services</NavItem></Link>
        <Link to="/contacts"> <NavItem className='flex flex-col'><FaPhone size={20} className='mt-1 ml-[1.2vw]' />Contact</NavItem></Link>
        </nav>
        <Outlet/>
      </div>
      
      {/* :MOBILE MENU */}
      { isOpen &&
        <div className="flex flex-col w-full px-3 py-4 text-base font-semibold text-center uppercase bg-white md:hidden">
          <Link to="/" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Home</Link>
          <Link to="/products" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Products</Link>
          <Link to="/about" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">About</Link>
          <Link to="/farms" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Farms</Link>
          <Link to="/services " className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Services</Link>
          <Link to="/contacts" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Contact</Link>
        </div>
      }

    </header>
  )
}

export default Navbar
