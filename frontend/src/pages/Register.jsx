import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reg } from '../features/AuthSlice.js'
const Register = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    type: 'employer'
  })
  const handleinput = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    console.log(form)
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(reg(form))
    setForm({
      name: '',
      email: '',
      password: '',
      type: 'employer'
    })
  }


  return (
    <div className="min-h-screen w-full  bg-[#020617] relative">
      <div
        className="absolute inset-0 z-0 flex justify-center items-center ml-3"
        style={{
          background: "#020617",
          backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}

      >


        <div className=' backdrop-blur-2xl p-3 border text-white rounded-xl w-100 h-110 '>
          <div className='flex  justify-center items-center '>
            <h1 className='text-white font-[impact] text-[50px] m-5 border-b mb-11'>Register</h1>
          </div>

          <form action="" onSubmit={handlesubmit} className=' rounded-xl p-3 shadow  hover:shadow-xl duration-300 h-50 flex flex-col justify-center  gap-6'>
            <input type="text" className='outline-0 text-white' onChange={handleinput} name='name' value={form.name} placeholder='enter your name' />
            <input type="text" className='outline-0 text-white' onChange={handleinput} name='email' value={form.email} placeholder='enter your email' />
            <input type="text" className='outline-0 text-white' onChange={handleinput} name='password' value={form.password} placeholder='enter your password' />
            <div className='flex gap-2 text-gray-400'>
              <label >Register As:</label>
              <select className='text-gray-300 outline-0 ' onChange={handleinput} name="type" id="">
                <option className='text-black ' value="employer">Employer</option>
                <option className='text-black' value="jobseeker">Job Seeker</option>
              </select>
            </div>
            <button type='submit' className='bg-white w-full p-2 rounded-xl text-black shadow w-40 '>Register</button>
            <div className='flex justify-center'>
              <p className='text-gray-500'>have an account? <Link to={'/login'} className='text-blue-400 border-b'>sign in</Link></p>

            </div>
          </form>


        </div>
      </div>
    </div>
  )
}

export default Register
