import { React, useRef } from "react";
import {
  ClockIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import InputEffect1 from "./InputEffect1";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import A1 from "../assets/Contacts.gif";import Map from './Map';
const Contacts = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    // Submit the form using Formspree
    fetch("https://formspree.io/f/mjvqlyyy", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Your message has been sent!", { autoClose: 3000 });
          event.target.reset();
          console.log("Message Sent");
        } else {
          throw new Error("There was an error sending your message.");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message, { autoClose: 5000 });
      });
  }

  return (
    <div>
      <Navbar />
      <ToastContainer position="bottom-right" />
      <div className="relative w-full mx-auto text-gray-700 bg-white max-w-7xl">
        {/* :HEADER */}
        <div className="relative flex items-center justify-center px-4 mb-6">
          {/* ::Background Image */}
          <img src={A1} alt="loading..." className="w-[75vw] md:w-[30vw] h-[40vh] md:h-[60vh]"/>

          {/* ::Inner Container */}
          <div className="relative text-center">
            {/* :::title contact */}
            
          
            {/* :::sub text */}
            <p className="text-xl font-semibold text-white text-opacity-75"></p>
          </div>
        </div>

        {/* :BODY */}
        <div className="w-full">
          <div className="relative grid max-w-5xl grid-cols-2 px-4 pt-10 mx-auto bg-white rounded-sm shadow-sm bottom-20 lg:p-10 gap-y-10">
            {/* ::Contact Information Container */}
            <div className="max-w-md mx-auto col-span-full md:col-span-1 space-y-7 md:space-y-14">
              {/* :::Title container */}
              <div className="space-y-4">
                {/* ::::title contact us */}
                <h3 className="font-serif text-3xl">Contact Us</h3>
                {/* ::::some text */}
                <p className="text-sm text-gray-500">
                  
                </p>
              </div>
              {/* :::Infos container */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                {/* ::::address */}
                <div className="flex flex-col col-span-1 space-y-1">
                  <LocationMarkerIcon className="w-8 h-8 text-[#028A0F]" />
                  <h4 className="text-sm font-bold text-gray-500 uppercase">
                    Address
                  </h4>
                  <p className="text-xs text-gray-500 lg:text-sm">
                    Marangadan Puthussery Bldg, Nayathode (CIAL City 130),
                    <br /> Angamaly P.O, Ernakulam, <br /> Kerala, India, PIN :
                    683572
                  </p>
                </div>
                {/* ::::opening hours */}
                <div className="flex flex-col col-span-1 space-y-1">
                  <ClockIcon className="w-8 h-8 text-[#028A0F]" />
                  <h4 className="text-sm font-bold text-gray-500 uppercase">
                    Opening hours
                  </h4>
                  <ul className="text-xs text-gray-500 lg:text-sm">
                    <li>Monday to Friday: 10am to 7pm</li>
                    <li>Saturday: 10am to 4pm</li>
                    <li>Sunday: 12am to 4pm</li>
                  </ul>
                </div>
                {/* ::::email contact */}
                <div className="flex flex-col col-span-1 space-y-1">
                  <MailIcon className="w-8 h-8 text-[#028A0F]" />
                  <h4 className="text-sm font-bold text-gray-500 uppercase">
                    Email
                  </h4>
                  <a
                    href="mailto:#"
                    className="text-xs text-gray-500 lg:text-sm hover:text-gray-700"
                  >
                    hello@ufarms.io
                  </a>
                </div>
                {/* ::::phone contact */}
                <div className="flex flex-col col-span-1 space-y-1">
                  <PhoneIcon className="w-8 h-8 text-[#028A0F]" />
                  <h4 className="text-sm font-bold text-gray-500 uppercase">
                    Phone
                  </h4>
                  <p className="text-xs text-gray-500 lg:text-sm">
                    Call our services at: <br />
                    +91 9496516291, +91 9645203644
                  </p>
                </div>
              </div>
            </div>

            {/* ::Contact Form Container */}
            <div className="col-span-full md:col-span-1 sm:px-4">
              <div className="max-w-xl px-5 py-10 mx-auto border border-gray-100 rounded-sm shadow-xl hover:scale-110">
                {/* :::Title container */}
                <div className="max-w-xs mx-auto text-center">
                  {/* ::::title drop us a line */}
                  <h3 className="text-3xl text-[#028A0F] font-serif">
                    Drop us a line
                  </h3>
                  {/* ::::some text */}
                  <p className="text-sm text-gray-500">
                    Please feel free to contact us if you have any further
                    questions or concerns
                  </p>
                </div>
                {/* :::Contact form */}
                <form
                  action=""
                  className="flex flex-col max-w-xs mx-auto mt-6 space-y-5"
                  onSubmit={handleSubmit}
                >
                  {/* ::::name input */}
                  <InputEffect1
                    ref={nameRef}
                    labelInput="Name"
                    typeInput="text"
                    idInput="name"
                    placeholder="Your Name"
                  />
                  {/* ::::email input */}
                  <InputEffect1
                    ref={emailRef}
                    labelInput="Email"
                    typeInput="email"
                    idInput="email"
                    placeholder="Your Email"
                  />
                  {/* ::::message input */}
                  <div className="pt-2 space-y-2 text-sm">
                    <label
                      htmlFor="message"
                      className="relative text-gray-300 left-3"
                    >
                      Your Message
                    </label>
                    <textarea
                      ref={messageRef}
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      className="w-full bg-transparent border-0 border-t-2 border-gray-300 shadow-sm resize-none form-textarea focus:border-transparent focus:ring-1 focus:ring-[#028A0F]"
                    ></textarea>
                  </div>
                  {/* ::::send message button */}
                  <button className="mx-auto py-2 px-4 w-40 rounded-full bg-gradient-to-r from-[#caf880] to-[#70cf7d] hover:from-[#028A0F] hover:to-[#028A0F]  text-sm text-black font-semibold tracking-wide">
                    Send message!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Map />
  <Footer>
    
  </Footer>
    </div>
  );
};

export default Contacts;
