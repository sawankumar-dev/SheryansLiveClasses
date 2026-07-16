import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const NavBar = () => {
    const {setIsCartOpen} = useContext(MyStore)
  return (
    <div className="flex justify-between bg-gray-800 px-4 py-4 rounded">
        <div className="brand">
            <h2 className="text-2xl text-white">MyStore</h2>
        </div>
        <nav className="flex gap-4">
            <button 
                onClick={() => {setIsCartOpen(true)}}
                className="text-white cursor-pointer hover:text-gray-200 transition"
                >Home</button>
            <button 
                onClick={() => {setIsCartOpen(false)}}
                className="text-white cursor-pointer hover:text-gray-200 transition"
                >Cart</button> 
        </nav>
        <button className="text-white bg-blue-500 px-4 rounded">Login</button>
    </div>
  )
}

export default NavBar