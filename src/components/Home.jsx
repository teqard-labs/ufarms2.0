import React from 'react';
import { Carousel } from "flowbite-react";
import Navbar from './Navbar';
import Intro from './Intro';
import Features from './Features';

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="w-full h-[50vh] md:h-[86vh]">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            
          />
          {/* <div className="container">
              <div className=" text-right">
                <div className="card w-64">
				  	<div className="card-body">
				    	<h3 className="card-title">Card title</h3>
				    	<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    	
				  	</div>
				</div>
              </div>
            </div> */}
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


    </div>
  );


}

export default Home;
