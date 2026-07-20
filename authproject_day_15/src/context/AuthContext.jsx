import React, { createContext, useState } from 'react'

export const Auth = createContext()

const AuthContext = ({children}) => {
    const [registerdUser, setRegisteredUser] = useState(() => {
       const users =  localStorage.getItem("users")
       return users ? JSON.parse(users): []
    });
    const [ loggedInUser, setLoggedInUser ] = useState(() => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user): {}
    })
    console.log(registerdUser)
    console.log(loggedInUser)
  return (
    <Auth.Provider value={{registerdUser, setLoggedInUser, loggedInUser, setRegisteredUser}}>
        {children}
    </Auth.Provider>
  )
}

export default AuthContext