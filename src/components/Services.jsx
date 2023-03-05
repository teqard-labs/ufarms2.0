
import React from 'react'
import Navbar from './Navbar'
import { BeakerIcon, CubeTransparentIcon, LightBulbIcon, PuzzleIcon } from '@heroicons/react/outline'
import Footer from './Footer'


const Features8 = () => {
  return (
  <div>
    <Navbar/>
    <div className="w-full px-3 py-16 mx-auto max-w-7xl bg-white-50">
      {/* CONTAINER */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto space-y-10 lg:flex-row md:space-y-0">


        {/* :TITLE CONTAINER */}
        <div className="relative flex flex-col justify-center flex-shrink-0 w-auto h-full text-center sm:px-4 md:text-left">

          

          {/* ::Title */}
          <h2 className="mb-6 text-3xl sm:text-5xl font-extrabold capitalize space-y-4 text-[#028A0F]">
            <span className="block">Services We Provide</span>
           
          </h2>
          
          {/* ::Text */}
          <p className="max-w-sm mx-auto text-sm leading-7 text-gray-600 md:mx-0 sm:text-base">These are the services that we are providing to our customers.</p>
          
          

        </div>



        {/* :FEATURES CONTAINER */}
        <dl className="flex flex-col justify-center w-auto max-w-xl mx-auto sm:px-4 md:flex-row">

          {/* ::Features container 1 -> Premium Design */}
          <div className="relative flex flex-col h-full px-3 space-y-4 md:top-10 md:w-1/2 sm:flex-row md:flex-col sm:space-y-0 md:space-y-8">
            
            {/* :::feature 1 */}
            <div className="flex flex-col items-center justify-center w-full max-w-xs px-5 mx-auto space-y-3 bg-white border border-gray-100 shadow-md py-7 sm:items-start">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-tr from-[#caf880] to-[#70cf7d]  text-white">
                <BeakerIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Crop monitoring</dt>
              {/* Text */}
              <dd className="text-sm leading-relaxed text-gray-500">ufarms use sensors, drones, and satellite imagery to monitor crop health, growth, and yield. This helps farmers to identify issues like pests, diseases, or nutrient deficiencies early on and take corrective measures.</dd>
            </div>

            {/* :::feature 2 -> Unique Strategy */}
            <div className="flex flex-col items-center justify-center w-full max-w-xs px-5 mx-auto space-y-3 bg-white border border-gray-100 shadow-md py-7 sm:items-start">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br from-[#caf880] to-[#70cf7d] text-white">
                <CubeTransparentIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Precision agriculture</dt>
              {/* Text */}
              <dd className="text-sm leading-relaxed text-gray-500">ufarms use remote sensing, data analytics and other technologies to precisely control the application of water, fertilizer, and pesticides. This reduces waste and maximizes yields.</dd>
            </div>

            {/* :::feature 4 -> Solutions & Consulting */}
            <div className="flex flex-col items-center justify-center w-full max-w-xs px-5 mx-auto space-y-3 bg-white border border-gray-100 shadow-md py-7 sm:items-start">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-bl from-[#caf880] to-[#70cf7d] text-white">
                <LightBulbIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Data analytics</dt>
              {/* Text */}
              <dd className="text-sm leading-relaxed text-gray-500">ufarms collect vast amounts of data on crop and livestock performance, weather patterns, soil conditions, and other factors. This data can be analyzed to identify trends and optimize farming practices.</dd>
            </div>

          </div>

          {/* ::Features container 2 */}
          <div className="relative flex flex-col h-full px-3 mt-4 space-y-4 md:bottom-10 sm:mt-0 md:w-1/2 sm:flex-row md:flex-col sm:space-y-0 md:space-y-8">
            
            {/* :::feature 3 -> Creative Ideas */}
            <div className="flex flex-col items-center justify-center w-full max-w-xs px-5 mx-auto space-y-3 bg-white border border-gray-100 shadow-md py-7 sm:items-start">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-tl from-[#caf880] to-[#70cf7d] text-white">
                <PuzzleIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Smart irrigation</dt>
              {/* Text */}
              <dd className="text-sm leading-relaxed text-gray-500"> ufarms use a variety of sensors and other technologies to monitor and control water usage, which can help to reduce waste and ensure optimal moisture levels for crops.</dd>
            </div>
            
            {/* :::feature 4 -> Solutions & Consulting */}
            <div className="flex flex-col items-center justify-center w-full max-w-xs px-5 mx-auto space-y-3 bg-white border border-gray-100 shadow-md py-7 sm:items-start">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-bl from-[#caf880] to-[#70cf7d] text-white">
                <LightBulbIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Energy efficiency</dt>
              {/* Text */}
              <dd className="text-sm leading-relaxed text-gray-500">ufarms can use renewable energy sources like solar or wind power to reduce their environmental impact and save on energy costs.</dd>
            </div>

            {/* :::feature 4 -> Solutions & Consulting */}
            <div className="flex flex-col items-center justify-center w-full max-w-xs px-5 mx-auto space-y-3 bg-white border border-gray-100 shadow-md py-7 sm:items-start">
              {/* Circle Icon */}
              <span className="w-14 h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-bl from-[#caf880] to-[#70cf7d] text-white">
                <PuzzleIcon className="w-8 h-8" />
              </span>
              {/* Title */}
              <dt className="text-lg font-semibold text-[#028A0F]">Predictive maintenance</dt>
              {/* Text */}
              <dd className="text-sm leading-relaxed text-gray-500"> ufarms use data analytics and machine learning to predict when equipment will need maintenance or repair. This helps to reduce downtime and optimize equipment performance.</dd>
            </div>

            

          </div>

        </dl>


      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Features8
