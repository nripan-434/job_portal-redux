import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const LandingJobcards = ({jobs}) => {
  return (
     <div className='p-6 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
          {
            jobs?.map(x => {
              return <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ background: "#e5e7eb", y: -12 }}
                transition={{ duration: 0.6, y: { duration: 0.2 } }} className=' group flex justify-between  shadow z-10    bg-gray-300 text-black   p-2 rounded-md'>
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

              </motion.div>
            })
          }
        </div>
  )
}

export default LandingJobcards
