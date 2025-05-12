import React from 'react'
import { Outlet } from 'react-router-dom'

const Educator = () => {
  return (
    <div>
      Educators Page
      <Outlet />
    </div>
  )
}

export default Educator