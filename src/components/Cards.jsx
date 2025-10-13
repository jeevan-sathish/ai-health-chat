import React from 'react'
import { IoLogoAppleAr } from "react-icons/io5";

const Cards = ({data}) => { 
  return (
    <div >
         <span className='flex flex-row gap-3 text-center items-center text-blue-400 text-[30px] font-bold'>
        <IoLogoAppleAr className='text-[40px]'/>
         <h1 > Benifits </h1>
    </span>
    <div className='w-full h-[300px] flex flex-row flex-wrap justify-center items-center gap-7 mb-2.5'>
    {
        data.map((ele)=>(
            <div 
            key={ele.id}
            className='w-[200px] animate-none h-[200px] rounded-[20px]
             flex flex-col justify-center items-center text-center bg-blue-950 gap-2
                hover:scale-90 transform-transition duration-100
             '
            >
           <p className='text-[50px]'>{ele.icon}</p> 
           <p> "{ele.title}"</p>
           <p className='text-blue-200'>{ele.description}</p>
            

            </div>
        ))
    }

    </div>

    </div>
  )
}

export default Cards