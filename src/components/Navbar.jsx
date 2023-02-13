import Logo from '../assets/logo.jpg'
import React, { useState } from 'react'
import NavItem from './dependables/NavItem'
import Burger from './dependables/Burger'

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
          <NavItem link="#link">Services</NavItem>
          <NavItem link="#link">Farms</NavItem>
        </nav>
        {/* ::Site logo and Name */}
        <a href="#link" className="flex items-center justify-center flex-shrink-0 ml-4 sm:mr-12 md:mb-0">
          <img src={Logo} className="w-18 h-14" />
            
        </a>
        {/* ::Navbar rigth part */}
        <nav className="flex-wrap items-center hidden text-base tracking-wide md:flex md:justify-start">
          <NavItem link="#link">About</NavItem>
          <NavItem link="#link">Contact</NavItem>
        </nav>
        
      </div>

      {/* :MOBILE MENU */}
      { isOpen &&
        <div className="flex flex-col w-full px-3 py-4 text-base font-semibold text-center uppercase bg-white md:hidden">
          <a href="#link" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">About</a>
          <a href="#link" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Farms</a>
          <a href="#link" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Services</a>
          <a href="#link" className="block px-3 py-2 text-black rounded-md hover:text-white hover:bg-[#028A0F]">Contact</a>
        </div>
      }

    </header>
  )
}

export default Navbar
