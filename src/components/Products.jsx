
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


const Products = () => {

  const products = [
    {
      id: 1,
      name: "Temperature sensor",
      price: 359,
      href:"#link",
      description: "Measure Temp",
      picture: "https://images.unsplash.com/photo-1620634415912-ec5aa1e89d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      pictureAlt: "Picture description blabla",
    },
    {
      id: 2,
      name: "Temperature sensor",
      price: 70,
      href:"#link",
      description: "Measure Temp",
      picture: "https://images.unsplash.com/photo-1620634415912-ec5aa1e89d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      pictureAlt: "Picture description blabla",
    },
    {
        id: 3,
        name: "Temperature sensor",
        price: 70,
        href:"#link",
        description: "Measure Temp",
        picture: "https://images.unsplash.com/photo-1620634415912-ec5aa1e89d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        pictureAlt: "Picture description blabla",
      },
      {
        id: 4,
        name: "Temperature sensor",
        price: 70,
        href:"#link",
        description: "Measure Temp",
        picture: "https://images.unsplash.com/photo-1620634415912-ec5aa1e89d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        pictureAlt: "Picture description blabla",
      },   {
        id: 5,
        name: "Temperature sensor",
        price: 70,
        href:"#link",
        description: "Measure Temp",
        picture: "https://images.unsplash.com/photo-1620634415912-ec5aa1e89d0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        pictureAlt: "Picture description blabla",
      },

  ]

  return (
    <div>
    <Navbar/>
    <div className="w-full px-4 py-8 mx-auto bg-white sm:px-6 max-w-7xl">
      <div className="max-w-xs mx-auto sm:max-w-2xl lg:max-w-none">
        
        {/* :CATEGORY TITLE */}
        <h2 className="text-2xl font-bold text-black">Our Product Line</h2>


        {/* :PRODUCT LIST */}
        <div className="mt-6">
          <ul className="grid grid-cols-4 gap-10">
            {products.map(product => (
              <li key={product.id} className="relative col-span-full sm:col-span-2 lg:col-span-1 group">
                <a href={product.href} className="flex flex-col w-full h-full">
                  {/* ::Container */}
                  <div className="relative">
                    {/* :::Picture container */}
                    <div className="overflow-hidden rounded-lg shadow-sm aspect-w-1 aspect-h-1 group-hover:shadow-md">
                      {/* ::::picture */}
                      <img src={product.picture} alt={product.pictureAlt} className="object-cover object-center w-full h-full" />
                      {/* ::::overlay background */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#028A0F] via-transparent opacity-70 group-hover:from-transparent" />
                    </div>
                    {/* :::price */}
                    <span className="z-20 absolute bottom-3 right-5 px-0.5 rounded-md text-2xl text-white font-semibold antialiased group-hover:text-gray-700 group-hover:bg-white group-hover:bg-opacity-70">{`$${product.price}`}</span>
                  </div>
                  {/* ::Product Details */}
                  <div className="flex-grow h-full px-3 mt-2">
                    {/* :::Info container */}
                    <div className="relative flex flex-col">
                      {/* ::::name */}
                      <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                      {/* ::::colors description */}
                      <p className="mt-1 text-sm font-medium text-gray-500">{product.description}</p>
                      {/* ::::add to cart button */}
                      <button className="mt-4 py-1.5 w-full rounded-md bg-gradient-to-r from-[#caf880] to-[#70cf7d] text-sm text-white font-semibold tracking-wide hover:from-gray-100 hover:to-white hover:text-black">Add to bag</button>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Products
