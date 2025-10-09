import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const BottomFooter = () => {
  return (
    <div className='w-full h-[7vh] bg-blue-900 flex flex-row justify-center gap-[20px] items-center'>
    <span className='flex flex-row gap-[10px] justify-center items-center text-white'>
    <MdOutlineMail/>
        <p><span className='font-bold text-white p-[3px]'>Email:</span> Aurora2025@gmail.com </p>
    </span>
    <span className='flex flex-row gap-[10px] justify-center items-center text-white'>
    <IoIosContact/>
        <p><span className='font-bold text-white p-[3px]'>Contact:</span>7204624715</p>
    </span>
    <span className='flex flex-row gap-[10px] justify-center items-center text-white'>
        <FaGithub/>
        <p> <span> github:</span> <a href="https://github.com/jeevan-sathish/ai-health-chat.git"> For more</a></p>
    </span>
    

    </div>
  )
}

export default BottomFooter