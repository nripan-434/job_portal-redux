import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useSelector, useDispatch } from 'react-redux'
import { clearjobsearch, getalljob, jobsearch } from '../features/JobSlice'
import {  motion } from "framer-motion"

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
    <div className='text-white bg-[#020617] flex-grow overflow-y-auto'>
      <div className='sm:p-20 p-5  flex flex-col justify-center  '>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-8'>

          <div className='text-white     font-[impact] text-[80px] sm:text-[90px]'>
            Turn your skills into success.  </div>
          <p className=' text-white  text-4xl duration-300 font-[impact]  '>Don’t wait for the perfect moment—create your next move today</p>
        </motion.div>
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
              <LandingJobcards jobs={jobs}/>

      </div >
    </div>

  )
}

export default Landing
