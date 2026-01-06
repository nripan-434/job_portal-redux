import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { applicationreg } from '../../features/ApplicationSlice'
const Applications = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.auth.user
  })
 
  const { jobid } = useParams()
   useEffect(()=>{
    console.log(jobid)
  },[])
  const [form, setform] = useState({
    user: user.id,
    job: jobid,
    email: '',
    address: '',
    contact: '',
    message: ''
  })
  const handleinput = ((e) => {
    const { name, value } = e.target
    setform((prev) => ({ ...prev, [name]: value }))

  })
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(applicationreg(form))
  }

  return (
    <div className='flex bg-[#020617] text-white  justify-center flex-grow overflow-y-auto p-8 items-center'>
      <div className='w-100 p-17 rounded-md border'>
        <form action="" onSubmit={handlesubmit} className='flex flex-col gap-10  '>
          <h1 className='font-[impact] text-4xl'>Application</h1>
          <div className='flex flex-col gap-4'>
            <input className='outline-0' onChange={handleinput} type="text" name='email' value={form.email} placeholder='enter applicant email address' />
            <input className='outline-0' onChange={handleinput} type="text" name='address' value={form.address} placeholder='enter applicant address' />
            <input className='outline-0' onChange={handleinput} type="text" name='contact' value={form.contact} placeholder='enter applicant contact number' />
            <input className='outline-0' onChange={handleinput} type="text" name='message' value={form.message} placeholder='enter request' />
            <button type='submit' className='bg-white mt-8 active:scale-95 duration-100 text-black rounded-md p-1'>Apply</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Applications
