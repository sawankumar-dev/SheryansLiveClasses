import { useContext } from "react";
import CartCard from "./CartCard";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  const { cartItems } = useContext(MyStore)
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Cart: {cartItems.length}</h1>

        {Array.isArray(cartItems) && cartItems.length === 0 ? (
          <p className="mt-3 text-gray-900 font-semibold">Cart is empty</p>
        ) : (
          <div className="mt-5 space-y-4">
            {cartItems.map((item, index) => (
              <CartCard key={item?.id ?? index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;