import { useEffect } from "react";
import ContextProvider from "./context/MyContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    console.log("App Rendering...");
  })
  return (
    <div className="bg-gray-700 h-screen w-full">
       <ContextProvider>
          {/* <About></About> */}
          <Home></Home>
        </ContextProvider>
        
      {/* <Contact></Contact> */}
      {/* <Counter/> */}
    </div>
  );
};

export default App;