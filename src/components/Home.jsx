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
      <div className="w-full h-[50vh] md:h-[86vh] relative ">
        <Carousel className='md:h-[95%]'>
          <div className=''>
            <img
              src={c1}
              alt="..."
              className='min-h-[60%]'
            />
            <div className='container absolute w-[23vw] h-[70vh] top-[22%] left-[10%] block bg-slate-200 bg-opacity-90 z-1'>

            </div>
          </div>

          <div className=''>
            <img
              src={c2}
              alt="..."
            />
            <div className='container absolute w-[23vw] h-[70vh] top-[27%] left-[10%] block bg-slate-200 bg-opacity-90 z-1'>

            </div>
          </div>

          <div>
            <img
              src={c3}
              alt="..."
            />
            <div className='container absolute w-[23vw] h-[70vh] top-[27%] left-[10%] block bg-slate-200 bg-opacity-90 z-1'>

            </div>
          </div>

          <div>
            <img
              src={c2}
              alt="..."
            />
            <div className='container absolute w-[23vw] h-[70vh] top-[27%] left-[10%] block bg-slate-200 bg-opacity-90 z-1'>

            </div>
          </div>

          <div>
            <img
              src={c1}
              alt="..."
              className='min-h-[60%]'
            />

            <div className='container absolute w-[23vw] h-[70vh] top-[22%] left-[10%] block bg-slate-200 bg-opacity-90 z-1'>

            </div>
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
