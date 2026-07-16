import { useContext } from "react"
import { MyStore } from "../context/MyContext"

const Comp4 = () => {
  let data =  useContext(MyStore)
  return (
    <div>
        <h2>Comp4</h2>
        <p>{data}</p>
    </div>
  )
}

export default Comp4