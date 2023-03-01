import React from 'react';
import { Carousel } from "flowbite-react";
import Navbar from './Navbar';
import Intro from './Intro';
import Features from './Features';
import Footer from './Footer';
import HowItWorks from './HowItWorks';
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'

const Home = () => {


  return (
    <div>
      <Navbar className='sticky' />
      <div className="w-full h-[50vh] md:h-[86vh] ">
        <Carousel className='md:h-[95%]'>
          <img
            src={c1}
            alt="..."
            className='min-h-[60%]'
          />
          <img
            src={c2}
            alt="..."
          />
          <img
            src={c3}
            alt="..."
          />
          <img
            src={c2}
            alt="..."
          />
          <img
            src={c1}
            alt="..."
            className='min-h-[60%]'
          />
        </Carousel>

      </div>

      <Intro />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );


}

export default Home;
