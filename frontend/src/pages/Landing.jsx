import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useSelector, useDispatch } from 'react-redux'
import { clearjobsearch, getalljob, jobsearch } from '../features/JobSlice'
import { motion } from "framer-motion"
import vid from '../assets/video/landingvid.mp4'
import { useRef } from 'react'

import React from 'react'
import { FaSpinner } from 'react-icons/fa6'
import JobCards from '../components/JobCards'
import { IoMdClose } from 'react-icons/io'
import Spinner from '../components/Spinner'
import LandingJobcards from '../components/LandingJobcards'
import { useNavigate } from 'react-router-dom'
const Landing = () => {
  const jobSection =useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
  useEffect(() => {
    if (jobsearchs && jobsearchs.length > 0 && jobSection.current) {
      jobSection.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [jobsearchs])
  return (
    <div className='text-white  bg-[#020617]  flex-grow overflow-y-auto'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" z-0 opacity-40 w-full h-screen  max-w-none object-cover"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=' absolute top-20 md:top-60 flex p-4 flex-col justify-center  '>
        <div className=' justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=' ml-8  mb-8'>

            <div className='text-white    font-[impact] text-[80px] flex bg-[url(https://www.pexels.com/download/video/3205619/)] items-center sm:text-[90px]'>
              Turn your skills into success.  </div>
            <p className=' text-white  text-4xl duration-300 font-[impact]  '>Don’t wait for the perfect moment—create your next move today</p>
          </motion.div>

        </div>

        <div className='flex ml-8 '>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            className='bg-[#020617]  p-1 lg:w-100 w-64  md:p-1 rounded-md  '>
            <form action="" onSubmit={handlesubmit} className=' w-full  text-white p-1 h-9 rounded flex justify-between items-center  bg-transparent   '>
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
           <div  className={`  text-white `}>{
            status === 'pending' ? '' :
              jobsearchs && jobsearchs.length > 0 ?
               '' : emptyres ? <h1 className='text-white  flex ml-8 p-4 text-xl gap-2 '>no results found on <span className='italic text-blue-300  underline'>"{emptyres}"</span> </h1> : ''
          }
          </div>
        </div>


      </div >
      <div className='text-white'>
        {status !== 'pending' && jobsearchs?.length > 0 && (
          <div ref={jobSection} className='border-b scroll-mt-24'>
                  <h1 className='  text-[25px] ml-5 p-3 flex gap-2'>results on  <span className='underline text-blue-300 italic'> "{searchword}"</span></h1>
            <LandingJobcards jobs={jobsearchs} />
          </div>
        )}
      </div>
      
      <LandingJobcards jobs={jobs} />

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="self-start ml-4 md:ml-20 p-6 max-w-lg  mt-4 backdrop-blur-lg rounded-2xl shadow-xl"
      >
        <p className="font-bold text-gray-300  text-xl md:text-2xl font-sans leading-relaxed">
          "The only way to do great work is to <span className="text-blue-400 font-bold not-italic">love</span> what you do."
        </p>
        <span className="block mt-4 text-sm font-mono text-gray-500">— Steve Jobs</span>
      </motion.div>
      <div className='flex flex-col p-5 justify-center text-black    sm:flex-col overflow-hidden p-4  mb-10'>
        <div className='font-[impact] border-t-2 border-white pt-4 underline mb-3 text-3xl   flex gap-1 items-center justify-center mb-8 border-b-2 pb-4'><span className='text-white'>Secure</span> <span className='text-gray-300'>Your</span>  <span className='text-white'> Career</span></div>
        <div className=' relative'>
          <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className='p-5 text-white italic text-2xl md:absolute md:top-24  md:w-100 md:ml-4 xl:ml-39   md:leading-[2.5]'>"Success isn't just about finding a job; it's about building a <span className='text-gray-400 font-bold'>future</span> where your skills meet their match."</motion.div>
        <div className='relative m-6 h-95 md:left-50   group sm:h-110 xl:left-140'>
          <div className='overflow-hidden absolute duration-300 group-hover:blur hover:shadow-2xl hover:!blur-none active:scale-95 hover:z-40 hover:scale-103   h-35 sm:left-30  sm:h-50 left-15 md:left-45 text-white'><img className='rounded-xl object-cover h-full w-full' src="https://images.pexels.com/photos/9841334/pexels-photo-9841334.jpeg" alt="" /></div>
          <div className=' overflow-hidden absolute duration-300 active:scale-95 hover:z-40 hover:shadow-2xl hover:scale-103 group-hover:blur-sm hover:!blur-none h-35 sm:left-50 sm:h-50 left-25 top-30 md:left-75'><img className='object-cover h-full w-full rounded-xl' src="https://images.pexels.com/photos/18848929/pexels-photo-18848929.jpeg" alt="" /></div>
          <div className=' overflow-hidden absolute transition-all duration-300  group-hover:blur-sm hover:shadow-2xl  hover:!blur-none duration-300 active:scale-95 hover:z-40 hover:scale-103 h-35 sm:h-50 left-35 sm:left-70 top-60 md:left-105 '><img className=' object-cover h-full w-full rounded-xl' src="https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg" alt="" /></div>

        </div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="self-end mr-4 mt-14 md:mr-20 p-6 max-w-lg backdrop-blur-lg m-2 font-bold rounded-2xl shadow-xl text-right"
        >
          <p className="text-gray-300  text-xl md:text-2xl font-sans leading-relaxed">
            "Opportunities don't happen. You <span className="text-purple-400 font-bold not-italic">create</span> them."
          </p>
          <span className="block mt-4 text-sm font-mono text-gray-500">— Chris Grosser</span>
        </motion.div>
       <div>
         <div className="relative py-4 px-6 overflow-hidden flex justify-center items-center">
      

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl p-12  text-center"
      >
        
        {/* Animated Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-[impact] text-4xl md:text-6xl text-white mb-6 tracking-tight uppercase"
        >
          Ready to <span className="text-blue-500">Secure</span> Your Future?
        </motion.h2>

        {/* The Quote */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl font-sans italic max-w-2xl mx-auto mb-10"
        >
          "The best way to predict the future is to create it. Start your journey with our network of top-tier employers today."
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(170, 169, 169, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-white text-black font-bold rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
          onClick={()=>{navigate('/login')}}
        >
          Get Started Now
        </motion.button>

      </motion.div>
    </div>
       </div>
      </div>
      
    </div>

  )
}

export default Landing
// bg-[#020617]