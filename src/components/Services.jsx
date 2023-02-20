
import React from 'react'
import Navbar from './Navbar'
import { BeakerIcon, CubeTransparentIcon, LightBulbIcon, PuzzleIcon } from '@heroicons/react/outline'


const Features8 = () => {
  return (
  <div>
    <Navbar/>
    <div className="mx-auto py-16 px-3 w-full max-w-7xl bg-white-50">
      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-6xl flex flex-col lg:flex-row items-center space-y-10 md:space-y-0">


        {/* :TITLE CONTAINER */}
        <div className="flex-shrink-0 relative sm:px-4 w-auto h-full flex flex-col justify-center text-center md:text-left">

          

          {/* ::Title */}
          <h2 className="mb-6 text-3xl sm:text-5xl font-extrabold capitalize space-y-4 text-[#028A0F]">
            <span className="block">Services We Provide</span>
           
          </h2>
          
          {/* ::Text */}
          <p className="mx-auto md:mx-0 max-w-sm text-sm sm:text-base text-gray-600 leading-7">These are the services that we are providing to our customers.</p>
          
          

        </div>



        {/* :FEATURES CONTAINER */}
        <dl className="mx-auto sm:px-4 w-auto max-w-xl flex flex-col md:flex-row justify-center">

          {/* ::Features container 1 -> Premium Design */}
          <div className="relative md:top-10 px-3 md:w-1/2 h-full flex flex-col sm:flex-row md:flex-col space-y-4 sm:space-y-0 md:space-y-8">
            
            {/* :::feature 1 */}
            <div className="mx-auto py-7 px-5 w-full max-w-xs flex flex-col justify-center items-center sm:items-start border border-gray-100 shadow-md space-y-3 bg-white">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-tr from-[#caf880] to-[#70cf7d]  text-white">
                <BeakerIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Crop monitoring</dt>
              {/* Text */}
              <dd className="text-sm text-gray-500 leading-relaxed">Automated farms use sensors, drones, and satellite imagery to monitor crop health, growth, and yield. This helps farmers to identify issues like pests, diseases, or nutrient deficiencies early on and take corrective measures.</dd>
            </div>

            {/* :::feature 2 -> Unique Strategy */}
            <div className="mx-auto py-7 px-5 w-full max-w-xs flex flex-col justify-center items-center sm:items-start border border-gray-100 shadow-md space-y-3 bg-white">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br from-[#caf880] to-[#70cf7d] text-white">
                <CubeTransparentIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Precision agriculture</dt>
              {/* Text */}
              <dd className="text-sm text-gray-500 leading-relaxed">Automated farms use GPS and other technologies to precisely control the application of water, fertilizer, and pesticides. This reduces waste and maximizes yields.</dd>
            </div>

            {/* :::feature 4 -> Solutions & Consulting */}
            <div className="mx-auto py-7 px-5 w-full max-w-xs flex flex-col justify-center items-center sm:items-start border border-gray-100 shadow-md space-y-3 bg-white">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-bl from-[#caf880] to-[#70cf7d] text-white">
                <LightBulbIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Data analytics</dt>
              {/* Text */}
              <dd className="text-sm text-gray-500 leading-relaxed">Automated farms collect vast amounts of data on crop and livestock performance, weather patterns, soil conditions, and other factors. This data can be analyzed to identify trends and optimize farming practices.</dd>
            </div>

          </div>

          {/* ::Features container 2 */}
          <div className="relative md:bottom-10 mt-4 sm:mt-0 px-3 md:w-1/2 h-full flex flex-col sm:flex-row md:flex-col space-y-4 sm:space-y-0 md:space-y-8">
            
            {/* :::feature 3 -> Creative Ideas */}
            <div className="mx-auto py-7 px-5 w-full max-w-xs flex flex-col justify-center items-center sm:items-start border border-gray-100 shadow-md space-y-3 bg-white">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-tl from-[#caf880] to-[#70cf7d] text-white">
                <PuzzleIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Harvesting</dt>
              {/* Text */}
              <dd className="text-sm text-gray-500 leading-relaxed">Automated farms use robots to harvest crops, reducing the need for manual labor and increasing efficiency. This can also help to reduce crop damage during harvesting.</dd>
            </div>
            
            {/* :::feature 4 -> Solutions & Consulting */}
            <div className="mx-auto py-7 px-5 w-full max-w-xs flex flex-col justify-center items-center sm:items-start border border-gray-100 shadow-md space-y-3 bg-white">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-bl from-[#caf880] to-[#70cf7d] text-white">
                <LightBulbIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Energy efficiency</dt>
              {/* Text */}
              <dd className="text-sm text-gray-500 leading-relaxed">Automated farms can use renewable energy sources like solar or wind power to reduce their environmental impact and save on energy costs.</dd>
            </div>

            {/* :::feature 4 -> Solutions & Consulting */}
            <div className="mx-auto py-7 px-5 w-full max-w-xs flex flex-col justify-center items-center sm:items-start border border-gray-100 shadow-md space-y-3 bg-white">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-bl from-[#caf880] to-[#70cf7d] text-white">
                <PuzzleIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Predictive maintenance</dt>
              {/* Text */}
              <dd className="text-sm text-gray-500 leading-relaxed"> Automated farms use data analytics and machine learning to predict when equipment will need maintenance or repair. This helps to reduce downtime and optimize equipment performance.</dd>
            </div>

            

          </div>

        </dl>


      </div>
    </div>
    </div>
  )
}

export default Features8
