import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
// import About from '../pages/About';
import App from '../App';
import { getUsers } from '../api/users.api';

let About = lazy(() => import('../pages/About'));
let Contact = lazy(() => import('../pages/Contact'));

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
                    path: "",
                    element: <App/>
                },
                {
                    path: "about",
                    // loader: getUsers,
                    loader: () => {
                     return Promise.all([getUsers(), getUsers(), getUsers()])
    
                    },
                    hydrateFallbackElement: <h1>loadin user data</h1>,
                    element: <Suspense fallback={<h1>about page loading...</h1>}>
                        <About/>
                    </Suspense>
                },
                {
                    path: "contact",
                    element: <Contact/>
                },
            ]
        }
    ])
  return (
   <RouterProvider router={router}/>
  )
}

export default AppRoutes