

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const JobCards = ({jobs}) => {
    const navigate = useNavigate()
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-start'>
      {
        jobs?.map(x => {
          return <div className='flex flex-col gap-3  hover:bg-gray-800 text-white rounded-xl m-3 overflow-hidden border' key={x._id}>
            <h1 className=' font-[impact] text-[30px] border-b pl-3 pt-3 hover:underline'>{x.companyname}</h1>
            <div className='p-2 flex flex-col gap-2'>
                <h2>Job role :{x.jobtitle}</h2>
            <h3>Location :{x.location}</h3>
            <h3>Job type :{x.jobtype}</h3>
            <Link className='text-blue-800  underline'  >more details</Link>
            <h3>Salary range :{x.salary}</h3>
            <button className='bg-white text-gray-500 duration-300 hover:text-black p-1 rounded-md' onClick={()=>{navigate('/application')}}>Apply</button>
            <h1>{new Date(x.updatedAt).toLocaleString()}</h1>
            </div>

          </div>
        })
      }
    </div>
  )
}

export default JobCards
