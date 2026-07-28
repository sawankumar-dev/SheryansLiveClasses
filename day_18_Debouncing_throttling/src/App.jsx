import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([])
  const [searchData, setSearchData] = useState('');
  const [scroll, setScrollY] = useState(0);
  let throttle = false;
  const getProductData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products")
    setProducts(res.data)
  }
  let filteredData = () => {
    let result = products.filter((val) => {
      return val.title.toLowerCase().includes(searchData)
    })
    return result
  }
  useEffect(() => {
    getProductData()
  }, [])

  useEffect(() => {
    if(!searchData) return
    let timeout = setTimeout(() => {
      console.log(" I am second useEffect")
      const res = filteredData()
      setProducts(res)
    }, 3000)
    return () =>  clearTimeout(timeout)
  }, [searchData])

  useEffect(() => {
    const handleScroll = () => {
      if (throttle)  return 
      console.log("Scroll triggedred")
      throttle = true
      setScrollY(window.scrollY);
      setTimeout(() => {
        throttle = false
      }, 5000)
    }
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <div>
      <input type="text" value={searchData} onChange={(e) => setSearchData(e.target.value)}/>
      <h1>Debouncing</h1>
      <div >
        {
          products.map((obj) => <h1 key={obj.id}>{obj.title}</h1>)
        }
      </div>
    </div>
  )
}

export default App