import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/educator'

const Educator = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Educator