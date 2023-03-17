
import React from 'react'
import Nav from './Navbar'
import Modal1 from './Modal'
import P1 from '../assets/1.jpeg'
import P2 from '../assets/2.jpg'
import P3 from '../assets/3.jpg'
import P4 from '../assets/4.jpg'
import P6 from '../assets/6.jpg'
import P7 from '../assets/7.jpeg'
import Footer from './Footer'


const Farms = () => {

  const products = [
    {
      id: 1,

      name: "Farm 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Tomato !",
      badgeClass: "text-orange-500",
      picture: P1,
      location: "Trivandrum, Kerala",
    },
    {
      id: 2,

      name: "Farm 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Radish !",
      badgeClass: "text-lime-500",
      picture: P2,
      location: "Trivandrum, Kerala",
    },
    {
      id: 3,

      name: "Farm 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Cucumbar !",
      badgeClass: "text-purple-500",
      picture: P3,
      location: "Trivandrum, Kerala",
    },
    {
      id: 4,

      name: "Farm 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Carrot !",
      badgeClass: "text-purple-500",
      picture: P4,
      location: "Trivandrum, Kerala",
    },
    {
      id: 5,

      name: "Farm 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Pumpkin !",
      badgeClass: "text-purple-500",
      picture: P6,
      location: "Trivandrum, Kerala",
    },
    {
      id: 6,

      name: "Farm 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Cabbage !",
      badgeClass: "text-purple-500",
      picture: P7,
      location: "Trivandrum, Kerala",
    },
  ]

  return (
    <>
      <Nav />
      <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 overflow-hidden">
        {products.map((product, index) => (
          <div className="text-black hover:scale-105 ">
            <div className="grid grid-cols-12 mx-4 my-4 bg-green-100 border-2 rounded-lg border-cyan-50  hover:bg-gradient-to-tr from-[#70cf7d] to-[#caf880]">
              <div className="justify-center hidden col-start-7 col-span-full lg:col-span-4 md:inline">
                <img src={product.picture} alt="" className=" rounded-full md:right-10 right-0 md:h-[35vh] md:max-lg:h-[20vh] md:max-lg:right-0 md:w-[40vw] w-[40vw] h-[17vh] opacity-100 scale-75 sm:left-0 sm:top-0" />
              </div>
              <div className="p-6 col-span-full row-span-full lg:col-span-8 lg:p-10 ">
                <div className='flex flex-col'>
                  <div className="justify-start hidden md:inline ">
                    <span className="py-1 text-lg rounded-full dark:bg-violet-400 dark:text-gray-900">{product.badge}</span>
                  </div>
                  <h1 className="hidden text-3xl font-semibold md:inline">{product.name}</h1>
                  <p className="hidden text-lg text-gray-500 md:block lg:w-2/3">{product.description}</p>
                  <div className='hidden md:inline'>
                  <Modal1 /></div>
                  <div className="items-center justify-between hidden pt-2 mt-2 md:inline">
                    <div className="flex space-x-2">
                      <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                        <g transform="translate(0 -1028.4)">
                          <path d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" fill="#e74c3c" transform="translate(0 1028.4)" />
                          <path d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" fill="#c0392b" transform="translate(0 1028.4)" />
                        </g>
                      </svg>
                      <span className="self-center text-sm">{product.location}</span>
                    </div>
                  </div>
                  {/* <span className="text-xs">3 min read</span> */}

                  <div className="flex flex-col items-center justify-center md:hidden">
                    <img src={product.picture} alt="" className=" w-[60vw] h-[30vh]  rounded-full items-center scale-[0.88]  md:hidden" />
                    <div className="flex justify-start">

                      <span className="py-1 text-lg rounded-full dark:bg-violet-400 dark:text-gray-900">{product.badge}</span>
                    </div>
                    <h1 className="text-3xl font-semibold">{product.name}</h1>
                    <p className="hidden text-lg text-gray-500 md:block lg:w-2/3">{product.description}</p>
                    <Modal1 />
                    <div className="flex items-center justify-between pt-2 mt-2">
                      <div className="flex space-x-2">
                        <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                          <g transform="translate(0 -1028.4)">
                            <path d="m12 0c-4.4183 2.3685e-15 -8 3.5817-8 8 0 1.421 0.3816 2.75 1.0312 3.906 0.1079 0.192 0.221 0.381 0.3438 0.563l6.625 11.531 6.625-11.531c0.102-0.151 0.19-0.311 0.281-0.469l0.063-0.094c0.649-1.156 1.031-2.485 1.031-3.906 0-4.4183-3.582-8-8-8zm0 4c2.209 0 4 1.7909 4 4 0 2.209-1.791 4-4 4-2.2091 0-4-1.791-4-4 0-2.2091 1.7909-4 4-4z" fill="#e74c3c" transform="translate(0 1028.4)" />
                            <path d="m12 3c-2.7614 0-5 2.2386-5 5 0 2.761 2.2386 5 5 5 2.761 0 5-2.239 5-5 0-2.7614-2.239-5-5-5zm0 2c1.657 0 3 1.3431 3 3s-1.343 3-3 3-3-1.3431-3-3 1.343-3 3-3z" fill="#c0392b" transform="translate(0 1028.4)" />
                          </g>
                        </svg>
                        <span className="self-center text-sm">{product.location}</span>
                      </div>
                    </div>
                    {/* <span className="text-xs">3 min read</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
      <Footer />
    </>
  )
}

export default Farms
