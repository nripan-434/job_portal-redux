import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/AuthSlice'
const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <div className='h-20   bg-[#020617] '>
      <div className= '  border-b  w-full h-full  flex items-center text-white    '>
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
        </div>




      </div>

      )
}

      export default Navbar
