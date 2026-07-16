import React, { createContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'
import { useState } from 'react'


const App = () => {
  const [count, setCounter] = useState(1);
  const [users, setUsers] = useState(() => {
    const saveData = localStorage.getItem("users")
    return saveData ? JSON.parse(saveData): []
  })
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  const deleteUser = (ind) => {
    let res = users.filter((user, index) => index !== ind)
    setUsers(res)
  } 
  const [updatedData, setUpdatedData] = useState(null)
console.log(users)
  return (
    <div className='p-3 flex flex-col gap-4 h-screen bg-gray-900 '>
        <Navbar form={toggle} setForm={setToggle}/>
      {toggle ?  <div className='flex flex-wrap gap-5 mt-3'>
        {users.map((user, index) => (
          <Usercard 
          key={index} 
          setToggle={setToggle}
          setUpdatedData={setUpdatedData}
          deleteUser={deleteUser} 
          index={index} 
          id={user.id}
          name={user.name} 
          email={user.email} 
          mobile={user.mobile} 
          profilePicture={user.profilePicture}/>
        ))}
      </div> : <div className='mt-3 w-100 self-center'>
          <Form users={users} setUpdatedData={setUpdatedData} setToggle={setToggle} count={count} setCounter={setCounter} updatedData={updatedData} setUsers={setUsers}/>
      </div>}
    </div>
  )
}

export default App