import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between px-4 py-2">
        <div className="brand">
            <h2 className="text-2xl">Book Store</h2>
        </div>
        <nav className="flex gap-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/Contact"}>Contact</NavLink>
        </nav>
        <button>Login</button>
    </div>
  )
}

export default Navbar