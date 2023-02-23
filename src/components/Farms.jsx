
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
    },
    {
      id: 2,
   
      name: "Farm 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Radish !",
      badgeClass: "text-lime-500",
      picture: P2,
    },
    {
      id: 3,
  
      name: "Farm 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Cucumbar !",
      badgeClass: "text-purple-500",
      picture: P3,
    },
    {
      id: 4,
   
      name: "Farm 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Carrot !",
      badgeClass: "text-purple-500",
      picture: P4,
    },
    {
      id: 5,

      name: "Farm 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Pumpkin !",
      badgeClass: "text-purple-500",
      picture: P6,
    },
    {
      id: 6,
 
      name: "Farm 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Cabbage !",
      badgeClass: "text-purple-500",
      picture: P7,
    },
  ]

  return (


    <div className="relative w-full mx-auto bg-white">
      <Nav />


      <div className="w-full max-w-2xl px-4 py-8 mx-auto mt-5 md:max-w-none">

        {/* :TITLE */}
        <div className="mx-auto ml-6 ">
          <h2 className="text-xl font-bold tracking-normal text-gray-700 uppercase md:text-3xl font-oswald ">Farms </h2>
        </div>

      


        {/* :PRODUCT SUGGESTION */}
        <div className="grid grid-cols-1 mt-20 sm:grid-cols-2">

          

          {products.map((product, index) => (
            <a key={product.id} className={`col-span-1 group relative py-1 mb-6 pl-4 sm:pl-8 pr-4 mr-4 bg-white`}>
              {/* ::Details */}
              <div className="relative z-10 flex flex-col items-start space-y-1">
                {/* :::badges */}
                <span className={`text-sm ${product.badgeClass} font-bold uppercase tracking-wide`}>{product.badge}</span>
                {/* :::name */}
                <h3 className="text-base font-semibold text-gray-500 lg:text-lg">{product.name}</h3>
                {/* :::description */}
                <p className="hidden text-xs text-gray-500 md:block lg:w-2/3">{product.description}</p>
                {/* :::shop now button */}
                <span className="inline-flex items-center pt-5 text-sm font-semibold text-gray-700 group-hover:text-black">
                  <Modal1/>
                </span>
              </div>
              {/* ::Picture */}
              <img src={product.picture} alt="" className="absolute -top-2 md:right-10 right-0 md:h-[23vh] md:max-lg:h-[20vh] max-h-[20vh] md:max-lg:right-0 md:w-[15vw] w-[40vw] h-[17vh] opacity-100  lg:opacity-100 group-hover:scale-110" />   
              <div className='border-2 w-full ml-5 mt-10'/>
            </a>
          ))
          }
        </div>


      </div>
      <Footer/>
    </div>
  )
}

export default Farms
