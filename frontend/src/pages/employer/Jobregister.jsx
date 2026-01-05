import React, { useContext } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobreg } from '../../features/JobSlice'

const Jobregister = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        companyname: '',
        jobtitle: '',
        location: '',
        salary: '',
        jobdetails: '',
        jobtype: 'fulltime',
        employer:user.id

    })
    const handleinput = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        console.log(user.id)
        console.log(form)
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        dispatch(jobreg({ ...form, employer: user.id }))
        setForm({
            companyname: '',
            jobtitle: '',
            location: '',
            salary: '', 
            jobdetails: '',
            jobtype: 'fulltime',
            employer:user.id

        })
    }

    return (
        <div className='flex bg-url[]  h-screen justify-center items-center bg-[#020617] text-white p-5'>
            <div className='flex border rounded-xl '>
                <div><img src="https://images.pexels.com/photos/16516/pexels-photo.jpg" className='h-full md:h-150 w-40 hover:w-60 duration-100 object-cover rounded-l-xl ' alt="" /></div>
                <div className='flex flex-col'>
                    <div className='flex-1 font-[impact] text-2xl justify-center items-center flex rounded-tr-xl border border-l-0 '> JOB REGISTRATION</div>
                    <form action="" className='flex flex-5  justify-center  flex-col text-white gap-5 border border-t-0 border-l-0 rounded-br-xl  p-6 w-100' onSubmit={handlesubmit} >
                        <input onChange={handleinput} className='outline-0' name='companyname' value={form.companyname} type="text" placeholder='Enter companyname' />
                        <input onChange={handleinput} className='outline-0' name='jobtitle' value={form.jobtitle} type="text" placeholder='Enter jobtitle' />
                        <input onChange={handleinput} className='outline-0' name='location' value={form.location} type="text" placeholder='Enter location' />
                        <input onChange={handleinput} className='outline-0' name='salary' value={form.salary} type="text" placeholder='Enter salary range' />
                        <input onChange={handleinput} className='outline-0' name='jobdetails' value={form.jobdetails} type="text" placeholder='Enter jobdetails' />
                        <div >
                            Job type:
                            <select className='outline-0' name="jobtype" onChange={handleinput} id="">
                                <option value="fulltime">Full time</option>
                                <option value="parttime">Part time</option>
                            </select>
                        </div>
                        <button type='submit' className='border rounded-lg p-3'>add jobpost </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Jobregister
