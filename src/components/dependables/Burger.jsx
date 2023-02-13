
import React from 'react'


const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <button className="w-16 h-16 overflow-hidden text-white md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
      <span className="relative block w-full h-full">
        {/* ::Svg definition */}
        <svg className="absolute w-16 h-16">
          <defs>
            <filter id="gooeyness">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness"/>
              <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
            </filter>
          </defs>
        </svg>
        {/* ::Burger */}
        <svg className="absolute w-16 h-16 stroke-black" filter="url(#gooeyness)" version="1.1" viewBox="0 0 100 100">
          {/* Path 1 */}
          <path className="stroke-black stroke-6" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "50%", transition: "stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms", transitionDelay: "10ms" }} strokeDasharray={`${isOpen ? "5 185.62753295898438" : "21 185.62753295898438"}`} strokeDashoffset={`${isOpen ? "-141px" : "0px"}`} d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475" />
          {/* Path 2 */}
          <path className="stroke-black stroke-6" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "50%", transition: "stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms", transitionDelay: "30ms" }} strokeDasharray={`${isOpen ? "5 178.6514129638672" : "21 178.6514129638672"}`} strokeDashoffset={`${isOpen ? "-137px" : "0px"}`} d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034" />
          {/* Path 3 */}
          <path className="stroke-black stroke-6" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "50%", transition: "stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms", transitionDelay: "60ms" }} strokeDasharray={`${isOpen ? "5 197.92425537109375" : "21 197.92425537109375"}`} strokeDashoffset={`${isOpen ? "-176px" : "0px"}`} d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254" />
          {/* Path 4 */}
          <path className="stroke-black stroke-6" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "50%", transition: "stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms", transitionDelay: "90ms" }} strokeDasharray={`${isOpen ? "5 190.6597137451172" : "21 190.6597137451172"}`} strokeDashoffset={`${isOpen ? "-159px" : "0px"}`} d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525" />
          {/* Path 5 */}
          <path className="stroke-black stroke-6" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "50%", transition: "stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms", transitionDelay: "120ms" }} strokeDasharray={`${isOpen ? "5 208.52874755859375" : "21 208.52874755859375"}`} strokeDashoffset={`${isOpen ? "-139px" : "0px"}`} d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441" />
          {/* Path 6 */}
          <path className="stroke-black stroke-6" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "50%", transition: "stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms", transitionDelay: "150ms" }} strokeDasharray={`${isOpen ? "5 186.59703063964844" : "21 186.59703063964844"}`} strokeDashoffset={`${isOpen ? "-176px" : "0px"}`} d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695" />
        </svg>
        {/* ::Cross X */}
        <svg className="absolute w-16 h-16 stroke-black" style={{ transform: `${isOpen ? "scale(1)" : "scale(0)"}`, transition: `${isOpen ? "transform 400ms 350ms" : "transform 400ms"}` }} version="1.1" viewBox="0 0 100 100">
          <path className={`stroke-black stroke-6 transition-transform duration-500 ${isOpen ? "" : "delay-200"}`} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "50%", transition: `${isOpen ? "stroke-dasharray 400ms, stroke-dashoffset 400ms" : "stroke-dasharray 300ms 200ms, stroke-dashoffset 300ms 200ms"}` }} d="M 34,32 L 66,68" />
          <path className={`stroke-black stroke-6 transition-transform duration-500 ${isOpen ? "" : "delay-200"}`} fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "50%", transition: `${isOpen ? "stroke-dasharray 400ms, stroke-dashoffset 400ms" : "stroke-dasharray 300ms 200ms, stroke-dashoffset 300ms 200ms"}` }} d="M 66,32 L 34,68" />
        </svg>
      </span>
    </button>
  )
}

export default Burger
