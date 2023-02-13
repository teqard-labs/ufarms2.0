import React from 'react'
import { Disclosure } from "@headlessui/react"
import { PlusIcon, MinusIcon } from "@heroicons/react/outline"
import pic from '../assets/about1.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
    return (
      <div className='bg-gray-100'>
        <Navbar/>
      <div className="relative w-full px-4 py-8 mx-auto mt-5 max-w-7xl">
        <div className="grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-y-5">
  
          {/* :TITLE CONTAINER */}
          <div className="flex flex-col w-full max-w-lg col-span-1 mx-auto md:pr-4">
            {/* ::Title */}
            <h2 className="text-2xl font-bold tracking-wide text-center text-gray-700 capitalize md:text-left sm:text-3xl md:text-4xl">
              <span className="block">About</span>
              <span className="block">our Company</span>
            </h2>
            {/* ::Panel */}
            <div className="mt-5 md:mt-10">
              {/* ::Accordion 1 */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-base font-semibold text-gray-600 rounded-sm bg-gray-50 lg:text-lg hover:text-gray-900">
                      <span>Your Subtitle 1</span>
                      {open ?
                        <MinusIcon className="w-5 h-5 fill-current" />
                        : <PlusIcon className="w-5 h-5 fill-current" />
                      }
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {/* Content goes here */}
                      
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* ::Accordion 2 */}
              <Disclosure as="div" className="mt-5">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-base font-semibold text-gray-600 rounded-sm bg-gray-50 lg:text-lg hover:text-gray-900">
                      <span>Your Subtitle 2</span>
                      {open ?
                        <MinusIcon className="w-5 h-5 fill-current" />
                        : <PlusIcon className="w-5 h-5 fill-current" />
                      }
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {/* Content goes here */}
                      
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* ::Accordion 2 */}
              <Disclosure as="div" className="mt-5">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-base font-semibold text-gray-600 rounded-sm bg-gray-50 lg:text-lg hover:text-gray-900">
                      <span>Your Subtitle 3</span>
                      {open ?
                        <MinusIcon className="w-5 h-5 fill-current" />
                        : <PlusIcon className="w-5 h-5 fill-current" />
                      }
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {/* Content goes here */}
                      
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
  
  
          {/* :IMAGE CONTAINER */}
          <div className="w-full max-w-lg col-span-1 mx-auto">
            <div className="aspect-w-1 aspect-h-1">
              {/* Image goes here */}
             <img src={pic} alt="" className="object-cover w-full h-full" /> 
            </div>
          </div>
  
        </div> 
        <div className="w-full px-4 py-5 mx-auto mt-4 max-w-7xl">
      <h3 className="text-xl font-medium text-gray-700">My Heading Title</h3>
      <p className="max-w-4xl mt-3 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias id quis hic tempora explicabo provident, iure quae praesentium accusantium laborum ab expedita, veniam error, nemo eius! Officiis, cum reiciendis.</p>
    </div>
        
	<div className="container px-4 py-8 mx-auto mt-5 space-y-12 ">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?1" alt="" className=" h-80 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<span className="text-xs text-gray-400 uppercase">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className=" h-80 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<span className="text-xs text-gray-400 uppercase">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" className=" h-80 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<span className="text-xs text-gray-400 uppercase">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				
			</div>
		</div>
	</div>
  
      </div>
      <Footer/>
      </div>
    )
  }
  
  export default About