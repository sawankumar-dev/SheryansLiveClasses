import React from 'react';

const ProductCard = (props) => {
  // FakeStoreAPI से प्राप्त उत्पाद का डेटा
  const { id, title, price, description, category, image, rating: { rate, count } } = props.user
//   const product = {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com", // Cleaned image URL
//     rating: {
//       rate: 3.9,
//       count: 120
//     }
//   };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden my-8 hover:shadow-xl transition-shadow duration-300 font-sans">
      {/* Product Image Section */}
      <div className="relative bg-gray-50 h-72 flex items-center justify-center p-6">
        <img 
          src={image} 
          alt={title} 
          className="max-h-full max-w-full object-contain"
        />
        {/* Category Tag */}
        <span className="absolute top-4 left-4 bg-gray-900/80 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-gray-800 font-bold text-lg leading-snug line-clamp-2 h-14 hover:text-indigo-600 transition-colors duration-200">
          {title}
        </h2>

        {/* Rating and Reviews */}
        <div className="flex items-center space-x-2 mt-2 mb-4">
          <div className="flex items-center bg-amber-50 px-2 py-0.5 rounded text-amber-700 text-xs font-semibold">
            {/* Star Icon */}
            <svg className="w-3.5 h-3.5 mr-1 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {rate}
          </div>
          <span className="text-xs text-gray-400 font-medium">
            ({count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-5">
          {description}
        </p>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400 block font-medium">Price</span>
            <span className="text-2xl font-black text-gray-900">${price}</span>
          </div>
          
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-indigo-100 hover:shadow-indigo-200 active:scale-95 transition-all duration-150">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
