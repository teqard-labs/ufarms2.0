
import React from 'react'
import P1 from '../assets/svg/Smart home-pana.svg'
import P2 from '../assets/svg/Smart home-cuate.svg'
import P3 from '../assets/svg/All the data-rafiki.svg'
import P4 from '../assets/svg/Site Stats.svg'
import P6 from '../assets/svg/Processing.svg'
import P7 from '../assets/svg/Deadline-pana.svg'



const FeaturesLayout7 = () => {

  const data = [
    { id: 1, name: "Temperature and Humidity", src:P1},
    { id: 2, name: "Automatic Ligthing", src:P2},
    { id: 3, name: "IoT Enabled", src:P3},
    { id: 4, name: "Elegant Dashboard", src:P4},
    { id: 5, name: "Fully Automated", src:P6},
    { id: 6, name: "Realtime Monitoring", src:P7},
  ]

  return (
    <div className="relative mx-auto py-8 sm:py-16 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-5xl flex flex-col">

        {/* :TITLE CONTAINER */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-base text-gray-500 font-bold uppercase tracking-wide">Features</h2>
          <p className="mt-2 text-2xl sm:text-4xl text-gray-700 font-extrabold capitalize tracking-wide">Our Features</p>
        </div>


        {/* :FEATURES CONTAINER */}
        <div className="mt-8 sm:mt-16 grid grid-cols-2 sm:max-md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 ">
          {data.map(item => {
            
            return (
            <div key={item.id} className="col-span-1 flex flex-col items-center text-center hover:scale-110">
              {/* ::Icon */}
              <span>
                {/* Icon goes here */}
                <img src={item.src} className="h-[20vh] w-[80vw] md:h-[40vh] rounded-2xl" alt="hi"/>
              </span>
              {/* ::Name */}
              <span className="mt-5 text-xl text-black font-bold">{item.name}</span>
            </div>
          )})
          }
        </div>

      </div>
    </div>
  )
}

export default FeaturesLayout7
