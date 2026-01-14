
import { FaRegBookmark } from "react-icons/fa6";
import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion"

import { FaBookmark } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addtobookmark, removebookmark } from "../features/JobSlice";
import { AnimatePresence } from "framer-motion";
const JobCards = ({ jobs, joblist }) => {
  const { user } = useSelector((state) => (state.auth))
  const navigate = useNavigate()
  const [select, setSelect] = useState(null)
  const dispatch = useDispatch()
  return (
    <div className="relative">
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  '>
        {
          jobs?.map(x => {
            return <div className='flex justify-between  flex-col gap-3 group hover:-translate-y-3 bg-[#d4d4d4] hover:bg-white duration-200 text-black rounded-sm m-3 overflow-hidden border' key={x._id}>
              <div className="flex items-center justify-between pr-3">
                <h1 className=' font-[impact] text-[30px]  pl-3 pt-3  group-hover:underline duration-300 group-hover:translate-x-2'>{x.companyname}</h1>
                {
                  x.bookmark ? <FaBookmark className="hover:cursor-pointer text-2xl" onClick={async () => {
                    await dispatch(removebookmark({ jobid: x._id }))
                    dispatch(joblist())
                  }} /> : <FaRegBookmark onClick={async () => {
                    await dispatch(addtobookmark({ jobid: x._id }))
                    dispatch(joblist())
                  }} className="hover:cursor-pointer text-2xl" />
                }

              </div>
              <div className='p-2 flex flex-col  gap-2'>
                <h2>Job role :{x.jobtitle}</h2>
                <h3>Location :{x.location}</h3>
                <h3>Job type :{x.jobtype}</h3>
                <Link className='text-blue-800  underline' onClick={() => { setSelect(x) }}  >more details</Link>
                <h3>Salary range :{x.salary}</h3>
                <button className='bg-black shadow hover:shadow-md text-gray-200 hover:text-white duration-300 p-1 rounded-md' onClick={() => { navigate(`/application/${x._id}`) }}>Apply</button>
                <h1>{new Date(x.updatedAt).toLocaleString()}</h1>
              </div>

            </div>
          })
        }
      </div>
        <AnimatePresence>
          {
            select?<div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
              <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={() => setSelect(null)}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white text-black w-full max-w-lg p-6 rounded-lg shadow-2xl z-10"
      >
        <h1 className="font-[impact] text-3xl mb-2">{select.companyname}</h1>
        <hr className="mb-4" />
        
        <div className="space-y-3">
          <p><strong>Role:</strong> {select.jobtitle}</p>
          <p><strong>Location:</strong> {select.location}</p>
          <p><strong>Type:</strong> {select.jobtype}</p>
          <p><strong>Salary:</strong> {select.salary}</p>
          <p className="pt-2 text-gray-600 border-t">
            <strong>Description:</strong> {select.jobdetails || "No description provided."}
          </p>
        </div>

        <div className="mt-6 flex gap-2">
          <button 
            className="flex-1 bg-black text-white p-2 rounded"
            onClick={() => { navigate(`/application/${select._id}`); setSelect(null); }}
          >
            Apply Now
          </button>
          <button 
            className="flex-1 border p-2 rounded"
            onClick={() => setSelect(null)}
          >
            Close
          </button>
        </div>
      </motion.div>
            </div>:''
          }
        </AnimatePresence>
    </div>
  )
}

export default JobCards
