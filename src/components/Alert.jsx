import React from 'react'
import { XIcon } from '@heroicons/react/solid'
export default function Alert() {
  return (
    <div>
          <div className="relative mx-2 p-4 max-w-4xl flex space-x-2 shadow rounded bg-green-50 text-sm">
        {/* :::alert title */}
        <h3 className="whitespace-nowrap text-green-800 font-semibold">Well done!</h3>
        {/* :::alert message */}
        <p className="text-green-600 font-medium antialiased">You successfully read this important alert message.</p>
        {/* :::dismiss button */}
        <button type="button" className="group absolute -top-2 -right-2 w-6 h-6 inline-flex justify-center items-center rounded-full bg-green-100 hover:bg-green-600">
          <XIcon className="w-4 h-4 text-green-600 group-hover:text-white" />
        </button>
      </div>
    </div>
  )
}
