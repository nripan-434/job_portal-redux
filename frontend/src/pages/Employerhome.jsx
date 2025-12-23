import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CiSearch } from 'react-icons/ci'
import React from 'react'

const Employerhome = () => {
    const [from, setForm] = useState({
        name: '',
        jobdetails: '',
        location: '',
        email: '',
        contact: ''
    })
    const handleinput = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        console.log(form)

    }
    const handlesubmit = async (e) => {
        e.preventDefault()


    }
    return (
        
                <div className="min-h-screen w-full  bg-[#020617] relative ">




      <div className=' p-10 lg:pl-6 gap-3 flex flex-col lg:pt-40 lg:justify-start justify-center h-70 sm:h-90 md:h-120 lg:h-180 bg-cover bg-[url(https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg)]'>
        <h1 className=' rounded-xl   text-[#020617] lg:backdrop-blur-none md:backdrop-blur-sm     font-[impact] md:text-5xl sm:text-3xl   md:w-100  lg:w-full '>Search Between More Then <span className='text-gray-100'>50,000</span> Open Jobs.</h1>
        <h3 className='    xl:w-200 w-80     text-amber-50 font-[impact] sm:text-2xl   md:w-200 leading-loose'>Trending Jobs Keywords: <span className='bg-[#020617]  p-1 rounded-md '>Web Designer</span> <span className='bg-[#020617]  p-1 rounded-md'>Web Developer</span> <span className='bg-[#020617]  p-1 rounded-md'>IOS Developer</span> <span className='bg-[#020617]  p-1 rounded-md' >Android Developer</span></h3>
       
      </div>
        <div className='   flex flex-col md:flex-row h-40  border-t-5 text-white backdrop-blur-sm p-4 '>
                        <div className='flex-5  shadow-xl  rounded-xl backdrop-blur-4xl flex justify-center items-center pt-3'>
                            <h1 className='font-[impact] md:text-3xl'> <span className='text-gray-400'>Post </span> job Vacancies <span className='text-gray-400'>Here </span> : <Link className='bg-gray-400 rounded-md p-1' to={'/jobregister'}>register</Link> </h1>
                        </div>
                        <div className='flex-2 ml-2 rounded-xl'>

                        </div>

                    </div>


     
     

    </div>
            

       
    )
}

export default Employerhome