import React from 'react'
import { GiPlatform } from "react-icons/gi";

const FormHeader = () => {
  return (
    <div className='w-full h-[10vh] bg-blue-950 flex flex-row justify-center items-center sticky top-0 z-50'>
    <span className='flex flex-row gap-[10px] justify-center items-center text-white'> 
    <GiPlatform  className='text-[40px] text-amber-600'/>
    <h1 className='text-[20px] font-bold'>Let’s <span className='text-amber-500'>Power</span> <span className='text-[15px]'>Up — Please Fill Out Your Information</span> </h1>
    </span>

    </div>
  )
}

export default FormHeader