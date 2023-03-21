
import React from 'react'

const NavItem = ({ link, children }) => {
  return (
    <a href={link} className="relative inline-block mr-8 antialiased leading-10 tracking-wide text-center text-black no-underline outline-none group focus:outline-none" style={{ perspective: "1000px" }}>
      {/* span::before */}
      <span className="absolute top-[60%] left-0 w-full h-full py-1 px-3.5 bg-white text-white transition-all duration-200 transform transform-before-span-ni2 group-hover:bg-[#028A0F]  group-hover:transform-h-before-span-ni2" aria-hidden="true">{children}</span>     
      <span className="relative inline-block w-full h-full py-0 px-3.5 bg-white transition-all duration-200 transform transform-span-ni2 group-hover:transform-h-span-ni2">{children}</span>
      
    </a>
  )
}

export default NavItem
