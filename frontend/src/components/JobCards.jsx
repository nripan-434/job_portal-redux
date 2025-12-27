

import React from 'react'

const JobCards = ({jobs}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {
        jobs?.map(x => {
          return <div className='text-white m-3 p-2 border' key={x._id}>
            <h1>{x.name}</h1>
            <h1>{x.email}</h1>
            <h1>{x.contact}</h1>
            <h1>{x.jobdetails}</h1>
            <h1>{x.jobtype}</h1>
            <h1>{x.salary}</h1>
            <h1>{x.location}</h1>
            <h1>{new Date(x.updatedAt).toLocaleString()}</h1>

          </div>
        })
      }
    </div>
  )
}

export default JobCards
