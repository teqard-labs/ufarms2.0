import React, {useRef} from 'react'
import { Disclosure } from "@headlessui/react"
import { PlusIcon, MinusIcon } from "@heroicons/react/outline"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from '../assets/about1.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import Custom from '../assets/svg/Adv-custom.svg'
import Expert from '../assets/svg/Experts-pana.svg'
import Support from '../assets/svg/Support.svg'
import '../App.css'

const About = () => {



componentDidMount=()=> {window.scrollTo(0, 0)}
  

  const images = [
    {
      name: "Customizable",
      src: Custom,
      desc: "Our solutions are designed to be customizable, ensuring that they meet the specific needs of each individual farmer."
    },
    {
      name: "Expertise",
      src: Expert,
      desc: "Our team has a deep understanding of both technology and farming, making us the ideal partner for farmers looking to embrace IoT solutions."
    },
    {
      name: "Support",
      src: Support,
      desc: "We are dedicated to providing our customers with the best possible support, and are always on hand to answer any questions and offer advice."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,  
    nextArrow: <NArrow/>,
    prevArrow: <PArrow/>,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };
  const slickRef = useRef(null);
  const half=window.innerWidth/2;
 

  const handleCarouselClick = (e) => {
    if (e.clientX > half) {
      slickRef.current.slickNext();
    } else {
      slickRef.current.slickPrev();
    }
  };


  
  function NArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  function PArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

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
                      <p>At ufarms we aim to become an agriculture technology company that aims to transform the food supply chain through innovative technologies and sustainable practices. Our company's mission is to create a world where everyone has access to fresh and healthy food that is grown sustainably and efficiently with minimal human effort.</p>
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
                      <p>At ufarms, we are proud to offer a comprehensive solution for anyone who wants to grow their own vegan food.
                        Our product includes an autodosing system that takes care of all the fertilization needs of your plants.
                        Our grow kit includes everything you need to get started, including a grow tent, LED grow light, and grow bags. 
                        Finally, our grow app is an interactive tool that helps you track the progress of your plants and provides valuable insights into how to optimize your growing environment.
                       
                      </p>
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
                      <p>ufarms is based on bus model architecture allows for unlimited ports, valves, and sensors, making it  scalable compared to traditional agricultural systems .By  incorporating crop-specific data, ufarms can help optimize conditions for plant growth and increase productivity and for those who prioritize environmental conscious practices in their agricultural operations ,ufarms ensures a  sustainable farming practice.</p>
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
        
	<div className="hidden md:inline  container px-4 py-8 mx-auto mt-5 space-y-12 ">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={Custom} alt="" className=" h-80 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<h3 className="text-3xl font-bold text-[#028A0F]">Customizable</h3>
				<p className="my-6 text-black">Our solutions are designed to be customizable, ensuring that they meet the specific needs of each individual farmer.</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={Expert} alt="" className=" h-80 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				
				<h3 className="text-3xl font-bold text-[#028A0F]">Expertise</h3>
				<p className="my-6 text-black">Our team has a deep understanding of both technology and farming, making us the ideal partner for farmers looking to embrace IoT solutions.</p>
				
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={Support} alt="" className=" h-80 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ">
				<h3 className="text-3xl font-bold text-[#028A0F]">Support</h3>
				<p className="my-6 text-black">We are dedicated to providing our customers with the best possible support, and are always on hand to answer any questions and offer advice.</p>
				
			</div>
		</div>
	</div>

    
  <div className="md:hidden w-full my-7" onClick={handleCarouselClick}>
        <Slider {...settings} ref={slickRef}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <img
                  className="rounded-tr-[4em] h-[50vw] sm:h-[30vw] md:h-[30vw] md:max-h-[40vh] md:max-w-[50vw] px-1 "
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                />
                <div className="text-3xl mt-4 font-poppins text-[#03AC13] font-semibold pl-2">
                  {image.name}
                </div>
                <div className="flex flex-row mt-4 font-semibold text-md pl-2 mb-5">
                  {image.desc}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  
      </div>
      <Footer/>
      </div>
    )
  }
  
  export default About