import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUsersRectangle } from "react-icons/fa6";

const Employerhome = () => {
  return (
    <div className="min-h-screen w-full  bg-[#020617] relative ">
      <div className=' p-10 lg:pl-6 gap-3 flex flex-col lg:pt-40 lg:justify-start justify-center h-70 sm:h-90 md:h-120 lg:h-180 bg-cover bg-[url(https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg)]'>
        <h1 className=' rounded-xl   text-[#020617] lg:backdrop-blur-none md:backdrop-blur-sm     font-[impact] md:text-5xl sm:text-3xl   md:w-100  lg:w-full '>Search Between More Then <span className='text-gray-100'>50,000</span> Open Jobs.</h1>
        <h3 className='    xl:w-200 w-80     text-amber-50 font-[impact] sm:text-2xl   md:w-200 leading-loose'>Trending Jobs Keywords: <span className='bg-[#020617]  p-1 rounded-md '>Web Designer</span> <span className='bg-[#020617]  p-1 rounded-md'>Web Developer</span> <span className='bg-[#020617]  p-1 rounded-md'>IOS Developer</span> <span className='bg-[#020617]  p-1 rounded-md' >Android Developer</span></h3>
      </div>
      <div className='   flex  gap-3  flex-col md:flex-row h-40  border-t-5 text-white backdrop-blur-sm p-4 '>
        <div className='flex-5 bg-gray-900  shadow-[0_0_10px_rgba(0,0,0,8.25)]  rounded-xl backdrop-blur-4xl p-4 flex justify-center items-center text-2xl sm:text-none '>
          <h1 className='font-light md:text-3xl'> <span className='text-gray-400'>Post </span> job Vacancies <span className='text-gray-400'>Here </span> : <Link className='bg-gray-500 active:scale-90 rounded-md p-1 hover:bg-gray-600 duration-200' to={'/jobregister'}>register</Link> </h1>
        </div>
        <div className='flex-2 p-4 shadow-[0_0_10px_rgba(0,0,0,8.25)] flex bg-gray-900 justify-center items-center ml-2 rounded-xl'>
           <Link className='flex justify-center items-center gap-3 font-light text-3xl active:scale-90 bg-gray-500  text-white duration-200 hover:bg-gray-600 rounded-md p-2' to={'/jobapplicantions'}>Posted Jobs <FaUsersRectangle   className='text-3xl' /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Employerhome