import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/educator'

const Educator = () => {
  return (
    <div className='flex md:flex-row flex-col min-h-[80vh]'>
      <div className=''><Sidebar /></div>
      <Outlet />
    </div>
  )
}

export default Educator