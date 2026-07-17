import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductDetails from "../pages/ProductDetails";
import ContactPage from "../pages/ContactPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoute = () => {
  return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={
              <ProtectedRoute>
                <AboutPage/>
              </ProtectedRoute>
              }/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/detail/:id" element={<ProductDetails/>}/>
        </Routes>
  )
}

export default AppRoute