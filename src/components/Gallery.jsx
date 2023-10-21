import React from 'react';
import { Link } from 'react-router-dom';
import farms from './farmData';
import Navbar from './Navbar';
import "./GDImageViewer.css";


function Gallery() {


  return (
    <div className="bg-[url('../assets/Gallery Bg.jpg')]">

      <Navbar />
      <div className="relative mx-auto py-8 md:py-16 px-4 w-full bg-white">
        <div className="mx-auto max-w-5xl">
          {/* :TITLE CONTAINER */}
          <div className="flex items-end justify-between">
            <h2 className="text-xl sm:text-2xl text-black font-bold">Available Farms</h2>
          </div>

          {/* :COLLECTIONS */}
          <div className="mt-8 mx-auto max-w-md lg:max-w-none grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
            {farms.map((farm) => (
              <Link to={`/gallery/farm/${farm.id}`} key={farm.id} className="col-span-1 group relative p-2 flex flex-col items-center border-4 border-[#4f594c]  rounded-xl bg-white hover:shadow-xl hover:border-[#028A0F]">
                {/* ::Background Container */}
                <div className="relative w-full h-40 grid grid-cols-3 gap-x-2 rounded-xl overflow-hidden">
                  {farm.previewImages.map((image, imgIdx) => (
                    <span key={imgIdx} className="col-span-1 relative w-full h-full">
                      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    </span>
                  ))}
                </div>
                {/* ::Author Avatar */}
                <div className="relative -mt-12">
                  <span className="w-24 h-24 inline-block border-4 rounded-full shadow-sm overflow-hidden bg-gray-200" aria-label="avatar">
                    <img src={farm.authorImg} alt="" className="w-full h-full" />
                  </span>
                </div>
                {/* ::Details */}
                <div className="pt-2 pb-5 text-center">
                  <p className="text-lg text-black text-opacity-70 font-semibold tracking-wide group-hover:text-opacity-100">{farm.name}</p>
                  <div className="flex items-center">
                    <img src={farm.icon} className='h-5 w-5 mr-1' alt="location" />
                    <p className="text-sm text-black text-opacity-40 font-semibold group-hover:text-opacity-70">{farm.location}</p>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
