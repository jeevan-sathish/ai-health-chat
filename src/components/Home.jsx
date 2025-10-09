import React from 'react'
import { SiGoogleassistant } from "react-icons/si";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='text-center justify-center flex flex-col items-center gap-[30px] '>
   
    <span className='flex flex-row justify-start items-center '>
 <SiGoogleassistant className='text-[200px] text-blue-600 animate-pulse mx-auto'/>

    </span>
   <div className='p-[30px]'>
    <span className='text-[80px] text-blue-500'>  wellcome to <span className='text-[80px] text-blue-600 animate-pulse'>Aurora Ai,</span></span><br />
    <span className='text-[30px] p-o m-o leading-0'>your personal health assistant.Query Up and get resolved </span>

   </div>
   

    <button className='w-[250px]  h-[50px] rounded-[30px] bg-green-500 text-black hover:bg-green-600'><Link to='/Test'>Get Your Agent</Link></button>

    </div>
  )
}

export default Home