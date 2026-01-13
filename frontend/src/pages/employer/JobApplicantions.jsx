import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getjobapplications, removejob } from '../../features/JobSlice';
import Spinner from '../../components/Spinner';
 

const JobApplicantions = () => {
    const dispatch = useDispatch();
    const {user}=useSelector((state)=>state.auth)
    const {jobapplications,status}=useSelector((state)=>state.job);
    useEffect(()=>{
        dispatch(getjobapplications(user.id))
    },[])    
    return (
        <div className='flex flex-col gap-3 p-4 pt-5 bg-[#020617] flex-grow overflow-y-auto'>
            {
                jobapplications[0]==null?<h1 className='flex text-white justify-center'>no applications yet!</h1>:
                status==='pending'?<Spinner/>:
                jobapplications.map(x => {
                    return <div className='bg-gray-900 rounded-md text-white p-3 flex justify-between' key={x._id}> 
                        
                        <div>
                            <h1>{x.companyname}</h1>
                            <h2>{x.jobtitle}</h2>
                            <h2>{x.jobtype}</h2>
                            <h2>{x.location}</h2>
                            <h2>{x.salary}</h2>

                        </div>
                        <div className='flex gap-3 justify-center items-center'>
                            <Link className='bg-red-700 rounded-md p-1 active:scale-95' onClick={async()=>{ 
                                await dispatch(removejob(x._id)) 
        dispatch(getjobapplications(user.id))

                            }}>remove job</Link>

                                <Link className='bg-gray-500 p-1 rounded-md active:scale-95' to={`/applicants/${x._id}`}>Applications</Link>
                            
                        </div>

                    </div>
                })
            }
        </div>

    )
}

export default JobApplicantions
