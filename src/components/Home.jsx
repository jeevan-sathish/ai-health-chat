import React from 'react'
import { SiGoogleassistant } from "react-icons/si";

const Home = () => {
  return (
    <div className='text-center '>
   
    <span className='flex flex-row justify-start items-center'>
 <SiGoogleassistant className='text-[200px] text-blue-600 animate-pulse mx-auto'/>

    </span>
   
      <span className='text-[80px] text-blue-500'>  wellcome to <span className='text-[80px] text-blue-600 animate-pulse'>Aurora Ai,</span></span><br />
        <span className='text-[30px] p-o m-o'>your personal health assistant.Query Up and get resolved </span>

    </div>
  )
}

export default Home