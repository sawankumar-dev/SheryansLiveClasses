// props में 'item' ऑब्जेक्ट और हैंडलर फंक्शन्स आएंगे
const CartCard = ({ item, onIncrement, onDecrement, onRemove }) => {
  // आपके डेटा स्ट्रक्चर के हिसाब से डिस्ट्रक्चरिंग
  const { id, title, price, category, image, quantity } = item;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 gap-4 w-full">
      
      {/* 1. प्रोडक्ट इमेज और डिटेल्स सेक्शन */}
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        {/* इमेज बॉक्स */}
        <div className="w-20 h-20 bg-gray-50 rounded-xl p-2 flex items-center justify-center flex-shrink-0 border border-gray-50">
          <img 
            src={image} 
            alt={title} 
            className="max-h-full max-w-full object-contain" 
          />
        </div>
        
        {/* टेक्स्ट डिटेल्स */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-800 truncate sm:whitespace-normal sm:line-clamp-2" title={title}>
            {title}
          </h3>
          <p className="text-xs text-blue-600 font-medium uppercase tracking-wider mt-0.5">
            {category}
          </p>
          <p className="text-sm font-bold text-gray-900 mt-1.5">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* 2. क्वांटिटी कंट्रोल और एक्शन्स सेक्शन */}
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 border-t sm:border-t-0 pt-4 sm:pt-0">
        
        {/* प्लस / माइनस काउंटर */}
        <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 overflow-hidden shadow-sm">
          <button 
            onClick={() => onDecrement(id)}
            className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 font-bold transition-colors text-lg"
          >
            −
          </button>
          <span className="px-4 py-1.5 text-sm font-bold text-gray-800 min-w-[32px] text-center">
            {quantity || 1}
          </span>
          <button 
            onClick={() => onIncrement(id)}
            className="px-3 py-1.5 text-gray-600 hover:bg-gray-200 font-bold transition-colors text-lg"
          >
            +
          </button>
        </div>

        {/* टोटल प्राइस और डिलीट बटन */}
        <div className="flex items-center space-x-4">
          <span className="text-base font-bold text-gray-900 min-w-[80px] text-right">
            ${(price * (quantity || 1)).toFixed(2)}
          </span>
          
          <button 
            onClick={() => onRemove(id)}
            className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-xl transition-colors duration-200"
            title="Remove item"
          >
            🗑️
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CartCard;
