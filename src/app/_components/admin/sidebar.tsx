import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-1/5 bg-slate-200 min-h-screen'>
        <h1 className="text-2xl">Sidebar</h1>
        <ul>
            <li>Dashboard</li>
            <li><Link href="/admin/banners">Banners</Link></li>
            <li>Users</li>
        </ul>
    </div>
  )
}
