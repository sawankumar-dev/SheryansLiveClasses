import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import MainLayout from "../layout/MainLayout";

function AppRoutes() {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
                    path: "",
                    element: <Home/>
                },
                {
                    path: "about",
                    element: <About/>
                },
                {
                    path: "services",
                    element: <Service/>
                }
            ]
        },
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes; 