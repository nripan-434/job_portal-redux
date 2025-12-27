import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { getalljob } from '../features/JobSlice';
import JobCards from '../components/JobCards';
const Userhome = () => {
  const dispatch = useDispatch()
  const { jobs } = useSelector((state) => state.job)
  useEffect(() => {
    dispatch(getalljob())
  }, [])

  return (
    <div className="min-h-screen w-full  bg-[#020617] relative ">




      <div className=' p-10 lg:pl-6 gap-3 flex flex-col lg:pt-40 lg:justify-start justify-center h-70 sm:h-90 md:h-120 lg:h-200 bg-cover bg-[url(https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg)]'>
        <h1 className=' rounded-xl   text-[#020617] lg:backdrop-blur-none md:backdrop-blur-sm     font-[impact] md:text-5xl sm:text-3xl   md:w-100  lg:w-full '>Search Between More Then <span className='text-gray-100'>50,000</span> Open Jobs.</h1>
        <h3 className='    xl:w-200 w-80     text-amber-50 font-[impact] sm:text-2xl   md:w-200 leading-loose'>Trending Jobs Keywords: <span className='bg-[#020617]  p-1 rounded-md '>Web Designer</span> <span className='bg-[#020617]  p-1 rounded-md'>Web Developer</span> <span className='bg-[#020617]  p-1 rounded-md'>IOS Developer</span> <span className='bg-[#020617]  p-1 rounded-md' >Android Developer</span></h3>
        <div className='bg-[#020617] lg:w-100 w-64  md:p-1 rounded-md '>
          <form action="" className=' w-full  text-white border-white p-1 h-9 rounded flex justify-between   bg-transparent   '>
            <input type="text" className=' bg-[#020617]     backdrop-blur-sm rounded outline-0' placeholder='search "job keywords"' />
            <button ><CiSearch className='cursor-pointer text-3xl text-white' /></button>
          </form>
        </div>
      </div>



      <div className='flex justify-center backdrop-blur-2xl p-4  bg-black'>
        <div className='  justify-center bg-white p-2 mt-4 md:w-90  rounded flex  '>
          <button className='bg-black md:p-4 p-2 hover:bg-gray-600 duration-100 shadow-xl rounded-l-xl  text-white w-25 md:w-40'>latest</button>
          <button className='bg-black md:p-4 p-2 hover:bg-gray-600 duration-100 shadow-xl   rounded-r-xl text-white  w-25 md:w-40'>recent jobs</button>
        </div>
      </div>
      <JobCards jobs={jobs}/>

    </div>

  )
}

export default Userhome
