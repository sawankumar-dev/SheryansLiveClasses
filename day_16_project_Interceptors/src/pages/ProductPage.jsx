import axios from "axios";
import { useEffect, useState } from "react";
import { UNSAFE_ErrorResponseImpl } from "react-router";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const ProductPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true)
  const getProductsData = async () => {
    try {
      const res = await axiosInstance.get("/products")
      console.log(res.data)
      setProductsData(res.data)
      setLoading(false)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    getProductsData()
  }, [])
  if(loading) return <div className="h-screen w-full text-white bg-gray-600 flex justify-center items-center"> <h1>Loading...</h1></div>
  return (
    <div className="bg-gray-600">
      <h1>ProductPage</h1>
      <div>
        {
          productsData.map((user) => <ProductCard key={user.id} user={user}/>)
        }
      </div>
    </div>
  )
}

export default ProductPage