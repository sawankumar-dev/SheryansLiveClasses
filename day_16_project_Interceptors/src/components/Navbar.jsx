import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router';
import { MyStore } from '../context/AuthContext';

const Navbar = () => {
  const { setIsLoggedIn } = useContext(MyStore)
  
  const logOut = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false)
  }
  return (
    <div className="h-screen flex flex-col justify-between items-center fixed bg-gray-700 border">
      <nav className='  p-2 flex flex-col min-w-50 gap-3'>
      <h2 className="pl-2 text-2xl font-semibold">MyStore</h2>
        <NavLink
        style={{borderBottom:"1px solid black"}}
        className={(({isActive}) => isActive ? "text-green-600 font-semibold": "text-gray-200 font-semibold")}
          to={"/"}>Home</NavLink>
        <NavLink 
         style={{borderBottom:"1px solid black"}}
        className={(({isActive}) => isActive ? "text-green-600 font-semibold": "text-gray-200 font-semibold")}
          to={"/about"}>About</NavLink>
        <NavLink
         style={{borderBottom:"1px solid black"}}
          className={(({isActive}) => isActive ? "text-green-600 font-semibold": "text-gray-200 font-semibold")}
           to={'/services'}>Services</NavLink>
        <NavLink
         style={{borderBottom:"1px solid black"}}
          className={(({isActive}) => isActive ? "text-green-600 font-semibold": "text-gray-200 font-semibold")}
           to={'/products'}>Products</NavLink>
        <NavLink
         style={{borderBottom:"1px solid black"}}
          className={(({isActive}) => isActive ? "text-green-600 font-semibold": "text-gray-200 font-semibold")}
           to={'/users'}>Users</NavLink>
      </nav>
      <button onClick={() => logOut()} className="mb-3 bg-red-600 px-4 text-white rounded">Logout</button>
    </div>
  )
}

export default Navbar