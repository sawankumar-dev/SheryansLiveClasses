import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-gray-700 flex justify-between px-4 py-4 text-white">
        <div className="brand">
            <h2>MyStore</h2>
        </div>
        <nav className="flex gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <NavLink to="/login">Login</NavLink>
    </div>
  )
}

export default Navbar