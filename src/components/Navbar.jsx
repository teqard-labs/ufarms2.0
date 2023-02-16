import Logo from '../assets/logo.jpg'
import React, { useState } from 'react'
import NavItem from './dependables/NavItem'
import Burger from './dependables/Burger'
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full mb-4 text-black bg-white body-font">

      {/* :DESKTOP MENU */}
      <div className="container relative flex items-center justify-between px-5 py-2 mx-auto md:justify-center sm:py-7">
        {/* ::Burger icon standard */}
        <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
        {/* ::Navbar left part */}
        <nav className="flex-wrap items-center hidden text-base tracking-wide md:flex md:justify-start">
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/products">Products</Link></NavItem>
          <NavItem><Link to="/farms">Farms</Link></NavItem>
        </nav>
        {/* ::Site logo and Name */}
        <Link to="/" className="flex items-center justify-center flex-shrink-0 ml-4 sm:mr-12 md:mb-0">
          <img src={Logo} className="w-18 h-14" />
         
        </Link>
        {/* ::Navbar rigth part */}
        <nav className="flex-wrap items-center hidden text-base tracking-wide md:flex md:justify-start">
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/services ">Services</Link></NavItem>
          <NavItem><Link to="/contacts">Contact</Link></NavItem>
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
