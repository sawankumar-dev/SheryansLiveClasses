import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div>
        <h2>Main layout</h2>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout