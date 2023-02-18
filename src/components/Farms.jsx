
import React from 'react'
import Nav from './Navbar'
import Modal1 from './Modal'
import Footer from './Footer'


const ProductSuggestion7 = () => {

  const products = [
    {
      id: 1,
      href: "#link",
      name: "Farm 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      badge: "Tomato !",
      badgeClass: "text-orange-500",
      picture: "https://assets.weforum.org/article/image/responsive_big_webp_WxZnPfCh3elRtPyzhRY9XyAi6L9J8DKPjYq_-FUVEtA.webp",
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


    <div className="relative w-full mx-auto bg-white">
      <Nav />


      <div className="w-full max-w-sm px-4 py-8 mx-auto mt-5 sm:max-w-2xl md:max-w-none">

        {/* :TITLE */}
        <div className="mx-auto ml-6 ">
          <h2 className="text-xl font-bold tracking-normal text-gray-700 uppercase md:text-3xl font-oswald ">Farms </h2>
        </div>

      


        {/* :PRODUCT SUGGESTION */}
        <div className="grid grid-cols-1 mt-20 sm:grid-cols-2">

          

          {products.map((product, index) => (
            <a key={product.id} className={`col-span-1 group relative py-1 pl-4 sm:pl-8 pr-4  bg-white overflow-hidden`}>
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
              <img src={product.picture} alt="" className="absolute w-1/4 transform -translate-y-1/2 opacity-25 top-1/2 right-1/3 h-4/5 md:opacity-50 lg:opacity-100 group-hover:scale-110" />
            </a>
          ))
          }
        </div>


      </div>
      <Footer/>
    </div>
  )
}

export default ProductSuggestion7
