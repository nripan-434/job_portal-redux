import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/AuthSlice'

import { AnimatePresence, motion } from 'framer-motion';
const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const [menu, setMenu] = useState(false)
  const dispatch = useDispatch()
  return (
    <div className='h-20    bg-[#020617] '>
      <div className='  border-b  w-full h-full  flex items-center text-white    '>
        <div className={user ? '  p-3 backdrop-blur-md  w-full h-full  flex justify-between items-center text-white' : ' p-4   w-full h-full  flex justify-between items-center text-white'}>
          {
            !user ? <><div >
              <button className=' font-[impact] text-gray-300  text-4xl ' onClick={() => {
                navigate('/')
              }}>UVZ.in</button>
            </div>
            </>
              :
              <div className='cursor-pointer ' onClick={() => {
                user.admin == true ? navigate('/admin') : user.type == 'jobseeker' ? navigate('/home') : navigate('/employer')
              }}>Home</div>
          }

          {
            !user ? <div className='flex justify-center items-center'>
              <Link className='' to={'/login'}>sign in</Link>
            </div> :
              <div>


                
                <div className={'hidden sm:block'}>

                  {
                    user.admin == true ?

                      <>
                        <div className='flex  gap-3'>
                          <Link>adminhome</Link>
                          <Link>about</Link>
                          <button onClick={() => {
                            dispatch(logout())
                            navigate('/')
                          }}>logout</button>

                        </div></> : user.type == 'jobseeker' ? <><div className='flex gap-3'>
                          <div className='flex gap-3'>
                            <Link to={'/home'}>userhome</Link>
                            <Link>about</Link>
                            <button onClick={() => {
                              dispatch(logout())
                              navigate('/')
                            }}>logout</button>
                          </div>
                        </div></> : <><div className='flex gap-3'>
                          <div className='flex gap-3'>
                            <Link>employerhome</Link>
                            <Link>about</Link>
                            <button onClick={() => {
                              dispatch(logout())
                              navigate('/')
                            }}>logout</button>
                          </div>
                        </div></>
                  }
                </div>
                <div >
                  <div className='flex sm:hidden flex-col gap-2 cursor-pointer' onClick={()=>{setMenu(!menu)}}>
                  <span    className={`h-0.5 w-7 bg-white transition-all duration-300 ${menu?'translate-y-2.5 rotate-45 ':''} `}></span>   
                  <span className={`h-0.5 w-7 bg-white transition-all duration-300 ${menu?' opacity-0':'opacity-100'} `}></span>
                  <span   className={`h-0.5 w-7 bg-white transition-all duration-300 ${menu?'-translate-y-2.5 -rotate-45 ':''} `}></span>
                  </div>
                </div>
                <AnimatePresence>
                <motion.div
                          key={menu}
                          initial={{height:0}}
                          animate={{height:'auto'}}
                          exit={{height:0}}
                          transition={{duration:0.3}} className={menu ? 'z-50 sm:hidden fixed top-20 overflow-hidden shadow-xl  bg-gray-500 right-0 w-full ' : 'hidden'}>

                  {
                    user.admin == true ?

                      <>
                        <div className='flex flex-col'>
                          <Link className='hover:bg-white active:scale-95 duration-300 hover:text-black p-4'>adminhome</Link>
                          <Link className='hover:bg-white duration-300 hover:text-black p-4'>about</Link>
                          <Link className='cursor-pointer hover:bg-red-700 duration-300 hover:text-white p-4' onClick={() => {
                            dispatch(logout())
                            navigate('/')
                          }}>logout</Link>

                        </div></> : user.type == 'jobseeker' ? <>
                          <div
                           className='flex flex-col  '>
                            <Link to={'/home'} className='hover:bg-white duration-300  hover:text-black p-4'>userhome</Link>
                            <Link className='hover:bg-white duration-300   hover:text-black p-4'>about</Link>
                            <Link className='cursor-pointer hover:bg-red-700 duration-300  hover:text-white p-4' onClick={() => {
                              dispatch(logout())
                              navigate('/')
                            }}>logout</Link>
                        </div></> : <>
                          <div className='flex flex-col'  >
                            <Link className='hover:bg-white duration-300 hover:text-black p-4'>employerhome</Link>
                            <Link className='hover:bg-white duration-300 hover:text-black p-4'>about</Link>
                            <Link className='cursor-pointer hover:bg-red-700 duration-300 hover:text-white p-4' onClick={() => {
                              dispatch(logout())
                              navigate('/')
                            }}>logout</Link>
                          </div>
                        </>
                  }
                </motion.div>
                </AnimatePresence>

              </div>
          }

        </div>
      </div>




    </div>

  )
}

export default Navbar


// <div className={`h-0.5 w-6 bg-white transition-all duration-300 transform ${menu ? 'rotate-45 translate-y-2' : ''}`} />
//                 <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${menu ? 'opacity-0' : ''}`} />
//                 <div className={`h-0.5 w-6 bg-white transition-all duration-300 transform ${menu ? '-rotate-45 -translate-y-2' : ''}`} />