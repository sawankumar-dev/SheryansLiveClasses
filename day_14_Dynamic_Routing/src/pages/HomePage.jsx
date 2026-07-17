import { useContext, useEffect, useState } from "react";
import { MyStore } from "../context/MyContext";
import axios from "axios";
import ProductsCard from "../components/ProductsCard";

const HomePage = () => {
    let {productsData, setProductData} = useContext(MyStore)
    
    let getProductsData = async () => {
        try {
            let response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data)
            setProductData(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProductsData()
    }, [])
  return (
    <div>
        <h1>HOme Page</h1>
        <div className="bg-gray flex gap-10">
            {
                productsData.map((product) => {
                    return <ProductsCard key={product.id} product={product}/>
                })
            }
        </div>  
    </div>
  )
}

export default HomePage