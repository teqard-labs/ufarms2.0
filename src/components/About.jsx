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
              <span className="block text-[#028A0F]">About</span>
              <span className="block text-[#028A0F]">our Company</span>
            </h2>
            {/* ::Panel */}
            <div className="mt-5 md:mt-10">
              {/* ::Accordion 1 */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-base font-semibold text-gray-600 rounded-sm bg-gray-50 lg:text-lg hover:text-gray-900">
                      <span>Our Mission</span>
                      {open ?
                        <MinusIcon className="w-5 h-5 fill-current" />
                        : <PlusIcon className="w-5 h-5 fill-current" />
                      }
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {/* Content goes here */}
                      <p>Our mission is to provide our customers with the best hydroponic products, knowledge, and support. We aim to make hydroponic gardening accessible and affordable for everyone, from hobbyists to commercial farmers.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* ::Accordion 2 */}
              <Disclosure as="div" className="mt-5">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-base font-semibold text-gray-600 rounded-sm bg-gray-50 lg:text-lg hover:text-gray-900">
                      <span>Our Products</span>
                      {open ?
                        <MinusIcon className="w-5 h-5 fill-current" />
                        : <PlusIcon className="w-5 h-5 fill-current" />
                      }
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {/* Content goes here */}
                      <p>We offer a wide range of hydroponic products, including nutrient-rich water solutions, grow lights, hydroponic systems, and other accessories. All of our products are carefully selected to ensure that they are of the highest quality and will provide our customers with the best results</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {/* ::Accordion 2 */}
              <Disclosure as="div" className="mt-5">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-base font-semibold text-gray-600 rounded-sm bg-gray-50 lg:text-lg hover:text-gray-900">
                      <span>Why Choose Us</span>
                      {open ?
                        <MinusIcon className="w-5 h-5 fill-current" />
                        : <PlusIcon className="w-5 h-5 fill-current" />
                      }
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {/* Content goes here */}
                      <p>Choose Ufarms.io for accessible and successful hydroponic gardening. Our wide range of high-quality products, expert knowledge and support, and excellent customer service make us the go-to choice for hobbyists and commercial farmers alike. Benefit from our team's years of experience and dedication to providing the best possible products at affordable prices. Start or expand your hydroponic journey with us.</p>
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
      <p className="max-w-4xl mt-3 text-lg  text-[#028A0F]">Welcome to Ufarms.io, your one-stop destination for all things hydroponic. We are a team of passionate experts who have been providing hydroponic solutions to our customers for many years. We believe that hydroponics is the future of agriculture and are dedicated to helping our customers grow the freshest and most nutritious crops possible.</p>
    </div>
        
	<div className="container px-4 py-8 mx-auto mt-5 space-y-12 ">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://images.unsplash.com/photo-1515524042669-de726ea3283d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1225&q=80" alt="" className=" h-80 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<h3 className="text-3xl font-bold text-[#028A0F]">Customizable</h3>
				<p className="my-6 text-black">Our solutions are designed to be customizable, ensuring that they meet the specific needs of each individual farmer.</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://images.unsplash.com/photo-1516906561371-53f48df1254d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" className=" h-80 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				
				<h3 className="text-3xl font-bold text-[#028A0F]">Expertise</h3>
				<p className="my-6 text-black">Our team has a deep understanding of both technology and farming, making us the ideal partner for farmers looking to embrace IoT solutions..</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" className=" h-80 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<h3 className="text-3xl font-bold text-[#028A0F]">Support</h3>
				<p className="my-6 text-black">We are dedicated to providing our customers with the best possible support, and are always on hand to answer any questions and offer advice.</p>
				
			</div>
		</div>
	</div>
  
      </div>
      <Footer/>
      </div>
    )
  }
  
  export default About