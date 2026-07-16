import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Home = () => {
  console.log("Home Rendering...")
  const {count, setCount} = useContext(MyStore)
  return <div>
    <h2>Home</h2>
    <p>{count}</p>
    <button onClick={() => setCount(count+1)} className="border bg-gray-700 text-white px-5 py-1 rounded">Add</button>
  </div>;
};

export default Home;