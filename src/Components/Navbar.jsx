import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div  className='flex gap-4 dark:bg-gray-600 bg-green-200 font-semibold p-4 justify-center'>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
