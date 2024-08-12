import React from 'react'

export default function MenuItem(title, address, Icon) {
  return (
    <Link>
        <Icon />
        <p>{title}</p>
    </Link>
  )
}
