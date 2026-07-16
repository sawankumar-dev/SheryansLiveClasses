import React from 'react'

const Usercard = ({ name, email, mobile, profilePicture }) => {
  return (
    <div className='p-3 border flex flex-col gap-2 text-white  border-white bg-gray-800 rounded-md mt-3'>
        <div className='h-60'>
            <img className='object-fit h-full rounded-xl' src={profilePicture} alt={name} />
        </div>
        <div className='flex flex-col gap-1'>
            <h1>{name}</h1>
            <p className='text-sm text-gray-400'>{email}</p>
            <p className='text-sm text-gray-400'>{mobile}</p>
        </div>
        <div className='flex justify-between gap-2 mt-2'>
            <button className='bg-yellow-800 py-1 px-3 rounded hover:bg-yellow-900 cursor-pointer transition-all ease-in-out'>Update</button>
            <button className='bg-red-800 py-1 px-3 rounded hover:bg-red-900 cursor-pointer transition-all ease-in-out'>Delete</button>
        </div>
    </div>
  )
}

export default Usercard