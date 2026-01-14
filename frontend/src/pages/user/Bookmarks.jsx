import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobCards from '../../components/JobCards'
import { getallbookmarks } from '../../features/JobSlice'

const Bookmarks = () => {
    const {bookmarks}=useSelector(s=>s.job)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getallbookmarks())
        console.log(bookmarks)
    },[bookmarks])
  return (
    <div className='bg-[#020617] text-white h-screen'>
      {
       bookmarks.length>0? 
      <JobCards jobs={bookmarks} joblist={getallbookmarks}/>:
      <div className='flex justify-center mt-8' >No bookmarks yet!</div>


      }
    </div>
  )
}

export default Bookmarks
