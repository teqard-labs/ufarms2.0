
import React, { useState } from 'react'
import NavItem from './dependables/NavItem'
import Burger from './dependables/Burger'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full mb-4 text-gray-500 bg-gray-200 body-font">

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
        <a href="#link" className="flex items-center justify-center flex-shrink-0 ml-4 font-medium text-gray-900 sm:mr-12 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 p-2 text-white rounded-full bg-gradient-to-br from-white to-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="ml-3 text-xl antialiased font-semibold text-gray-500">Ufarms.io</span>
        </a>
        {/* ::Navbar rigth part */}
        <nav className="flex-wrap items-center hidden text-base tracking-wide md:flex md:justify-start">
          <NavItem link="#link">About</NavItem>
          <NavItem link="#link">Contact</NavItem>
        </nav>
        
      </div>

      {/* :MOBILE MENU */}
      { isOpen &&
        <div className="flex flex-col w-full px-3 py-4 text-base font-semibold text-center uppercase bg-gray-200 md:hidden">
          <a href="#link" className="block px-3 py-2 text-gray-500 rounded-md hover:text-white hover:bg-gray-500">Solutions</a>
          <a href="#link" className="block px-3 py-2 text-gray-500 rounded-md hover:text-white hover:bg-gray-500">Prices</a>
          <a href="#link" className="block px-3 py-2 text-gray-500 rounded-md hover:text-white hover:bg-gray-500">About</a>
          <a href="#link" className="block px-3 py-2 text-gray-500 rounded-md hover:text-white hover:bg-gray-500">Contact</a>
        </div>
      }

    </header>
  )
}

export default Navbar
