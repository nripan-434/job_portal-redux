import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userapplications } from '../../features/ApplicationSlice'
import Spinner from '../../components/Spinner'
const UserApplications = () => {
    const { userapplies, status } = useSelector(state => state.application)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        if (user) {
            dispatch(userapplications(user.id))
            console.log(userapplies)

        }
    }, [user])
    return (
        <div className='min-h-screen bg-[#020617] text-white p-4 flex flex-col gap-4 text-black' >
            {
                status === 'pending' ? <Spinner /> :
                    userapplies?.map(x => {
                        return <div key={x._id} className='flex justify-between bg-gray-800 p-6 rounded-xl'>
                            <div>
                                <h1>Company Name: {x.job.companyname}</h1>
                                <h1>Role: {x.job.jobtitle}</h1>
                                <h1>Location: {x.job.location}</h1>
                                <h1 >Description: <Link className='text-blue-400 underline'>job description</Link></h1>
                                <h1>Jobtype: {x.job.jobtype}</h1>
                                <h1>Salary: {x.job.salary}</h1>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h1>Email: {x.email}</h1>
                                <h1 className={`bg-gray-500 rounded-md p-1  w-50 ${x.status === 'accepted' ? 'bg-green-600' : 'bg-red-600'}`}>Status :  {x.status == 'pending' ? "No reply" : x.status == 'accepted' ? "Congratulations,You are selected for the role,check you mail for Offer letter " : 'rejected'}</h1>
                            </div>
                        </div>
                    })
            }
        </div>
    )
}

export default UserApplications
