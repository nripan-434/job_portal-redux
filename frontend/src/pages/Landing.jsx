import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useSelector, useDispatch } from 'react-redux'
import { getalljob } from '../features/JobSlice'
import { Link } from 'react-router-dom'

const Landing = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getalljob)
  }, [])
  const { jobs } = useSelector(state => state.job)
  return (
    <div className='text-white bg-[#020617] min-h-screen'>

      <div className='sm:p-20 p-5  flex flex-col justify-center  '>
        <h1 className='animate-pulse text-white  duration-200   font-[impact] text-[80px] sm:text-[90px]'>Turn your skills into success.  </h1>
        <p className=' text-white  text-4xl duration-300 font-[impact]  '>Don’t wait for the perfect moment—create your next move today</p> </div>
      <div className='flex justify-center '>
        <div className='bg-[#020617] border p-1 lg:w-100 w-64  md:p-1 rounded-md  '>
          <form action="" className=' w-full  text-white border-white p-1 h-9 rounded flex justify-between   bg-transparent   '>
            <input type="text" className=' bg-[#020617]     backdrop-blur-sm rounded outline-0' placeholder='search "job keywords"' />
            <button ><CiSearch className='cursor-pointer text-3xl text-white' /></button>
          </form>
        </div>
      </div>
      <div className='p-6 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
        {
          jobs?.map(x => {
            return <div className=' group flex justify-between hover:-translate-y-3 shadow z-10  duration-300 transition-all bg-gray-300 text-black hover:bg-gray-200  p-2 rounded-md'>
              <div>
                <h1 className={'font-[Calibri] group-hover:underline transition-all  text-2xl '}>{x.companyname}</h1>
                <h2>{x.jobtitle}</h2>
                <h2>{x.jobtype}</h2>
                <h2>{x.salary}</h2>
                <h2>{x.location}</h2>
              <Link className='text-blue-600 underline' to={'/login'}>Apply for the role</Link>

              </div>
              <div>
                <h2 className=''>{new Date(x.updatedAt).toLocaleDateString()}</h2>
              </div>

            </div>
          })
        }
      </div>

    </div>

  )
}

export default Landing
