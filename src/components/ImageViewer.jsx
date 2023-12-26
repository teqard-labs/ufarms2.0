import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import GDImageViewer from "./GDImageViewer";
import "./GDImageViewer.css";
import Navbar from './Navbar';
import farms from './farmData';
import Back from '../assets/icons/barrow.png'
import Loading from './Loading';


function ImageViewer() {
  console.log(farms);
  const { id } = useParams();
  const farmid = farms.find(farm => farm.id === parseInt(id));
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const imagePromises = farmid.previewImages.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve();
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      });
  }, [farmid.previewImages]);

  if (!farmid) {
    // Handle case when the farm with the provided id is not found
    return <div>Farm not found</div>;
  }

  // Hide the content until images are loaded
  const contentStyle = {
    opacity: imagesLoaded ? 1 : 0,
    transition: 'opacity 0.5s',
  };

  // Access farm data and display Google Drive images here
  const { data } = farmid;

  return (
      <div className='overflow-hidden'>
      <Navbar/>
        <Link to="/gallery">
          <button className='mt-5 md:absolute'><img src={Back} className='h-10 w-10 md:h-12 md:w-12 ml-5' alt="" /></button>
        </Link>
        <div className="my-4 top-0 mx-auto max-w-md lg:max-w-none w-full p-2 md:ml-[33vw] ">
          {imagesLoaded ? ( // Render content when images are loaded
            <div style={contentStyle} key={farmid.id} className="relative md:w-[30vw] sm:max-md:h-[16vw] xs:h-[22vw] lg:h-[15vw] md:h-[19vw] xl:h-[12vw] 2xl:h-[10.5vw] w-full h-[30vw] md:ml-5 grid grid-cols-3 rounded-xl overflow-hidden border-4 bg-black border-[#4f594c] hover:shadow-xl hover:border-[#028A0F]">
              {farmid.previewImages.map((image, imgIdx) => (
                <span key={imgIdx} className="col-span-1 relative w-full md:h-[18.5vw] ">
                  <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                </span>
              ))}
              {/* ::Author Avatar */}
              <div className="absolute top-3 left-0 ml-5">
                <span className="md:w-32 md:h-32 w-20 h-20 inline-block border-4 border-gray-800 rounded-full shadow-sm overflow-hidden bg-gray-200" aria-label="avatar">
                  <img src={farmid.authorImg} alt="" className="w-full h-full" />
                </span>
              </div>
              {/* ::Details */}
              <div className="pt-2 pb-5 text-center absolute top-5 left-28 md:left-40 md:top-9 z-1 items-center">
                <p className="text-lg text-white font-semibold tracking-wide group-hover:text-opacity-100">{farmid.name}</p>
                <div className="flex items-center">
                  <img src={farmid.icon} className='h-5 w-5 mr-2' alt="location" />
                  <p className="text-sm text-white font-semibold group-hover:text-opacity-70">{farmid.location}</p>
                </div>
              </div>
            </div>
          ) : (<Loading />)
          }
        </div>
        <GDImageViewer data={data} />
        {/* <Footer/> */}
      </div>
  );
}

export default ImageViewer;
