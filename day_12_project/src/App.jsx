import axios from "axios";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { useEffect, useState } from "react";
import CartScreen from "./components/CartScreen";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
  const getProductData = async () => {
      try {
          let res = await axios.get("https://fakestoreapi.com/products")
          setProducts(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    getProductData()
  }, [])

  return (
    <div className=" p-2 flex flex-col gap-5 bg-gray-400">
      <NavBar setIsCartOpen={setIsCartOpen}/>
      {isCartOpen ? <div className="grid grid-cols-4 gap-4">{
            products.map((product, key) => <ProductCard key={key} product={product} cartItem={cartItem} setCartItem={setCartItem}/>)
          }</div>:<div className="grid grid-cols-4 gap-4">
        <CartScreen/>
      </div>
      }
    </div>
  )
}

export default App