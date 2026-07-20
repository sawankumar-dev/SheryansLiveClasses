import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from '../layout/AuthLayout';
import MainLayout from '../layout/MainLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProtectedRoute from './ProtectedRoute';
import AboutPage from '../pages/AboutPage';

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/auth",
            element: <AuthLayout/>,
            children: [
                {
                    path: 'login',
                    element: <LoginPage/>
                },
                {
                    path: "register",
                    element: <RegisterPage/>
                }
            ]
        },
        {
            path: "/",
            element: <ProtectedRoute/>,
            children: [
                {
                    path: '',
                    element: <MainLayout/>
                },
                {
                    path: "about",
                    element: <AboutPage/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes