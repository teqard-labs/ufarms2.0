import React from 'react';

const Intro = () => {
    return (
        <div>
            <div className="relative mx-auto py-16 md:mt-32 px-4 w-full h-[60vh] bg-white">
                <div className="mx-auto max-w-6xl flex">

                    {/* :TITLE CONTAINER */}
                    <div className="z-10 relative mx-auto md:mx-0 py-10 w-full max-w-lg flex flex-col items-center md:items-start text-center md:text-left">
                        {/* ::Category */}
                        <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide">About Us</p>
                        {/* ::Title */}
                        <h2 className="mb-8 text-2xl sm:text-3xl text-gray-700 font-bold capitalize">About Our Company</h2>
                        {/* Content goes here */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa enim vel porro commodi rerum tempora dolorem. Vero, et minus! Harum minus alias, commodi repudiandae tenetur molestias at cum optio.
                        {/* ::Button */}
                        <button type="button" className="mt-3 relative inline-flex items-center px-5 py-2.5 rounded-sm border border-transparent bg-[#028A0F] text-base text-white font-medium hover:bg-gray-900">
                            Know more
                        </button>
                    </div>


                    {/* :IMAGES CONTAINER */}
                    <div className="absolute md:relative top-1/2 left-1/2 md:inset-0 sm:ml-5 w-full md:w-1/2 h-3/4 md:h-auto md:min-h-full flex transform -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:translate-y-0">
                        {/* ::Image 1 */}
                        <div className="flex-shrink-0 relative bottom-8 left-10 w-80 h-full rounded shadow overflow-hidden">
                            {/* Image goes here */}
                            {/* <img src={image1} alt="" className="absolute inset-0 w-full h-full object-center object-cover" /> */}
                        </div>
                        {/* ::Image 2 */}
                        <div className="flex-shrink-0 relative top-8 right-28 sm:right-10 md:right-28 lg:right-10 w-80 h-full rounded shadow overflow-hidden">
                            {/* Image goes here */}
                            {/* <img src={image2} alt="" className="absolute inset-0 w-full h-full object-center object-cover" /> */}
                        </div>
                    </div>


                    {/* :OVERLAY */}
                    <div className="absolute inset-0 block md:hidden w-full h-full bg-white opacity-80" />

                </div>
            </div>
        </div>
    );
}

export default Intro;
