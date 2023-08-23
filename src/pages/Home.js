import React from 'react'
import img1 from "../awiro/pexels-cátia-matos-1072179.jpg"
import Login from './Login'
const Home = () => {
  return (
    <div className=' bg-gray-300  h-screen  w-full flex justify-between items-center max-sm:flex-col max-md:flex-col max-lg:flex-col max-sm:h-[1000px] max-sm:text-center  '  >
        
<div className=' h-full  w-full relative    '>
<img  src={img1} className=' relative w-full h-full object-cover  opacity-90 '/>



<Login/>







</div>

<div className='  flex flex-col justify-center items-center h-full w-full  px-12  bg-gradient-to-l from-yellow-700 to-pink-800  '>

<h1 className=' lg:text-2xl text-lg  font-extralight tracking-widest text-yellow-50  p-2'> Welcome to our web development website!   </h1>
<p className='  text-white text-lg lg:text-3xl  p-2 rounded-lg text-center mb-7'>
  You will learn all the fundemantals of all forentEnd in just 2month
  </p>


  <h1 className=' mb-5 text-2xl text-blue-300 border-b-2'>Skills we teach</h1>
<ul className=' flex lg:gap-6  gap-3  '>

<li className=' shadow-2xl p-5 shadow-black lg:p-8 text-lg  text-white'>HTML</li>
<li className=' shadow-2xl p-5 shadow-black lg:p-8 text-lg  text-white'>Css</li>
<li className=' shadow-2xl p-5 shadow-black lg:p-8 text-lg  text-white'>Javascript</li>
<li className=' shadow-2xl p-5 shadow-black lg:p-8 text-lg  text-white'>React</li>
</ul >


 
</div>









    </div>
  )
}

export default Home