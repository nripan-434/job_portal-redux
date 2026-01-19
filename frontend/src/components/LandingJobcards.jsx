import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRegBookmark } from "react-icons/fa6";


const LandingJobcards = ({jobs}) => {
  return (
     <div className='p-6 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
          {
            jobs?.map(x => {
              return <div key={x._id}>
                <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ background: "#e5e7eb", y: -12 }}
                transition={{ duration: 0.6, y: { duration: 0.2 } }} className=' group flex  justify-between items-end  shadow z-10    bg-gray-300 text-black   p-2 rounded-md relative'>
                <div className='flex flex-col gap-3 '>

                  <Link  to={'/login'}><FaRegBookmark className="absolute right-3 top-6 hover:cursor-pointer text-2xl" /></Link> 
                  <h1 className={'font-[Calibri] group-hover:underline transition-all  text-3xl '}>{x.companyname}</h1>
                  <h2 className='text-[20px]'>Role: {x.jobtitle}</h2>
                  <h2 className='text-[20px]'>{x.jobtype}</h2>
                  <h2 className='text-[20px]'>Package: {x.salary}</h2>
                  <h2 className='text-[20px]'>Place: {x.location}</h2>
                  <Link className='text-[20px] text-blue-600 underline' to={'/login'}>Apply for the role</Link>

                </div>
                <div>
                  <h2 className=''>Date:{new Date(x.updatedAt).toLocaleDateString()}</h2>
                </div>

              </motion.div>
              </div>
            })
          }
        </div>
  )
}

export default LandingJobcards
