import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { changestatus, getapplicants } from '../../features/ApplicationSlice';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
const Applicants = () => {
  const dispatch = useDispatch();
  const { applicants, status } = useSelector(state => state.application)
  const { jobid } = useParams();

  const [appstatus, setAppstatus] = useState({})
  const handleStatusChange =(e,id)=>{
    const {value}=e.target
    setAppstatus((prev)=>({...prev,[id]:value}))
  }
  useEffect(() => {
    dispatch(getapplicants(jobid))
    console.log(applicants)
    console.log(appstatus)
  }, [jobid])

  return (
    <div className='bg-[#020617] text-white pt-4  h-screen'>
      {status === 'pending' ? <Spinner /> :
        applicants[0] == null ? <div className='flex justify-center pt-20'>no applicantions yet!</div> :
          <div className='flex flex-col gap-4'>
            {
              applicants.map(x => {
                return <div className='text-white rounded-xl flex flex-col gap-2 m-2 bg-gray-800 p-2' key={x._id}>
                  <h1 className='font-[Trebuchet_MS] text-2xl'>Applicant name: {x.user.name}</h1>
                  <h1 className='font-[Trebuchet_MS] text-2xl'>Applicant MailId: {x.email}</h1>
                  <h2 className='font-[Trebuchet_MS] '>Applicant address:{x.address}</h2>
                  <h2 className='font-[Trebuchet_MS] w-60 '>Applicant request:{x.message}</h2>
                 {
                  ['pending','reapplied'].includes(x.status)? <select onChange={(e)=>{handleStatusChange(e,x._id)}} value={appstatus[x._id]} className='bg-gray-800 outline-1 rounded-full p-1'>
                    <option value="accepted">recruit</option>
                    <option value="rejected">reject</option>
                    <option value="pending">interview</option>
                  </select>:null
                 }
                  <form className='flex justify-center' onSubmit={async (e) => {
                    e.preventDefault()
                    await dispatch(changestatus({ id: x._id, status: appstatus[x._id]||'accepted' }))
                    dispatch(getapplicants(jobid))
                  }} >
                    <button type='submit' className='bg-white p-1 rounded-md font-[impact] shadow-md active:scale-95 text-black'>submit</button>
                  </form>
                  <div className='flex'>
                   <div className={`rounded-md p-2  ${x.status==='accepted'?'bg-green-500':'bg-red-500'}`}>Status : {x.status=='withdraw'?'application is withdrawn by the applicant':x.status}</div> 

                  </div>

                </div>
              })
            }
          </div>
      }

    </div>
  )
}

export default Applicants
