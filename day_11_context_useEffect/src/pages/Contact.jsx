import { useEffect, useState } from "react";

const Contact = () => {
  console.log("Contact Rendering...");
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(()=> {
      setCount(count+1)
    }, 1000)
  }, [])
  return (
    <div>
      <h2>Contact</h2>
      <p>{count}</p>
      
    </div>
  )
}

export default Contact