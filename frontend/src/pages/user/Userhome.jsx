import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { getalljob } from '../../features/JobSlice';
import JobCards from '../../components/JobCards';
import { Link } from 'react-router-dom';
const Userhome = () => {
  const dispatch = useDispatch()
  const { jobs } = useSelector((state) => state.job)
  useEffect(() => {
    dispatch(getalljob())
  }, [])

  return (
    <div className="flex-grow overflow-y-auto w-full  bg-[#020617] relative ">




      <div className=' p-10 lg:pl-6 gap-3 flex flex-col lg:pt-40 lg:justify-start justify-center h-100 sm:h-90 md:h-120 lg:h-150 bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg)]'>
        <h1 className=' rounded-xl   text-[#020617]      font-[impact] md:text-5xl sm:text-3xl text-2xl  md:w-100  lg:w-full '>Search Between More Then <span className='text-gray-100'>50,000</span> Open Jobs.</h1>
        <h3 className='    xl:w-200 w-full    text-amber-50 font-[impact] sm:text-2xl   md:w-200 leading-loose'>Trending Jobs Keywords: <span className='bg-[#020617]  p-1 rounded-md '>Web Designer</span> <span className='bg-[#020617]  p-1 rounded-md'>Web Developer</span> <span className='bg-[#020617]  p-1 rounded-md'>IOS Developer</span> <span className='bg-[#020617]  p-1 rounded-md' >Android Developer</span></h3>
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
          <button className='bg-black md:p-4 p-2 hover:bg-gray-600 duration-100 shadow-xl    text-white  w-25 md:w-60'>recent jobs</button>
          <Link className='bg-black md:p-4 p-2 hover:bg-gray-600 duration-100 shadow-xl   rounded-r-xl text-white  w-35 md:w-80' to={'/userapplications'} >My Applications</Link>
        </div>
      </div>
      <JobCards jobs={jobs}/>

    </div>

  )
}

export default Userhome
