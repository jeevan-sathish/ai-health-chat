import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' text-white w-full h-[10vh] bg-black border-b-2 sticky top-0 z-50 border-b-green-900 flex flex-row justify-center items-center gap-[20px]'>
     <span className='text-blue-500 font-extrabold '><Link to='/'>Aurora AI</Link></span>
     
     <ul className='flex flex-row justify-center items-center gap-10 m-[10px] p-[10px] text-[15px] font-medium  '>
        <li  className='hover:underline'><Link to='/'>Home</Link></li>
        <li className='hover:underline'><Link to='/About'>About</Link></li>
        <li className='hover:underline'><Link to='/Test'>Test</Link></li>
     </ul>
    </div>
  )
}

export default Nav