import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Test from './components/Test'
  import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import BottomFooter from './components/BottomFooter'

const App = () => {
  return (
    <div className='w-[100%] auto flex flex-col bg-black'>
      <Nav/>
      <div className='w-full h-[90vh] text-white flex justify-center items-center flex-col'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Test' element={<Test/>}/>

      </Routes>

      </div>
      <Footer/>
      <BottomFooter/>
    </div>
  )
}

export default App