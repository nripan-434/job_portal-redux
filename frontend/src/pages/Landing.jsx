import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useSelector, useDispatch } from 'react-redux'
import { clearjobsearch, getalljob, jobsearch } from '../features/JobSlice'
import { motion } from "framer-motion"

import React from 'react'
import { FaSpinner } from 'react-icons/fa6'
import JobCards from '../components/JobCards'
import { IoMdClose } from 'react-icons/io'
import Spinner from '../components/Spinner'
import LandingJobcards from '../components/LandingJobcards'
const Landing = () => {
  const dispatch = useDispatch()
  const { jobs, jobsearchs, status, searchword, emptyres } = useSelector((state) => state.job)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getalljob())
    console.log(status)
  }, [])
  const handleinput = (e) => {
    setSearch(e.target.value)
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(jobsearch(search))
  }
  return (
    <div className='text-white  bg-[#020617]  flex-grow overflow-y-auto'> 
      <div className=' flex flex-col justify-center  '>
        <div className=' justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=' ml-8  mb-8'>

            <div className='text-white   font-[impact] text-[80px] sm:text-[90px]'>
              Turn your skills into success.  </div>
            <p className=' text-white  text-4xl duration-300 font-[impact]  '>Don’t wait for the perfect moment—create your next move today</p>
          </motion.div>
           
         </div>
         <div className='flex flex-col p-5 justify-center text-black  bg-gray-300  sm:flex-col overflow-hidden p-4  mb-10'>
            <div className='font-[impact] underline mb-3 text-3xl   flex gap-1 items-center justify-center'><span className='text-gray-500'>Secure</span> Your <span className='text-gray-500'> Career</span></div>
            <div className='h-2 bg-black w-full'></div>

           <div className='relative m-6 h-95  group sm:h-110 xl:left-70'>
             <div className='overflow-hidden absolute duration-300 group-hover:blur hover:shadow-2xl hover:!blur-none active:scale-95 hover:z-40 hover:scale-103   h-35 sm:left-30  sm:h-50 left-15 md:left-45 '><img className='rounded-xl object-cover h-full w-full' src="https://images.pexels.com/photos/9841334/pexels-photo-9841334.jpeg" alt="" /></div>
            <div className=' overflow-hidden absolute duration-300 active:scale-95 hover:z-40 hover:shadow-2xl hover:scale-103 group-hover:blur-sm hover:!blur-none h-35 sm:left-50 sm:h-50 left-25 top-30 md:left-75'><img className='object-cover h-full w-full rounded-xl' src="https://images.pexels.com/photos/18848929/pexels-photo-18848929.jpeg" alt="" /></div>
            <div className=' overflow-hidden absolute transition-all duration-300  group-hover:blur-sm hover:shadow-2xl  hover:!blur-none duration-300 active:scale-95 hover:z-40 hover:scale-103 h-35 sm:h-50 left-35 sm:left-70 top-60 md:left-105 '><img className=' object-cover h-full w-full rounded-xl' src="https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg" alt="" /></div>
           </div>
            <div className='h-2 bg-black w-full'></div>

          </div>
        <div className='flex justify-center '>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            className='bg-[#020617] border p-1 lg:w-100 w-64  md:p-1 rounded-md  '>
            <form action="" onSubmit={handlesubmit} className=' w-full  text-white border-white p-1 h-9 rounded flex justify-between items-center  bg-transparent   '>
              <input type="text" onChange={handleinput} value={search} className=' bg-[#020617] backdrop-blur-sm rounded outline-0' placeholder='search "job keywords"' />
              <div className='flex items-center'>
                {search ? <button type='button' onClick={() => {
                  setSearch('')
                  dispatch(clearjobsearch())
                }}><IoMdClose className='text-2xl' /></button> : ''}

                {
                  status === 'pending' ? <FaSpinner className='animate-spin' /> :
                    <button type='submit' ><CiSearch className='cursor-pointer text-3xl text-white' /></button>
                }
              </div>

            </form>

          </motion.div>
          
        </div>
        
        <div>
          <div className={`  text-white `}>{
            status === 'pending' ? <Spinner /> :
              jobsearchs && jobsearchs.length > 0 ?
                <>
                  <h1 className=' underline text-[25px] p-3'>results on <span className='text-blue-500 italic'>"{searchword}"</span></h1>
                  <LandingJobcards jobs={jobsearchs} />
                </> : emptyres ? <h1 className='text-white flex justify-center p-4 text-xl '>no results found on <span className='italic underline'>"{emptyres}"</span> </h1> : ''
          }
          </div>
        </div>
        
        <LandingJobcards jobs={jobs} />
          
      </div >
    </div>

  )
}

export default Landing
// bg-[#020617]