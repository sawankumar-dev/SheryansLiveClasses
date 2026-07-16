import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";
import NestedAbout from "./pages/NestedAbout";

const App = () => {
  return (
    <div className="bg-gray-400 h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/details" element={<DetailsPage/>}/>
        </Route>
        <Route path="/contact" element={<ContactPage/>}>
          <Route path="/contact/nested" element={<NestedAbout/>}/>
        </Route>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </div>
  )
}

export default App