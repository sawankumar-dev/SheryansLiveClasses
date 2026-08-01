import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'

const MainLayout = () => {
  return (
    <div className='bg-gray-800 text-white'>
        <Navbar/>

        <div className='min-h-screen pt-4 w-full flex justify-center'>
          <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout