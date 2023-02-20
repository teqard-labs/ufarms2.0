
import React from 'react'
import { CheckCircleIcon } from "@heroicons/react/solid"


const Features = () => {

  const data = [
    { id: 1, name: "Feature 1", icon: CheckCircleIcon, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi, doloribus totam quo, unde magni atque officiis at cupiditate." },
    { id: 2, name: "Feature 2", icon: CheckCircleIcon, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi, doloribus totam quo, unde magni atque officiis at cupiditate." },
    { id: 3, name: "Feature 3", icon: CheckCircleIcon, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi, doloribus totam quo, unde magni atque officiis at cupiditate." },
    { id: 4, name: "Feature 4", icon: CheckCircleIcon, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi, doloribus totam quo, unde magni atque officiis at cupiditate." },
    { id: 5, name: "Feature 5", icon: CheckCircleIcon, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi, doloribus totam quo, unde magni atque officiis at cupiditate." },
    { id: 6, name: "Feature 6", icon: CheckCircleIcon, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi, doloribus totam quo, unde magni atque officiis at cupiditate." },


]

  return (
    <div className="relative mx-auto py-8 px-4 w-full max-w-7xl bg-white overflow-hidden">
      <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-6xl flex flex-col lg:flex-row items-center">

        {/* :TITLE CONTAINER */}
        <div className="mx-auto w-full lg:max-w-md">
          <h2 className="text-base text-gray-500 font-bold uppercase tracking-wide">Features</h2>
          <p className="mt-2 text-2xl sm:text-4xl text-gray-700 font-extrabold capitalize tracking-wide">Our Features</p>
          <div className="mt-5 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus, voluptas dolorem quas odit fuga tempora a voluptatum, consectetur distinctio, provident necessitatibus nobis voluptatem alias modi temporibus commodi aliquid esse?
            
          </div>
          <button className="mt-6 py-1.5 px-4 inline-block shadow-sm rounded border border-gray-700 bg-gradient-to-r from-[#caf880] to-[#70cf7d] text-sm text-gray-700 font-semibold uppercase tracking-wider hover:from-[#7adcb4] hover:to-[#00d082] hover:text-white">Explore</button>
        </div>


        {/* :FEATURES CONTAINER */}
        <div className="relative mt-8 lg:mt-0 lg:ml-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {data.map((item, index) => {
            const Icon = item.icon
            return (
            <div key={item.id} className={`col-span-1 p-5 flex flex-col items-start space-y-2 shadow rounded-md ${index === 0 || index === 2 || index === 4 || index === 6 ? "bg-[#028A0F] text-white" : "bg-gray-100 text-gray-700"}`}>
              {/* ::Icon */}
              <span>
                {/* Icon goes here */}
                <Icon className="w-16 h-16" />
              </span>
              {/* ::Name */}
              <span className="text-lg font-bold">{item.name}</span>
              {/* ::Description */}
              <p className={`text-sm text-gray-500 font-normal ${index === 0 || index === 2 || index === 4 || index === 6 ? " text-white" : " text-gray-700"}`}>{item.description}</p>
            </div>
          )})
          }
        </div>


      </div>
    </div>
  )
}

export default Features
