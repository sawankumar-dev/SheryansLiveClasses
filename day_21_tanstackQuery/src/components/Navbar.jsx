import React from 'react'
import { NavLink } from 'react-router'
import { LogOut } from 'lucide-react';
import Filter from './Filter';
const Navbar = () => {
  return (
    <div className='flex justify-between fixed w-full p-4 items-center bg-gray-900 border-b border-gray-400'>
        <div className="brand" >
            <h2>MyStore</h2>
        </div>
        <nav className='flex gap-5'>
            <NavLink className={({isActive}) => {
              return isActive ? "text-red-400": "text-white"
            }} to={"/main"}>Home</NavLink>

            <NavLink className={({isActive}) => {
              return isActive ? "text-red-400": "text-white"
            }}  to={"/main/shop"}>Shop</NavLink>
            
            <NavLink className={({isActive}) => {
              return isActive ? "text-red-400": "text-white"
            }}  to={"/main/about"}>About</NavLink>
        </nav>
        <div className='flex gap-5'>
          <h2>Hey, dev</h2>
          <button>Cart</button>
          <LogOut/>
        </div>
    </div>
  )
}

export default Navbar