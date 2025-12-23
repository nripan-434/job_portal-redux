import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='h-20 bg-[#020617] '>
      {/* <div className={user ? 'border-b  backdrop-blur-md  w-full h-full  flex justify-between items-center text-white' : 'border-b p-4   w-full h-full  flex justify-between items-center text-white'}>

        {
          !user ? <><div >
            <button className=' font-[impact] text-gray-300  text-4xl ' onClick={() => {
              navigate('/')
            }}>UVZ.in</button>
          </div>
          </>
            :
            <div className='cursor-pointer' onClick={() => {




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
                    logout()
                  }}>logout</button>

                </div></> : user.type == 'jobseeker' ? <><div className='flex gap-3'>
                  <div className='flex gap-3'>
                    <Link>userhome</Link>
                    <Link>about</Link>
                    <button onClick={() => {
                      logout()
                    }}>logout</button>
                  </div>
                </div></> : <><div className='flex gap-3'>
                  <div className='flex gap-3'>
                    <Link>employerhome</Link>
                    <Link>about</Link>
                    <button onClick={() => {
                      logout()
                    }}>logout</button>
                  </div>
                </div></>


        }


      </div> */}




    </div>

  )
}

export default Navbar
