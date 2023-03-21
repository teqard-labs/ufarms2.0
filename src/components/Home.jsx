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
import '../App.css'

const Home = () => {


  return (
    <div>
      <Navbar className='sticky' />
      <div className="w-full h-[50vh] md:h-[86vh] relative ">
        <Carousel className='md:h-[95%]'>
          <div className=''>
            <img
              src={c1}
              alt="..."
              className='car'
            />
          </div>

          <div className=''>
            <img
              src={c2}
              alt="..."
              className='car'
            />

          </div>

          <div>
            <img
              src={c3}
              alt="..."
              className='car w-full'
            />

          </div>

          <div>
            <img
              src={c2}
              alt="..."
              className='car'
            />

          </div>

          <div>
            <img
              src={c1}
              alt="..."
              className='car'
            />

          </div>
        </Carousel>

      </div>

      <Intro />
      <Features />
      <Footer />
    </div>
  );


}

export default Home;
