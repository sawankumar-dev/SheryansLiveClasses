import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <div className="brand">
            <h2>MyStore</h2>
        </div>
        <nav>
            <NavLink to={"/main"}>Home</NavLink>
            <NavLink to={"/main/about"}>About</NavLink>
        </nav>
    </div>
  )
}

export default Navbar