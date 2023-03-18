import React from 'react';
import { CubeIcon } from "@heroicons/react/outline"

const HowItWorks = () => {
    return (
        <div>
            <div className="relative mx-auto py-8 px-4 w-full h-full bg-white">
                <div className="flex flex-col items-center">

                    {/* :TITLE CONTAINER */}
                    {/* <div className="mx-auto max-w-[90vw] ">
                        <h2 className="text-5xl text-gray-400 font-bold tracking-wide text-center">How ufarms work?</h2>
                        <p className="mt-2 text-base sm:text-lg lg:text-2xl text-grey-400 font-semibold capitalize">
                        <li>ufarms is a complete farming automation system tuned for the highest productivity per unit area. </li>
                        <li>It utilizes sensors to identify environmental parameters critical for plant growth such as temperature, ph, EC, humidity etc and compare this information with cloud based  crop specific databases through an IoT control box.  </li>
                        <li>The cloud  based algorithms decide on the optimal parameters required and instructs the IoT control box to actuate devices like dosing pumps, cooling fans, fertigation etc to maintain the environmental parameters at an optimal level for maximum productivity.  </li>
                        <li>An app/web-based dashboard is provided to monitor and control these activities. </li>
                        </p>
                    </div> */}



                    {/* :WATCH DEMO */}
                    <div className="relative mt-8 mx-auto aspect-w-5 aspect-h-3 md:aspect-h-2 w-full max-h-[20vh] md:max-h-[84vh] h-full  md:max-w-[60vw] flex justify-center items-center bg-gray-400 overflow-hidden">
                        {/* iframe goes here */}

                        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                            width="1280 " height="576"
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            title='video'
                        />
                    </div>



                    {/* :STEPS */}
                    <div className="mt-8 mx-auto max-w-sm md:max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* ::Step 1 */}
                        <div className="group flex flex-col lg:flex-row items-center md:items-start space-y-2 lg:space-y-0">
                            {/* :::icon */}
                            <span className="flex-shrink-0 w-12 h-12 inline-flex justify-center items-center rounded-full shadow-sm bg-gray-700 text-lg text-gray-400 font-bold group-hover:bg-gray-700 group-hover:text-gray-400">
                                <CubeIcon className="w-7 h-7" />
                            </span>
                            {/* :::details */}
                            <div className="lg:ml-5 flex flex-col text-center md:text-left">
                                <span className="text-xl text-gray-400 font-bold">Step One</span>
                                <div className="mt-1 text-xs text-gray-100 font-medium">
                                    {/* Content goes here */}

                                </div>
                            </div>
                        </div>
                        {/* ::Step 2 */}
                        <div className="group flex flex-col lg:flex-row items-center md:items-start space-y-2 lg:space-y-0">
                            {/* :::icon */}
                            <span className="flex-shrink-0 w-12 h-12 inline-flex justify-center items-center rounded-full shadow-sm bg-gray-700 text-lg text-gray-400 font-bold group-hover:bg-gray-700 group-hover:text-gray-400">
                                <CubeIcon className="w-7 h-7" />
                            </span>
                            {/* :::details */}
                            <div className="lg:ml-5 flex flex-col text-center md:text-left">
                                <span className="text-xl text-gray-400 font-bold">Step Two</span>
                                <div className="mt-1 text-xs text-gray-100 font-medium">
                                    {/* Content goes here */}

                                </div>
                            </div>
                        </div>
                        {/* :::Step 3 */}
                        <div className="group flex flex-col lg:flex-row items-center md:items-start space-y-2 lg:space-y-0">
                            {/* :::icon */}
                            <span className="flex-shrink-0 w-12 h-12 inline-flex justify-center items-center rounded-full shadow-sm bg-gray-700 text-lg text-gray-400 font-bold group-hover:bg-gray-700 group-hover:text-gray-400">
                                <CubeIcon className="w-7 h-7" />
                            </span>
                            {/* :::details */}
                            <div className="lg:ml-5 flex flex-col text-center md:text-left">
                                <span className="text-xl text-gray-400 font-bold">Step Three</span>
                                <div className="mt-1 text-xs text-gray-100 font-medium">
                                    {/* Content goes here */}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
