'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({title, param}) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
  return (
    <div>
        <Link
            className={`hover:text-green-500 font-semibold p-2
            ${genre === param 
                ? "underline underline-offset-8 decoration-4 decoration-green-400 rounded-lg" 
                : ""}`}            
            href={`/?genre=${param}`}>{title}
        </Link>
    </div>
  )
}
