import { useContext } from "react";
import { MyStore } from "../context/MyContext";

// props में 'product' ऑब्जेक्ट आएगा
const ProductCard = ({ product, isInCart}) => {
  // डेटा को डिस्ट्रक्चर (Destructure) कर लेते हैं
  const { title, price, description, category, image, rating, id } = product;
  const {setCartItems, incrementQuantity, decrementQuantity} = useContext(MyStore)
  const addToCart = () => {
    setCartItems((prev) => [...prev, {...product, quantity: 1}])
    alert(`Cart added successfully!\nTitle: ${title}`)
  }
  return (
    <div className="max-w-sm rounded-2xl border border-gray-200 bg-gray-300 p-5 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        {/* प्रोडक्ट इमेज कंटेनर */}
        <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-4">
          <img 
            src={image} 
            alt={title} 
            className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* प्रोडक्ट की जानकारी */}
        <div className="mt-4">
          {/* कैटेगरी */}
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
            {category}
          </span>
          
          {/* टाइटल */}
          <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 cursor-pointer">
            {title}
          </h2>
          
          {/* डिस्क्रिप्शन */}
          <p className="mt-2 text-sm text-gray-500 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* प्राइस और रेटिंग (बॉटम सेक्शन) */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        {/* प्राइस */}
        <span className="text-xl font-bold text-gray-900">
          ${price.toFixed(2)}
        </span>
        {isInCart? (
                  <span className="flex  gap-2">
                        <button
                        onClick={() => decrementQuantity(id)}
                        className="text-2xl cursor-pointer hover:text-gray-700">-</button>
                        <p className="text-2xl">{isInCart.quantity}</p>
                        <button
                        onClick={() => incrementQuantity(id)}
                        className="text-2xl cursor-pointer hover:text-gray-700">+</button>
                  </span>
         
                  ):
                   (<button
                  className="border px-2 rounded bg-gray-400 border-gray-500 cursor-pointer" 
                  onClick={() => addToCart()}>Add to Cart</button>)}
        {/* रेटिंग */}
        {rating && (
          <div className="flex items-center space-x-1 bg-amber-50 px-2 py-1 rounded-lg">
            <span className="text-amber-500 text-sm">⭐</span>
            <span className="text-sm font-semibold text-amber-800">{rating.rate}</span>
            <span className="text-xs text-gray-400">({rating.count})</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
