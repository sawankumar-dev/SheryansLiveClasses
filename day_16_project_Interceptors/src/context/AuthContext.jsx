import React, { createContext, use, useState  } from 'react'

export const MyStore = createContext()

const AuthContext = ({children}) => {
  const [users, setUsers] = useState(() => {
    const users = localStorage.getItem("users")
    return users ? JSON.parse(users): [];
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem('user')
    if(user) {
      setIsLoggedIn(true);
    }
    return user ? JSON.parse(user) : {}
  })
  console.log(users)
  return (
    <MyStore.Provider value={{setIsLoggedIn, isLoggedIn, user, users, setUser, setUsers}}>
        {children}
    </MyStore.Provider>
  )
}

export default AuthContext