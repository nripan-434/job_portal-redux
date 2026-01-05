import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../features/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, token } = useSelector((state) => state.auth)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const handleinput = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    console.log(form)
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    dispatch(login(form))

  }
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    else if (user.admin) {
      navigate('/admin')
    }
    else if (user.type == 'jobseeker') {
      navigate('/home')
    }
    else if (user.type == 'employer') {
      navigate('/employer')
    }
  }, [user, token])


  return (
    <div className='h-screen  flex justify-center items-center bg-[#020617] '>
      <div className='flex justify-center  items-center '>
        <div className='w-100 h-100 flex flex-col justify-center text-white border backdrop-blur-2xl shadow-xl  p-6 rounded-xl'>
          <div className='flex justify-center'>
            <h1 className='text-[50px] font-[impact] mb-5 border-b'>Login</h1>
          </div>
          <form action="" onSubmit={handlesubmit} className='flex  flex-col gap-7'>
            <input onChange={handleinput} className='outline-0 text-white ' type="text" name='email' value={form.email} placeholder='enter your email' />
            <input onChange={handleinput} className='outline-0  text-white' type="password" name='password' value={form.password} placeholder='enter your password' />
            <button type='submit' className='bg-white text-black rounded p-2 shadow hover:shadow-xl duration-200'>Login</button>
            <div className='flex justify-center'>
              <p className='text-gray-500'>don't have an account? <Link to={'/register'} className='text-blue-400 border-b'>sign up</Link></p>

            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login


