import React from 'react';

const Intro = () => {
    return (
        <div>
            <div className="relative mx-auto py-16 md:mt-32 px-4 w-full h-[60vh] bg-white overflow-hidden">
                <div className="flex max-w-6xl mx-auto">

                    {/* :TITLE CONTAINER */}
                    <div className="relative z-10 flex flex-col items-center w-full max-w-lg py-10 mx-auto text-center md:mx-0 md:items-start md:text-left">
                        {/* ::Category */}
                        <p className="text-sm font-semibold tracking-wide text-gray-400 uppercase">About Us</p>
                        {/* ::Title */}
                        <h2 className="mb-8 text-2xl font-bold text-gray-700 capitalize sm:text-3xl">About Our Company</h2>
                        {/* Content goes here */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa enim vel porro commodi rerum tempora dolorem. Vero, et minus! Harum minus alias, commodi repudiandae tenetur molestias at cum optio.
                        {/* ::Button */}
                        <button type="button" className="mt-3 relative inline-flex items-center px-5 py-2.5 rounded border border-gray-700 bg-gradient-to-r from-[#caf880] to-[#70cf7d] text-base text-gray-700 font-semibold hover:from-[#028A0F] hover:to-[#028A0F] hover:text-white">
                            Know More
                        </button>
                    </div>


                    {/* :IMAGES CONTAINER */}
                    <div className="absolute flex w-full transform -translate-x-1/2 -translate-y-1/2 md:relative top-1/2 left-1/2 md:inset-0 sm:ml-5 md:w-1/2 h-3/4 md:h-auto md:min-h-full md:translate-x-0 md:translate-y-0">
                        {/* ::Image 1 */}
                        <div className="relative flex-shrink-0 h-full overflow-hidden rounded shadow bottom-8 left-10 w-80">
                            {/* Image goes here */}
                            {/* <img src={image1} alt="" className="absolute inset-0 object-cover object-center w-full h-full" /> */}
                        </div>
                        {/* ::Image 2 */}
                        <div className="relative flex-shrink-0 h-full overflow-hidden rounded shadow top-8 right-28 sm:right-10 md:right-28 lg:right-10 w-80">
                            {/* Image goes here */}
                            {/* <img src={image2} alt="" className="absolute inset-0 object-cover object-center w-full h-full" /> */}
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
