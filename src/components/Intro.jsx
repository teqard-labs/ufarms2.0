import React from 'react';
import Intro1 from '../assets/c4.jpg'
import Intro2 from '../assets/c5.jpg'

const Intro = () => {
    return (
        <div>
            <div className="relative mx-auto py-16 md:mt-32 px-4 w-full h-[75vh] md:h-[60vh] bg-white overflow-hidden">
                <div className="mx-auto max-w-6xl flex">

                    {/* :TITLE CONTAINER */}
                    <div className="relative z-10 flex flex-col items-center w-full max-w-lg py-10 mx-auto text-center md:mx-0 md:items-start md:text-left">
                        {/* ::Category */}
                        <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">About Us</p>
                        {/* ::Title */}
                        <h2 className="mb-8 text-2xl font-bold text-gray-700 capitalize sm:text-3xl">About Ufarms</h2>
                        {/* Content goes here */}
                        Ufarms is an agri-tech startup that uses IoT technology to help farmers optimize yields and reduce costs. Our smart farming solutions include real-time monitoring, automated irrigation, and predictive maintenance tools. We provide critical data to farmers from anywhere, at any time, so they can make informed decisions that drive growth and profitability. Join us to revolutionize agriculture and create a more sustainable future.
                        {/* ::Button */}
                        <a href='/ufarms2.0#/about'>
                        <button type="button" className="mt-3 relative inline-flex items-center px-5 py-2.5 rounded border border-gray-700 bg-gradient-to-r from-[#caf880] to-[#70cf7d] text-base text-gray-700 font-semibold hover:from-[#028A0F] hover:to-[#028A0F] hover:text-white">
                            Know More
                        </button>
                        </a>
                    </div>


                    {/* :IMAGES CONTAINER */}
                    <div className="absolute flex w-full transform -translate-x-1/2 -translate-y-1/2 md:relative top-1/2 left-[40%] md:inset-0 sm:ml-5 md:w-1/2 h-3/4 md:h-auto md:min-h-full md:translate-x-0 md:translate-y-0">
                        {/* ::Image 1 */}
                        <div className="relative flex-shrink-0 h-fit overflow-hidden rounded shadow bottom-8 left-10 w-80">
                            {/* Image goes here */}
                            <img src={Intro1} alt="I1"/>
                        </div>
                        {/* ::Image 2 */}
                        <div className="relative flex-shrink-0 h-fit overflow-hidden rounded shadow top-8 right-28 sm:right-10 md:right-28 lg:right-10 w-80">
                            {/* Image goes here */}
                            <img src={Intro2} alt="I2"/>
                        </div>
                    </div>


                    {/* :OVERLAY */}
                    <div className="absolute inset-0 block w-full h-full bg-white md:hidden opacity-80" />

                </div>
            </div>
        </div>
    );
}

export default Intro;
