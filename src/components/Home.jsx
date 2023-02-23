import React from 'react';
import { Carousel } from "flowbite-react";
import Navbar from './Navbar';
import Intro from './Intro';
import Features from './Features';
import Footer from './Footer';
import HowItWorks from './HowItWorks';

const Home = () => {
  

  return (
    <div>
      <Navbar className='sticky' />
      <div className="w-full h-[50vh] md:h-[86vh] ">
        <Carousel>
          
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
         
      
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
       
      </div>

      <Intro />
      <Features />
      <HowItWorks/>
      <Footer />
    </div>
  );
 

}

export default Home;
