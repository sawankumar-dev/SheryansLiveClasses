import React from 'react'

const Navbar = (props) => {
  return (
    <div
    className='p-4 flex bg-gray-800 rounded-2xl text-white items-center justify-between transparent '>
        <div>
            <img width={40} className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qh6bj65apXQ5cNMTGlRUO4JgHCyR0zNNitLecRMgYkfrvbxMuD_rVvQ&s=10" alt="" />
        </div>
        <div className='flex gap-4 font-semibold cursor-pointer'>
            <p className='hover:text-yellow-400 transition-all ease-in-out'>Home</p>
            <p className='hover:text-yellow-400 transition-all ease-in-out'>About</p>
            <p className='hover:text-yellow-400 transition-all ease-in-out'>Contact</p>  
        </div>
        <button className='px-4 transition-all ease-in-out hover:bg-blue-600 py-1 bg-blue-700 text-white cursor-pointer rounded-2xl' onClick={() => props.setForm((prev) => !prev)}>
            {props.form ? 'Login' : 'Users'}
        </button>
    </div>
  )
}

export default Navbar