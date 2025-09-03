import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div>
      <ul className='flex gap-2 bg-amber-200 p-2'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/counter">Counter</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}
