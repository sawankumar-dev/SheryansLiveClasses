import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { ProtectedRoute } from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import UsersPage from '../pages/UsersPage';
import ProductPage from '../pages/ProductPage';

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: '/',
            element: <ProtectedRoute/>,
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
                        },
                        {
                            path: "services",
                            element: <ServicesPage/>
                        },
                        {
                            path: "users",
                            element: <UsersPage/>
                        },
                        {
                            path: "products",
                            element: <ProductPage/>
                        },
                    ]
                }
            ]
        },
        {
            path: "/auth",
            element: <PublicRoute/>,
            children: [
              {  path: "",
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
        }
    ]);


  return <RouterProvider router={router}/>
}

export default AppRoutes