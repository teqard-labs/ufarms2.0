import React from 'react';

const Features = () => {
    return (
        <div>
            <div className="relative mx-auto pt-8 pb-20 px-4 w-full h-screen bg-white">
                <div className="mx-auto max-w-lg md:max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-x-5 lg:gap-x-10 gap-y-10">

                    {/* :TITLE CONTAINER */}
                    <div className="col-span-full mx-auto max-w-xl text-center">
                        <h2 className="text-base text-gray-500 font-bold uppercase tracking-wide">Features</h2>
                        <p className="mt-2 text-2xl sm:text-4xl text-gray-700 font-extrabold capitalize tracking-wide">Our Features</p>
                    </div>


                    {/* :FEATURE 1 */}
                    <div className="col-span-1 relative p-5 w-full h-full flex flex-col">
                        {/* ::Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            {/* Image goes here */}
                            {/* <img src={image} alt="" className="w-full h-full object-cover" /> */}
                            {/* :::overlay */}
                            <div className="absolute inset-0 w-full h-[40vh] bg-gray-800 opacity-80" />
                        </div>
                        {/* ::Name */}
                        <p className="relative text-center text-lg text-white font-bold tracking-wide">Feature Name 1</p>
                        {/* ::Content */}
                        <div className="relative top-0 md:top-20 mt-32 md:p-4 flex justify-center items-center shadow border border-gray-100 bg-gray-50">
                            {/* Content goes here */}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet debitis cupiditate nobis itaque eos dolor molestias ut reiciendis illo accusamus. Fuga harum perferendis sapiente non alias reiciendis sunt quam est.

                        </div>
                    </div>


                    {/* :FEATURE 2 */}
                    <div className="col-span-1 relative p-5 w-full h-full flex flex-col">
                        {/* ::Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            {/* Image goes here */}
                            {/* <img src={image} alt="" className="w-full h-full object-cover" /> */}
                            {/* :::overlay */}
                            <div className="absolute inset-0 w-full h-[40vh] bg-gray-800 opacity-80" />
                        </div>
                        {/* ::Name */}
                        <p className="relative text-center text-lg text-white font-bold tracking-wide">Feature Name 2</p>
                        {/* ::Content */}
                        <div className="relative top-0 md:top-20 mt-32 md:p-4 w-full flex justify-center items-center shadow border border-gray-100 bg-gray-50">
                            {/* Content goes here */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda, iure voluptate odio modi vero corrupti dolorem sequi beatae. Minus molestias animi provident molestiae ex pariatur modi fuga enim quidem.

                        </div>
                    </div>


                    {/* :FEATURE 3 */}
                    <div className="col-span-1 relative p-5 w-full h-full flex flex-col">
                        {/* ::Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            {/* Image goes here */}
                            {/* <img src={image} alt="" className="w-full h-full object-cover" /> */}
                            {/* :::overlay */}
                            <div className="absolute inset-0 w-full h-[40vh] bg-gray-800 opacity-80" />
                        </div>
                        {/* ::Name */}
                        <p className="relative text-center text-lg text-white font-bold tracking-wide">Feature Name 3</p>
                        {/* ::Content */}
                        <div className="relative top-0 md:top-20 mt-32 md:p-4 flex justify-center items-center shadow border border-gray-100 bg-gray-50">
                            {/* Content goes here */}
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dolorem atque quo delectus consequuntur asperiores aspernatur nemo, deleniti explicabo quaerat quisquam, quam repellendus ex, hic eaque quos eveniet reprehenderit perspiciatis!

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Features;
