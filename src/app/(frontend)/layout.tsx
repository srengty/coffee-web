import React from 'react'
import Menu from '../_components/menu'

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Menu/>
        {children}
    </div>
  )
}
