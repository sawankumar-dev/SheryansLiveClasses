import axios from "axios";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { useContext, useEffect, useState } from "react";
import CartScreen from "./components/CartScreen";
import Loading from "./components/Loading";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {isCartOpen, cartItems} = useContext(MyStore);

  useEffect(() => {
    const getProductData = async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setLoading(false); // API response aate hi loading false ho jayegi
      } catch (error) {
        console.error(error);
        setLoading(false); // Error aane par bhi loading screen band honi chahiye
      }
    };
    getProductData();
  }, []);
  return (
    <div className="p-2 flex flex-col gap-5 bg-gray-400 min-h-screen">
      <NavBar />
      
      {/* Syntax Error Fixed Here */}
      {isCartOpen ? (
        loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {products.map((product, key) => { 
              let isInCart = cartItems.find((val) => val.id === product.id)
              return <ProductCard 
                key={key} 
                product={product} 
                isInCart={isInCart}
              />} 
            )}
          </div>
        )
      ) : (
        <div className="grid grid-cols-4 gap-4">
          <CartScreen/>
        </div>
      )}
    </div>
  );
};

export default App;