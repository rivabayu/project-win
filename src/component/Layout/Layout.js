import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

function Layout() {
  return (
    <div className='bg-neutral-100 overflow-hidden flex flex-row w-full'>
        <Sidebar/>
        <div className='flex flex-col flex-1'>
            <Header/> 
            <div className="flex-1 p-4 min-h-0 overflow-auto" >{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default Layout