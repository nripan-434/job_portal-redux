
import { FaRegBookmark } from "react-icons/fa6";
import React from 'react'
import { FaBookmark } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addtobookmark, getalljob, removebookmark } from "../features/JobSlice";
const JobCards = ({jobs}) => {
  const {user}=useSelector((state)=>(state.auth))
    const navigate = useNavigate()

    const dispatch=useDispatch()
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  '>
      {
        jobs?.map(x => {
          return <div className='flex  flex-col gap-3 group hover:-translate-y-3 bg-[#d4d4d4] hover:bg-white duration-200 text-black rounded-sm m-3 overflow-hidden border' key={x._id}>
            <div className="flex items-center justify-between pr-3">
            <h1 className=' font-[impact] text-[30px]  pl-3 pt-3  group-hover:underline duration-300 group-hover:translate-x-2'>{x.companyname}</h1>
            {
              x.bookmark?<FaBookmark className="hover:cursor-pointer text-2xl" onClick={async()=>{
                await dispatch(removebookmark({jobid:x._id}))
            dispatch(getalljob())}} />: <FaRegBookmark onClick={async()=>{
              await dispatch(addtobookmark({jobid:x._id}))
              dispatch(getalljob())
            }} className="hover:cursor-pointer text-2xl" />
            }
           
            </div>
            <div className='p-2 flex flex-col gap-2'>
                <h2>Job role :{x.jobtitle}</h2>
            <h3>Location :{x.location}</h3>
            <h3>Job type :{x.jobtype}</h3>
            <Link className='text-blue-800  underline'  >more details</Link>
            <h3>Salary range :{x.salary}</h3>
            <button className='bg-black shadow hover:shadow-md text-gray-200 hover:text-white duration-300 p-1 rounded-md' onClick={()=>{navigate(`/application/${x._id}`)}}>Apply</button>
            <h1>{new Date(x.updatedAt).toLocaleString()}</h1>
            </div>

          </div>
        })
      }
    </div>
  )
}

export default JobCards
