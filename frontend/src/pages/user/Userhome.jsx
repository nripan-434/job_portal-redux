import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from 'react-redux';
import { clearjobsearch, getalljob, jobsearch } from '../../features/JobSlice';
import JobCards from '../../components/JobCards';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Spinner from '../../components/Spinner';
import { FaSpinner } from 'react-icons/fa6';
const Userhome = () => {
  const dispatch = useDispatch()
  const { jobs,jobsearchs,status } = useSelector((state) => state.job)
  const [search,setSearch]=useState('')
  useEffect(() => {
    dispatch(getalljob())
  }, [])
  const handleinput = (e) =>{
   setSearch(e.target.value)
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(jobsearch(search))
    console.log(search)
  }

  return (
    <div className="flex-grow overflow-y-auto w-full  bg-[#020617] relative ">




      <div className=' p-10 lg:pl-6 gap-3 flex flex-col lg:pt-40 lg:justify-start justify-center h-100 sm:h-90 md:h-120 lg:h-150 bg-cover bg-bottom bg-[url(https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg)]'>
        <h1 className=' rounded-xl   text-[#020617]      font-[impact] md:text-5xl sm:text-3xl text-2xl  md:w-100  lg:w-full '>Search Between More Then <span className='text-gray-100'>50,000</span> Open Jobs.</h1>
        <h3 className='    xl:w-200 w-full    text-amber-50 font-[impact] sm:text-2xl   md:w-200 leading-loose'>Trending Jobs Keywords: <span className='bg-[#020617]  p-1 rounded-md '>Web Designer</span> <span className='bg-[#020617]  p-1 rounded-md'>Web Developer</span> <span className='bg-[#020617]  p-1 rounded-md'>IOS Developer</span> <span className='bg-[#020617]  p-1 rounded-md' >Android Developer</span></h3>
        <div className='bg-[#020617] lg:w-100 w-64  md:p-1 rounded-md  '>
          <form action="" onSubmit={handlesubmit}  className=' w-full  text-white border-white p-1 h-9 rounded flex justify-between items-center  bg-transparent   '>
            <input type="text" onChange={handleinput} value={search}  className=' bg-[#020617]     backdrop-blur-sm rounded outline-0' placeholder='search "job keywords"' />
            {search?<button type='button' onClick={()=>{setSearch('')
              dispatch(clearjobsearch())
            }}><IoMdClose  className='text-2xl' /></button>:''}
            {
              status==='pending'?<FaSpinner className='animate-spin'/>:
              <button type='submit' ><CiSearch className='cursor-pointer text-3xl text-white' /></button>

            }
          </form>
        </div>
      </div>

      <div className='border-b text-white'>{
        status==='pending'?<Spinner/>:
        jobsearchs==null ?
        <h1 className='p-3 flex justify-center'>No job results found on "{search}"</h1>
        
        :jobsearchs[0]==null?'':
        <>
        <h1 className=' underline text-[25px] p-3'>results on <span className='text-blue-500 italic'>"{search}"</span></h1>        
        <JobCards jobs={jobsearchs} />
        </>
        
        }
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
