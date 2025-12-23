import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { login } from '../features/AuthSlice'
import { useDispatch,useSelector } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    const {user,status} = useSelector(state => state.user)
  const [form,setForm]=useState({
    email:'',
    password:''
  })
  const handleinput=(e)=>{
    const {name,value}=e.target
    setForm((prev)=>({...prev,[name]:value}))
    console.log(form)
  }
  const  handlesubmit=(e)=>{
    e.preventDefault()
    dispatch(login(form))

   

  
  

    
  }
    
  return (
     <div className='h-screen  flex justify-center items-center bg-[#020617] '>
      <div className='flex justify-center  items-center '>
      <div className='w-100 h-100 flex flex-col justify-center text-white border backdrop-blur-2xl shadow-xl  p-6 rounded-xl'>
        <div className='flex justify-center'>
          <h1 className='text-[50px] font-[impact] mb-5 border-b'>Login</h1>
        </div>
      <form action="" onSubmit={handlesubmit} className='flex  flex-col gap-7'>
        <input onChange={handleinput} className='outline-0 text-white ' type="text" name='email' value={form.email} placeholder='enter your email' />
        <input onChange={handleinput} className='outline-0  text-white' type="text" name='password' value={form.password} placeholder='enter your password'/>
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


// import axios from 'axios'
// import  { useContext } from 'react'
// import { useState } from 'react'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'
// import { Authcontext } from '../context/Authcontext'
// import { Link } from 'react-router-dom'
// const Login = () => {
//   const navigate=useNavigate()
//   const {setToken,setUser,user}=useContext(Authcontext)
//   const [form,setForm]=useState({
//     email:'',
//     password:'',
//     seeker:''
//   })
//   const handleinput=(e)=>{
//     const {name,value}=e.target
//     setForm((prev)=>({...prev,[name]:value}))
//     console.log(form)
//   }
//   const  handlesubmit=async(e)=>{
//     e.preventDefault()
//     const res = await axios.post('http://localhost:5000/users/login',form)
    

//     if(res.data.error){
//     return toast.error(res.data.error)

//     }

//     toast.success(res.data.message)
//     setUser(res.data.currentuser)
//     setToken(res.data.token)

//     if(res.data.currentuser.admin==true){
//       navigate('/admin')
//     }
//     else{
//       navigate('/home')
//     }
  

    
//   }
    
//   return (
//      <div className="min-h-screen w-full  bg-[#020617] relative">
//       {/* Dark Sphere Grid Background */}

//       <div
//         className="absolute inset-0 z-0 flex justify-center items-center ml-3"
//         style={{
//           background: "#020617",
//           backgroundImage: `
//         linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
//         linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
//         radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
//       `,
//           backgroundSize: "32px 32px, 32px 32px, 100% 100%",
//         }}

//       >
//         <div className='flex justify-center  items-center '>
//       <div className='w-100 h-100 flex flex-col justify-center text-white border backdrop-blur-2xl shadow-xl  p-6 rounded-xl'>
//         <div className='flex justify-center'>
//           <h1 className='text-[50px] font-[impact] mb-5 border-b'>Login</h1>
//         </div>
//       <form action="" onSubmit={handlesubmit} className='flex  flex-col gap-7'>
//         <input onChange={handleinput} className='outline-0 text-white ' type="text" name='email' value={form.email} placeholder='enter your email' />
//         <input onChange={handleinput} className='outline-0  text-white' type="text" name='password' value={form.password} placeholder='enter your password'/>
//         <select onChange={handleinput} name="seeker" id=""  className='outline-0' >
//           <option className='outline-0 '  value='seeker'>seeker</option>
//           <option  className='outline-0'   value='provider'>provider</option>
//         </select>
//         <button type='submit' className='bg-white text-black rounded p-2 shadow hover:shadow-xl duration-200'>Login</button>
//         <div className='flex justify-center'>
//         <p className='text-gray-500'>don't have an account? <Link to={'/register'} className='text-blue-400 border-b'>sign up</Link></p>

//         </div>
//       </form>
//       </div>
//     </div>
//     </div>
//       </div>
    
//   )
// }

// export default Login
