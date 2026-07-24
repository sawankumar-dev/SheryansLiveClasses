import { useCallback, useMemo, useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  console.log("App Rendering..")
  let [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Sawan",id:1,
  })
  const greet = useCallback( () => {
    console.log("Hey.. good evening")
  }, [])
  // useMemo()
  return (
    <div>
      <h1>App</h1>
      <h2>Count: {count}</h2>
      <HomePage greet={greet}/>
      <AboutPage/>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setUser({...user, name: "Ranjit"})}>Change Name</button>
    </div>
  )
}

export default App