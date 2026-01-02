import React, { useContext } from 'react'

const Adminhome = () => {
  // const { user } = useContext(Authcontext)
  return (
    <div className="min-h-screen w-full bg-[#020617] relative">

      <div
        className="absolute inset-0 z-0    md:flex    text-white"
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
        <div className='sm:flex-7 md:flex-2 flex flex-col  backdrop-blur-md '>
          <div className='text-white p-5   flex-3 flex border-b  flex-col   justify-center items-center'>
            <img className='hover:scale-105 duration-300 h-[150px] w-[150px] border-3    object-cover mt-5 rounded-full' src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg" alt="" />
            <h1>Admin:</h1>

          </div>
          <div className=' flex-7 backdrop-blur-2xl p-3'>
            <select name="" id="" className='w-full outline-0 '>
              <option value="">Actions</option>
            </select>
          </div>
        </div>
        <div className=' border-l flex flex-col gap-3 sm:flex-7  md:flex-8 backdrop-blur-sm'>
          <div className='flex-3 m-5 shadow-xl backdrop-blur-xl'>
          Dashboard
          </div>
          <div className='flex-3 backdrop-blur-xl grid p-3 gap-2 sm:grid-cols-1 md:grid-cols-3 '>
            <div className='backdrop-blur-xl shadow-xl'>as</div>
            <div className='backdrop-blur-xl shadow-xl'>sd</div>
            <div className='backdrop-blur-xl shadow-xl'>fg</div>
            
          </div>
          <div className='flex-3'>section</div>
        </div>
          

          
      </div>

    </div>
  )
}

export default Adminhome
