import React from 'react'

const Spinner = () => {
    return (
        <div className='p-3 flex justify-center text-white'>
            <div className='h-10 w-10 border-4 rounded-full border-t-transparent animate-spin'></div>
        </div>
    )
}

export default Spinner
