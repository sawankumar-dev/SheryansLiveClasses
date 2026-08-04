import React, { useEffect, useState } from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router'
import PublicProtected from './protected/PublicProtected'
import AuthLayout from '../app/layout/AuthLayout'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import { RegisterPage } from '../features/auth/ui/pages/RegisterPage'
import MainLayout from '../app/layout/MainLayout'
import HomePage from '../shared/ui/pages/HomePage'
import ProductPage from '../features/products/ui/pages/ProductPage'
import CartPage from '../features/cart/ui/pages/CartPage'
import OrderPage from '../features/orders/ui/pages/OrderPage'
import MainProtected from './protected/MainProtected'
import { hydrationUser } from '../features/auth/api/authApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/state/authSlice'

const AppRoutes = () => {
    let dispatch = useDispatch()
    useEffect(() => {
      (async () => {
        try {
          let res = await hydrationUser();
          console.log(res)
          dispatch(addUser(res))

        } catch (error) {
         console.log("error in hydration", error) 
        }
      })()
    }, [])
    const router = createBrowserRouter([
        {
            path: "/auth",
            element: <PublicProtected/>,
            children: [
              {
                path: '',
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
        },
      {
        path: "/",
        element: <MainProtected/>,
        children: [
          {
            path: "",
            element: <MainLayout/>,
            children: [
                {
                  path: '',
                  element: <HomePage/>
                },
                {
                  path: "product",
                  element: <ProductPage/>
                },
                {
                  path: "cart",
                  element: <CartPage/>
                },
                {
                  path: "orders",
                  element: <OrderPage/>
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