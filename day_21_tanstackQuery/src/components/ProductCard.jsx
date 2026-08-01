import React from 'react';
import { Star } from 'lucide-react'; // स्टार आइकॉन के लिए

const ProductCard = ({ product }) => {
  // Props से डेटा डिस्ट्रक्चर (Destructure) करना
  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    thumbnail,
  } = product;

  // डिस्काउंट के बाद की कीमत निकालना (Price - Discount)
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-900 border border-gray-200 p-5 flex flex-col justify-between group">
      
      {/* टॉप सेक्शन: ID और कैटेगरी */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-gray-400">#{id}</span>
          <span className="bg-purple-50 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* प्रोडक्ट इमेज */}
        <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
          <img
            src={thumbnail || "https://placeholder.com"}
            alt={title}
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* टाइटल और डिस्क्रिप्शन */}
        <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-purple-700 transition-colors">
          {title}
        </h2>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* रेटिंग और डिस्काउंट बैज */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center bg-green-50 text-green-700 px-2 py-0.5 rounded-md text-xs font-bold gap-0.5">
            <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
            <span>{rating}</span>
          </div>
          <span className="text-[10px] text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wide">
            {discountPercentage}% OFF
          </span>
        </div>
      </div>

      {/* बॉटम सेक्शन: कीमत और बटन */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-2">
        <div className="flex flex-col">
          <span className="text-xl font-extrabold text-gray-900">${discountedPrice}</span>
          <span className="text-xs text-gray-400 line-through">${price}</span>
        </div>
        <button className="bg-gray-900 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-xl text-xs transition-colors duration-200 shadow-sm">
          Buy Now
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
