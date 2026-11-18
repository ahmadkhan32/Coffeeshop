import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { products } from '../data/products';
import { Star, ShoppingBag, Eye, Check } from 'lucide-react';

export default function FeaturedProducts() {
  const dispatch = useDispatch();
  const [addedIds, setAddedIds] = useState({});

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ product, quantity: 1, isSubscription: false }));

    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section className="py-20 bg-[#0D0D0D] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest block mb-2">
              The Lineup
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Engineered For Output
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md mt-3 md:mt-0">
            Slow cold-steeped for 18 hours using Colombian Supremo Arabica beans, then infused with high-potency nootropics.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={item.id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex flex-col justify-between bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden hover:border-[#E58A2B]/70 transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#0A0A0A]/90 text-white border border-[#333]">
                    {item.badge}
                  </span>
                  <div className="flex items-center space-x-1 text-[#E58A2B] text-xs font-bold bg-[#0A0A0A]/90 px-2 py-1 rounded border border-[#333]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{item.rating}</span>
                    <span className="text-gray-400 font-normal text-[10px]">({item.review_count})</span>
                  </div>
                </div>

                {/* Product Image with Hover Flip */}
                <Link to={item.url} className="block relative pt-12 pb-6 px-4 flex items-center justify-center bg-gradient-to-b from-[#181818] to-[#121212] overflow-hidden">
                  <div className="h-64 w-full flex items-center justify-center">
                    <img
                      src={isHovered && item.hover_image ? item.hover_image : item.main_image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain transition-all duration-500 transform group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Card Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-[#E58A2B] transition">
                      <Link to={item.url}>{item.name}</Link>
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                    <div className="flex items-center space-x-3 text-xs text-gray-300 mt-3 pt-3 border-t border-[#222]">
                      <span className="bg-[#202020] px-2 py-0.5 rounded text-[11px] text-gray-300 font-medium">
                        {item.pack_size}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400 font-medium">{item.volume}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-[#E58A2B] font-bold">{item.caffeine}</span>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-2">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-xl font-black text-white">${item.detail_price}</span>
                        {item.listing_price > item.detail_price && (
                          <span className="text-xs text-gray-500 line-through ml-2">
                            ${item.listing_price}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-bold text-[#34C759] uppercase">
                        In Stock • Ships Free
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => handleQuickAdd(item, e)}
                        className={`py-3 px-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-1.5 ${
                          addedIds[item.id]
                            ? 'bg-[#34C759] text-black'
                            : 'bg-[#E58A2B] hover:bg-[#f39535] text-black'
                        }`}
                      >
                        {addedIds[item.id] ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Quick Add</span>
                          </>
                        )}
                      </button>

                      <Link
                        to={item.url}
                        className="py-3 px-3 rounded-xl bg-[#202020] hover:bg-[#282828] text-white font-bold text-xs uppercase tracking-wider text-center transition flex items-center justify-center space-x-1 border border-[#333]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
