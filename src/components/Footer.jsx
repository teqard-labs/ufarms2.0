
import React from 'react'
import BackToTop from 'react-back-to-top-button'
const Footer = () => {
  return (
    <footer className="w-full px-4 py-5 bg-[#028A0F] "> {/* Container */}
      <h2 className="sr-only">Footer</h2>
      <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">

        {/* :SITE NAME & SOCIAL NETWORKS */}
        <div className="relative flex flex-col items-center justify-center px-5 text-white mt-14 sm:mt-0">
          {/* ::Site name */}
          <h1 className="mt-auto text-4xl font-semibold text-center font-title">Ufarms.io</h1>
          {/* ::Social & copyright */}
          <div className="flex flex-col items-center mt-auto">
            {/* :::Social */}
            <span className="inline-flex justify-center w-full mt-6 md:justify-start md:w-auto">
              {/* Facebook */}
              <a href="#link" className="text-white">
                <span className="sr-only">Facebook</span>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#link" className="ml-3 text-white">
                <span className="sr-only">Twitter</span>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/ufarms.io/" className="ml-3 text-white">
                <span className="sr-only">Instagram</span>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              {/* Linkedin */}
              <a href="https://www.linkedin.com/company/ufarmsio/about/" className="ml-3 text-white">
                <span className="sr-only">Linkedin</span>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
            {/* :::Copyright */}
            <span className="py-4 text-xs">&copy;2023, Ufarms.io All Rights Reserved.</span>
          </div>
          {/* ::Mobile separator line */}
          <span className="absolute w-1/4 h-px transform -translate-x-1/2 bg-white sm:hidden -top-4 left-1/2" aria-hidden="true"/>
        </div>

        {/* :NAVIGATION */}
        <div className="grid grid-cols-2 gap-5 text-white">
          {/* ::Navigation */}
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeOutSine"
      >
        <span className='flex text-base text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-1 leading-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
</svg>Back To Top</span>
      </BackToTop>
              
          {/* ::Address */}
          <div className="flex flex-col items-center col-span-2 px-4 pb-0 md:col-span-1 md:py-3 sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-white font-bold tracking-wide">Address</h3>
            <p className="text-lg font-medium text-center md:w-48 sm:text-left md:text-xl">Marangadan Puthussery Bldg,Nayathode (CIAL City 130),</p>
            <p className="text-lg font-medium text-center md:w-48 sm:text-left md:text-xl">Angamaly P.O, Ernakulam, Kerala, India, PIN : 683572</p>
          </div>
          {/* ::Email */}
          <div className="flex flex-col items-center col-span-2 px-4 pb-0 md:col-span-1 md:py-3 sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-white font-bold tracking-wide">Email</h3>
            <p className="inline-flex justify-center text-sm font-medium text-white sm:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="#email">info@teqardlabs.com</a>
            </p>
          </div>
          {/* ::Phone */}
          <div className="flex flex-col items-center col-span-2 px-4 pb-0 md:col-span-1 md:py-3 sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-white font-bold tracking-wide">Phone contact</h3>
            <p className="inline-flex justify-center text-sm font-bold text-white sm:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9496516291, +91 9645546443</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer


