import React, { useState } from 'react'


const InputEffect1 = ({ refInput, labelInput, typeInput, idInput, placeholder }) => {

  const [focused, setFocused] = useState(false)

  return (
    <div className="relative overflow-hidden" >
      {/* Label */}
      <label htmlFor="email" className="sr-only">{labelInput}</label>
      {/* Input */}
      <input ref={refInput} type={typeInput} name={idInput} id={idInput} placeholder={placeholder}
        className="form-input w-full border-0 border-b-2 border-gray-300 bg-transparent text-sm placeholder-gray-300 focus:border-gray-300 focus:ring-0"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {/* Border bottom effect */}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-400 transition-all duration-500 ease-in transform ${focused ? "w-full" : "w-0"}`} aria-hidden="true" />
    </div>
  )
}

export default InputEffect1
