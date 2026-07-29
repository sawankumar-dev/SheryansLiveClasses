import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/features/authSlice'
import MainProtected from './protected/MainProtected'
import PublicProtected from './protected/PublicProtected'
import AboutPage from '../pages/AboutPage'

const AppRoutes = () => {
    let dispatch = useDispatch()
    const hydrateUser = () => {
        let loggedInUser = JSON.parse(localStorage.getItem("user"));
        if(!loggedInUser) {
            return alert("Unauthorized user")
        };
        dispatch(addUser(loggedInUser))
    }
    useEffect(() => {
        hydrateUser()
    }, [])
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PublicProtected/>,
            children: [
                {
                    path: "",
                    element: <AuthLayout/>,
                    children: [
                        {
                            path: "",
                            element: <LoginPage/>
                        },
                        {
                            path: "register", 
                            element: <RegisterPage/>
                        }
                    ]
                }
            ]
        }, {
            path: "/main",
            element: <MainProtected/>,
            children: [
                {
                    path: "",
                    element: <MainLayout/>,
                    children: [
                        {
                            path: "",
                            element: <HomePage/>
                        },
                        {
                            path: "about",
                            element: <AboutPage/>
                        }
                    ]   
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes