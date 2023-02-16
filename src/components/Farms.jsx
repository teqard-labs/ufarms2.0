
import React from 'react'
import Nav from './Navbar'
import Modal1 from './Modal'

const ProductSuggestion7 = () => {

  const products = [
    {
      id: 1,
      href: "#link",
      name: "Farm 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Tomato !",
      badgeClass: "text-orange-500",
      picture: "../assets/1.jpeg", 
    },
    {
      id: 2,
      href: "#link",
      name: "Farm 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Radish !",
      badgeClass: "text-lime-500",
      picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzDfCpeQgBLAlX1w2iNrr5Ll0bNWRcMYpYA&usqp=CAU",
    },
    {
      id: 3,
      href: "#link",
      name: "Farm 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Cucumbar !",
      badgeClass: "text-purple-500",
      picture: "https://c2.staticflickr.com/2/1779/42225728250_16df0bbcac_z.jpg ",
    },
    {
      id: 4,
      href: "#link",
      name: "Farm 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Carrot !",
      badgeClass: "text-purple-500",
      picture: "https://c2.staticflickr.com/2/1779/42225728250_16df0bbcac_z.jpg ",
    },
    {
      id: 5,
      href: "#link",
      name: "Farm 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Pumpkin !",
      badgeClass: "text-purple-500",
      picture: "https://c2.staticflickr.com/2/1779/42225728250_16df0bbcac_z.jpg ",
    },
    {
      id: 6,
      href: "#link",
      name: "Farm 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Cabbage !",
      badgeClass: "text-purple-500",
      picture: "https://c2.staticflickr.com/2/1779/42225728250_16df0bbcac_z.jpg ",
    },
  ]

  return (


    <div className="relative mx-auto w-full bg-white">
      <Nav />


      <div className="mx-auto max-w-sm sm:max-w-2xl md:max-w-none py-5 px-4 w-full">

        {/* :TITLE */}
        <div className="flex items-center justify-center">
          <span className="mr-3 w-40 h-0.5 bg-gray-400" />
          <h2 className="text-xl md:text-3xl text-gray-700 font-bold font-oswald uppercase tracking-wider whitespace-nowrap">Farms </h2>
          <span className="ml-3 w-40 h-0.5 bg-gray-400" />
        </div>

      


        {/* :PRODUCT SUGGESTION */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2">

          

          {products.map((product, index) => (
            <a key={product.id} className={`col-span-1 group relative py-3 pl-4 sm:pl-8 pr-4 ${index !== 0 && "border-t-2 sm:border-t-0 sm:border-l-2 border-gray-200"} bg-white overflow-hidden`}>
              {/* ::Details */}
              <div className="relative z-10 flex flex-col items-start space-y-1">
                {/* :::badges */}
                <span className={`text-sm ${product.badgeClass} font-bold uppercase tracking-wide`}>{product.badge}</span>
                {/* :::name */}
                <h3 className="text-base lg:text-lg text-gray-500 font-semibold">{product.name}</h3>
                {/* :::description */}
                <p className="hidden md:block lg:w-2/3 text-xs text-gray-500">{product.description}</p>
                {/* :::shop now button */}
                <span className="pt-5 inline-flex items-center text-sm text-gray-700 font-semibold group-hover:text-black group-hover:underline">
                  <Modal1/>
                </span>
              </div>
              {/* ::Picture */}
              <img src={product.picture} alt="" className="absolute top-1/2 right-[10vw] h-4/5 opacity-100 md:opacity-20 lg:opacity-100 transform -translate-y-1/2 group-hover:scale-110" />
            </a>
          ))
          }
        </div>


      </div>
    </div>
  )
}

export default ProductSuggestion7
