import React from 'react'
import { useForm } from 'react-hook-form'
import useContext from 'react'

const Form = ({ users, setUsers }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({mode: 'onChange', defaultValues: { name: 'user', email: 'user@gmail.com', mobile: '', profilePicture: '' }})
    const onSubmit = (data) => {
      setUsers([...users, data])
      reset()
    }
  return (
    <div className='p-4 border flex flex-col gap-3 text-white border-green-500 bg-gray-800 rounded-md mt-3 shadow-[0_0_15px_rgba(0,255,136,0.3),0_0_30px_rgba(0,255,136,0.5),inset_0_0_15px_rgba(0,255,136,0.15)]'>
      <h1 className='text-xl font-semibold tracking-wide'>Create User</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 mt-1'>
        <input className='p-2 rounded-md bg-transparent outline-none border border-white/70 text-white placeholder:text-white/50 placeholder:tracking-wide
          transition-all duration-200 ease-in-out
          hover:border-[#00ff88]
          focus-visible:ring-2 focus-visible:ring-[#00ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800
          focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.35)]'type="text"
          placeholder='Name'
          {...register('name', { required: "Name is required" })}     
        />
        {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
        <input
          className='p-2 rounded-md bg-transparent outline-none border border-white/70 text-white placeholder:text-white/50 placeholder:tracking-wide
          transition-all duration-200 ease-in-out
          hover:border-[#00ff88]
          focus-visible:ring-2 focus-visible:ring-[#00ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800
          focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.35)]'
          type="email"
          placeholder='Email'
          {...register('email', { required: "Email is required", pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })}  
        />
        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
        <input
          className='p-2 rounded-md bg-transparent outline-none border border-white/70 text-white placeholder:text-white/50 placeholder:tracking-wide
          transition-all duration-200 ease-in-out
          hover:border-[#00ff88]
          focus-visible:ring-2 focus-visible:ring-[#00ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800
          focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.35)]'
          type="number"
          placeholder='Mobile'
          {...register('mobile', { required: "Mobile is required", minLength: { value: 10, message: "Mobile number must be 10 digits" }, maxLength: { value: 10, message: "Mobile number must be 10 digits se badi nhi ho sakti" } })}
        />
        {errors.mobile && <p className='text-red-500 text-sm'>{errors.mobile.message}</p>}
        <input
          className='p-2 rounded-md bg-transparent outline-none border border-white/70 text-white placeholder:text-white/50 placeholder:tracking-wide
          transition-all duration-200 ease-in-out
          hover:border-[#00ff88]
          focus-visible:ring-2 focus-visible:ring-[#00ff88] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800
          focus:border-[#00ff88] focus:shadow-[0_0_15px_rgba(0,255,136,0.35)]'
          type="url"
          placeholder='Profile Picture URL'
          {...register('profilePicture', { required: "Profile Picture URL is required" })}
        />
        {errors.profilePicture && <p className='text-red-500 text-sm'>{errors.profilePicture.message}</p>}
        <button
          className='bg-blue-700 py-2 px-4 rounded-md hover:bg-blue-800 cursor-pointer transition-all ease-in-out
          w-full font-medium text-white
          hover:shadow-[0_0_18px_rgba(59,130,246,0.55)]
          focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800'
          type='submit'
        >
          Add User
        </button>

        <p className='text-xs text-white/60 -mt-1'>Tip: Fill all fields to add user.</p>
      </form>
    </div>
  )
}

export default Form