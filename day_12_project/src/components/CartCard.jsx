import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartCard = ({ item }) => {
  const { title, price, category, image, description, rating, quantity, id } = item || {};
  const {incrementQuantity, decrementQuantity} = useContext(MyStore)
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-xl p-2 flex items-center justify-center flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="min-w-0">
            <h3
              className="text-base font-semibold text-gray-800 truncate"
              title={title}
            >
              {title}
            </h3>
            <p className="text-xs text-blue-600 font-medium uppercase tracking-wider mt-0.5">
              {category}
            </p>
            {description ? (
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {description}
              </p>
            ) : null}

            {rating ? (
              <div className="mt-2 flex items-center gap-2 bg-amber-50 px-2 py-1 rounded-lg w-fit">
                <span className="text-amber-500 text-sm">⭐</span>
                <span className="text-sm font-semibold text-amber-800">
                  {rating.rate}
                </span>
                <span className="text-xs text-gray-400">({rating.count})</span>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex items-center flex-col justify-between sm:justify-end gap-4">
          <div className="text-right">
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-lg font-bold text-gray-900">
              ${typeof price === "number" ? price.toFixed(2) : price}
            </p>
          </div>
          <span className="flex  gap-2">
              <button
               onClick={() => decrementQuantity(id)}
                className="text-2xl cursor-pointer hover:text-gray-700">-</button>
              <p className="text-2xl">{quantity}</p>
              <button
                onClick={() => incrementQuantity(id)}
                className="text-2xl cursor-pointer hover:text-gray-700">+</button>
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default CartCard;
