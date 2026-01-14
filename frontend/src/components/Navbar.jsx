import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/AuthSlice'

import { AnimatePresence, motion } from 'framer-motion';
const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const [menu, setMenu] = useState(false)
  useEffect(() => {
  if (!user) {
    navigate('/')
  }
}, [user, navigate])
  const dispatch = useDispatch()
  return (
    <div className='h-20 fixed top-0 left-0 w-full z-50 bg-[#020617]'>

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
              <div className='cursor-pointer font-[impact] text-gray-300  text-4xl ' onClick={() => {
                user.admin == true ? navigate('/admin') : user.type == 'jobseeker' ? navigate('/home') : navigate('/employer')
              }}>UVZ.in</div>
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
                          }}>logout</button>

                        </div></> : user.type == 'jobseeker' ? <><div className='flex gap-3'>
                          <div className='flex gap-3'>
                            <Link to={'/home'}>Home</Link>
                            <Link to={'/bookmarks'}>Bookmarks</Link>
                            <Link to={'/userapplications'}>Applications</Link>
                            <button onClick={() => {
                            dispatch(logout())

                            }}>logout</button>
                          </div>
                        </div></> : <><div className='flex gap-3'>
                          <div className='flex gap-3'>
                            <Link   className='hover:scale-105 duration-100' to={'/employer'}>Home</Link>
                            <Link   className='hover:scale-105 duration-100' to={'/jobapplicantions'}>Posted Jobs</Link>
                            <Link   className='hover:scale-105 duration-100' to={'/jobregister'}>Post Job</Link>
                            <button className='hover:scale-105 duration-100'onClick={() => {
                            dispatch(logout())

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
                          transition={{duration:0.3}} className={menu ? ' sm:hidden  fixed top-20 left-0 overflow-hidden shadow-xl  bg-gray-500 right-0 w-full ' : 'hidden'}>

                  {
                    user.admin == true ?

                      <>
                        <div className='flex flex-col'>
                          <Link className='hover:bg-white active:scale-95 duration-300 hover:text-black p-4'>adminhome</Link>
                          <Link className='hover:bg-white duration-300 hover:text-black p-4'>about</Link>
                          <Link className='cursor-pointer hover:bg-red-700 duration-300 hover:text-white p-4' onClick={() => {
                            setMenu(false)
                          }}>logout</Link>

                        </div></> : user.type == 'jobseeker' ? <>
                          <div
                           className='flex flex-col  '>
                            <Link onClick={()=>{setMenu(false)}}  className='hover:bg-white duration-300 hover:text-black p-4' to={'/home'}>Home</Link>
                            <Link onClick={()=>{setMenu(false)}}  className='hover:bg-white duration-300 hover:text-black p-4' to={'/bookmarks'}>Bookmarks</Link>
                            <Link onClick={()=>{setMenu(false)}}  className='hover:bg-white duration-300 hover:text-black p-4' to={'/userapplications'}>Applications</Link>
                            <Link   className='cursor-pointer hover:bg-red-700 duration-300  hover:text-white p-4'  
                            onClick={() => {
                              setMenu(false)
                            dispatch(logout())

                            }}>logout</Link>
                        </div></> : <>
                          <div className='flex flex-col'  >
                            <Link   onClick={()=>{setMenu(false)}}  className='hover:bg-white duration-300 hover:text-black p-4' to={'/employer'}>Home</Link>
                            <Link  onClick={()=>{setMenu(false)}}  className='hover:bg-white duration-300 hover:text-black p-4' to={'/jobapplicantions'}>Posted Jobs</Link>
                            <Link   onClick={()=>{setMenu(false)}}  className='hover:bg-white duration-300 hover:text-black p-4' to={'/jobregister'}>Post Job</Link>
                            <Link className='cursor-pointer hover:bg-red-700 duration-300 hover:text-white p-4' onClick={() => {
                              setMenu(false)
                            dispatch(logout())

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