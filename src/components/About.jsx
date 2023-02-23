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
                      <p>ufarms  aims to change this scenario by introducing a automated grow device which is a complete IoT system including interactive app.  A token-based community(ufarms.io) economy would be built alongside the customers of the grow unit. The intrinsic value of this economy is derived from the established idea if monetarily carbon credits. Growers would be rewarded tokens based on carbon offset achieved by using the system when compared to buying from local market. This promotes the idea of environmental sustainability while rewarding the growers for their contribution made to the ecosystem. </p>
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
                      <p>At ufarms, we are proud to offer a comprehensive solution for anyone who wants to grow their own vegan food. Our product includes an autodosing system that takes care of all the fertilization needs of your plants. With the autodosing system, you don't have to worry about getting the right nutrients to your plants; our system takes care of it automatically. Our grow kit includes everything you need to get started, including a grow tent, LED grow light, and grow bags. Finally, our grow app is an interactive tool that helps you track the progress of your plants and provides valuable insights into how to optimize your growing environment. With the autodosing system, grow kit, and grow app, we've got everything you need to get started with your own sustainable food production.</p>
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
                      <p>ufarms is designed based on a bus model architecture, thereby enabling it to have unlimited ports, valves & sensors. This significantly enhances the scalability of the system compared to the conventional approach. 
Crop specific database is the other most important unique feature of the system. The nutritional & environmental parameter requirements for each crop at each growth phase are different, and maintaining these crop & phase-specific parameters is the single most important factor affecting productivity. Our solution incorporates a crop & phase-specific database developed through years of research for tuning these parameters for maximum agricultural output.
</p>
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
      <p className="max-w-4xl mt-3 text-lg  text-[#028A0F]">Welcome to Ufarms.io, your one-stop destination for all things hydroponic. ufarms is an IoT-enabled automated farming ecosystem called ufarms, people can intelligently grow their own vegan food with hardly any human involvement. The system only needs human assistance for planting and harvesting; it will take care of the plant's other needs for monitoring and fertilization on its own.With our technology we have successfully managed to mitigate the issues faced in a hydroponic growing system. </p>
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
				<p className="my-6 text-black">Our team has a deep understanding of both technology and farming, making us the ideal partner for farmers looking to embrace IoT solutions.</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://images.unsplash.com/photo-1659558454388-e31b7d325e06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className=" h-80 aspect-video" />
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