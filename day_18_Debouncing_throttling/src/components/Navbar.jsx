import React from 'react'
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div>
        <nav  className="flex gap-4 text-xl text-gray-900">
            <NavLink to="/">Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar