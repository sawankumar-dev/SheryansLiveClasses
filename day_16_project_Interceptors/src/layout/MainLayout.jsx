import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <ToastContainer/>
        <Navbar/>
        <div className='h-full bg-gray-400 w-full p-2'>
        <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout