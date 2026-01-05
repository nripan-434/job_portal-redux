import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userapplications, withdrawapplication } from '../../features/ApplicationSlice'
import Spinner from '../../components/Spinner'
const UserApplications = () => {
    const { userapplies, status } = useSelector(state => state.application)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        
        if (user) {
            dispatch(userapplications(user.id))
        }
    }, [user])
    return (
        <div className='min-h-screen bg-[#020617]  p-4 flex flex-col gap-4 text-white' >
            {
                userapplies[0]==null?<h1 className='flex justify-center'>apply for roles</h1>:
                status === 'pending' ? <Spinner /> :
                    userapplies?.map(x => {
                        return <div key={x._id} className='flex overflow-hidden overflow-x-auto   justify-between bg-gray-800 p-6 rounded-xl'>
                            <div className='flex flex-col gap-3'>
                                <h1 className=' rounded-md p-1  text-2xl'>Company Name: {x.job.companyname}</h1>
                                <h1>Role: {x.job.jobtitle}</h1>
                                <h1>Location: {x.job.location}</h1>
                                <h1 >Description: <Link className='text-blue-400 underline'>job description</Link></h1>
                                <h1>Jobtype: {x.job.jobtype}</h1>
                                <h1>Salary: {x.job.salary}</h1>
                                {
                                x.status==='withdraw'?<Link className='bg-white text-black flex justify-center p-1 w-45 rounded active:scale-95 shadow-xl duration-200' to={`/reapply/${x._id}/${x.job._id}`}>Re-Apply for the role</Link>:
                                ['pending','reapplied'].includes(x.status)?
                                <Link className={`bg-gray-500 w-40  rounded p-1 hover:bg-gray-400 duration-300 active:scale-95 `} onClick={async()=>{
                                    await dispatch(withdrawapplication(x.job._id))
                                    dispatch(userapplications(user.id))
                                    }}>withdraw applicaltion</Link>:''

                    }   
                            </div>
                            <div className='flex flex-col gap-9 justify-between '>
                                <h1>Email: {x.email}</h1>
                                <h1 className={`bg-gray-500 rounded-md p-1  w-50 ${['accepted','reapplied'].includes(x.status) ? 'bg-green-600' : 'bg-red-800'}`}>Status :  {x.status == 'pending' ? "No reply" : x.status == 'accepted' ? "Congratulations,You are selected for the role,check you mail for Offer letter " : x.status==='withdraw'?'Application withrawn':x.status==='reapplied'?'Reapplied':'rejected'}</h1>
                            </div>
                        </div>
                    })
            }
        </div>
    )
}

export default UserApplications
