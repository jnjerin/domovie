import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-green-600'>
        <Icon className='text-2xl sm:hidden' />
        <p className='font-bold uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
