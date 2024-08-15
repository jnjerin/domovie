'use client'

import { useEffect } from 'react'

export default function error({error, reset}) {
    useEffect(() => {
        console.log(error)
    }, [error])

  return (
    <div className='text-center mt-10'>
        <h2>Something went wrong</h2>
        <button className='hover:text-green-600 font-bold bg-gray-600 rounded-md py-1 px-2 ' onClick={() => reset()}>Try again</button>
    </div> 
  )

}
