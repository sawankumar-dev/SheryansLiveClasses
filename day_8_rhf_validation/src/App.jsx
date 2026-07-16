import React, { createContext } from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'
import { useState } from 'react'


const App = () => {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(true)
  return (
    <div className='p-3 flex flex-col gap-4 h-screen bg-gray-900 '>
        <Navbar form={form} setForm={setForm}/>
      {form ?  <div className='flex flex-wrap gap-5 mt-3'>
        {users.map((user, index) => (
          <Usercard key={index} name={user.name} email={user.email} mobile={user.mobile} profilePicture={user.profilePicture}/>
        ))}
      </div> : <div className='mt-3 w-100 self-center'>
          <Form users={users} setUsers={setUsers}/>
      </div>}
    </div>
  )
}

export default App