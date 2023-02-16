import React from 'react';
import { useRef } from 'react';
import { ClockIcon, LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import InputEffect1 from './InputEffect1'
import Navbar from './Navbar';
import Footer from './Footer';



const Contacts = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    /* 
    Do something here !
    */
  }

 return (
  <div>
    <Navbar/>

   <div className="relative mx-auto w-full max-w-7xl bg-white text-gray-700">
     
     {/* :HEADER */}
     <div className="relative pt-20 md:pt-40 pb-32 px-4 flex justify-center items-center">

       {/* ::Background Image */}
       <img src="https://www.thespruce.com/thmb/A4B7gXN_1nRYH9ARAF0TnAD3iwo=/2122x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-165831199-56d751df3df78cfb37da972c.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />

       {/* ::Inner Container */}
       <div className="relative text-center">
         {/* :::title contact */}
         <h2 className="text-6xl md:text-8xl text-white font-serif tracking-wider" style={{ textShadow: "1px 1px 2px #7d7d7d" }}>Contact</h2>
         {/* :::sub text */}
         <p className="text-xl text-white text-opacity-75 font-semibold"></p>
       </div>

     </div>




     {/* :BODY */}
     <div className="w-full">
       <div className="relative bottom-20 mx-auto pt-10 px-4 lg:p-10 max-w-5xl grid grid-cols-2 gap-y-10 rounded-sm shadow-sm bg-white">

         {/* ::Contact Information Container */}
         <div className="col-span-full md:col-span-1 mx-auto max-w-md space-y-7 md:space-y-14">
           {/* :::Title container */}
           <div className="space-y-4">
             {/* ::::title contact us */}
             <h3 className="text-3xl font-serif">Contact Us</h3>
             {/* ::::some text */}
             <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam maiores facilis accusamus porro quae molestiae esse voluptatibus, eligendi quibusdam facere culpa sint ipsa illum quas quod illo eveniet minima dignissimos.</p>
           </div>
           {/* :::Infos container */}
           <div className="grid grid-cols-2 gap-y-8 gap-x-4">
             {/* ::::address */}
             <div className="col-span-1 flex flex-col space-y-1">
               <LocationMarkerIcon className="w-8 h-8 text-[#028A0F]" />
               <h4 className="text-sm text-gray-500 font-bold uppercase">Address</h4>
               <p className="text-xs lg:text-sm text-gray-500">18 Avenue des Champs-Élysées, <br /> 75008 Paris <br /> France</p>
             </div>
             {/* ::::opening hours */}
             <div className="col-span-1 flex flex-col space-y-1">
               <ClockIcon className="w-8 h-8 text-[#028A0F]" />
               <h4 className="text-sm text-gray-500 font-bold uppercase">Opening hours</h4>
               <ul className="text-xs lg:text-sm text-gray-500">
                 <li>Monday to Friday: 10am to 7pm</li>
                 <li>Saturday: 10am to 4pm</li>
                 <li>Sunday: 12am to 4pm</li>
               </ul>
             </div>
             {/* ::::email contact */}
             <div className="col-span-1 flex flex-col space-y-1">
               <MailIcon className="w-8 h-8 text-[#028A0F]" />
               <h4 className="text-sm text-gray-500 font-bold uppercase">Email</h4>
               <a href="mailto:#" className="text-xs lg:text-sm text-gray-500 hover:text-gray-700">contact-support@fancymail.com</a>
             </div>
             {/* ::::phone contact */}
             <div className="col-span-1 flex flex-col space-y-1">
               <PhoneIcon className="w-8 h-8 text-[#028A0F]" />
               <h4 className="text-sm text-gray-500 font-bold uppercase">Phone</h4>
               <p className="text-xs lg:text-sm text-gray-500">Call customer services at: <br /> XXX-XXXX-XXXX</p>
             </div>
           </div>
         </div>

         {/* ::Contact Form Container */}
         <div className="col-span-full md:col-span-1 sm:px-4">
           <div className="mx-auto py-10 px-5 max-w-xl rounded-sm border border-gray-100 shadow-xl">
             {/* :::Title container */}
             <div className="mx-auto max-w-xs text-center">
               {/* ::::title drop us a line */}
               <h3 className="text-3xl text-[#028A0F] font-serif">Drop us a line</h3>
               {/* ::::some text */}
               <p className="text-sm text-gray-500">Please feel free to contact us if you have any further questions or concerns</p>
             </div>
             {/* :::Contact form */}
             <form action="" className="mt-6 mx-auto max-w-xs flex flex-col space-y-5" onSubmit={handleSubmit}>
               {/* ::::name input */}
               <InputEffect1 refInput={nameRef} labelInput="Name" typeInput="text" idInput="name" placeholder="Your Name" />
               {/* ::::email input */}
               <InputEffect1 refInput={emailRef} labelInput="Email" typeInput="email" idInput="email" placeholder="Your Email" />
               {/* ::::message input */}
               <div className="pt-2 space-y-2 text-sm">
                 <label htmlFor="message" className="relative left-3 text-gray-300">Your Message</label>
                 <textarea ref={messageRef} name="message" id="message" cols="30" rows="3" 
                   className="form-textarea resize-none w-full shadow-sm border-0 border-t-2 border-gray-300 bg-transparent focus:border-transparent focus:ring-1 focus:ring-teal-500"
                 ></textarea>
               </div>
               {/* ::::send message button */}
               <button className="mx-auto py-2 px-4 w-40 rounded-full bg-[#028A0F] text-sm text-white font-semibold tracking-wide hover:bg-[#03AC13]">Send message!</button>
             </form>
           </div>
         </div>

       </div>
     </div>

   </div>
  <Footer></Footer>
  </div>
    );
}

export default Contacts;
