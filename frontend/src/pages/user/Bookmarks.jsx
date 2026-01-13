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
    },[])
  return (
    <div className='bg-[#020617] h-screen'>
      <JobCards jobs={bookmarks}/>
    </div>
  )
}

export default Bookmarks
