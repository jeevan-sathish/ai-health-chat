import React from 'react'
import { SiGoogleassistant } from "react-icons/si";

const Footer = () => {
  return (
    <div className='w-full h-[30vh] bg-blue-950 flex flex-row justify-center items-center gap-[20px] text-blue-400'>

    <div className='title p-[10px] '>
        <span className='flex flex-row gap-2'>
            <h1>Aurora Ai  </h1>
            <SiGoogleassistant className='text-[18px] '/>
            <p>This is the right agent that can help you to find your helath balances and more</p>
        </span>
    </div>
    

    </div>
  )
}

export default Footer