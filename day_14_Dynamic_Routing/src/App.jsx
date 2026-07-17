import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AppRoute from "./routes/AppRoute";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gray-600 h-screen">
      <Navbar/>
      <AppRoute/>
    </div>
  )
}

export default App