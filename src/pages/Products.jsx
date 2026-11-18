import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { products } from '../data/products';
import { Star, ShoppingBag, Check, ShieldCheck, Sparkles } from 'lucide-react';

export default function Products() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [addedIds, setAddedIds] = useState({});
  const dispatch = useDispatch();

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    dispatch(addToCart({ product, quantity: 1, isSubscription: false }));
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  const filteredProducts = products.filter((p) => {
    if (filter === 'single') return p.id !== 'dialed-variety-pack';
    if (filter === 'bundle') return p.id === 'dialed-variety-pack';
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.detail_price - b.detail_price;
    if (sortBy === 'price-high') return b.detail_price - a.detail_price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="bg-[#0B0B0B] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest">
            The Complete Collection
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Cold Brew Catalog
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Craft Colombian coffee slow cold-brewed for 18 hours and infused with pharmaceutical-grade Citicoline and adaptogens. All options ship in 12-can protective cases.
          </p>
        </div>

        {/* Filter & Sorting Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 mb-10 border-b border-[#222] gap-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                filter === 'all'
                  ? 'bg-[#E58A2B] text-black'
                  : 'bg-[#181818] text-gray-400 hover:text-white border border-[#2E2E2E]'
              }`}
            >
              All (4)
            </button>
            <button
              onClick={() => setFilter('single')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                filter === 'single'
                  ? 'bg-[#E58A2B] text-black'
                  : 'bg-[#181818] text-gray-400 hover:text-white border border-[#2E2E2E]'
              }`}
            >
              Single Flavors (3)
            </button>
            <button
              onClick={() => setFilter('bundle')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                filter === 'bundle'
                  ? 'bg-[#E58A2B] text-black'
                  : 'bg-[#181818] text-gray-400 hover:text-white border border-[#2E2E2E]'
              }`}
            >
              Variety Bundles (1)
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 uppercase font-semibold">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#181818] border border-[#2E2E2E] text-white text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-[#E58A2B]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-[#141414] border border-[#262626] rounded-3xl overflow-hidden hover:border-[#E58A2B] transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/70"
            >
              <div className="relative pt-12 pb-6 px-6 bg-gradient-to-b from-[#1C1C1C] to-[#121212] flex items-center justify-center">
                <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 text-[#E58A2B] border border-[#333]">
                  {item.badge}
                </span>

                <Link to={item.url} className="w-full h-64 flex items-center justify-center">
                  <img
                    src={item.main_image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                  />
                </Link>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-1.5 text-[#E58A2B] text-xs font-bold mb-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{item.rating}</span>
                    <span className="text-gray-400 font-normal">({item.review_count} reviews)</span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-[#E58A2B] transition">
                    <Link to={item.url}>{item.name}</Link>
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>

                  <div className="flex items-center space-x-2 text-[11px] text-gray-400 mt-3">
                    <span className="bg-[#202020] px-2 py-0.5 rounded text-white font-medium">
                      {item.pack_size}
                    </span>
                    <span>•</span>
                    <span>{item.volume}</span>
                    <span>•</span>
                    <span className="text-[#E58A2B] font-bold">{item.caffeine}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#222]">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-2xl font-black text-white">${item.detail_price}</span>
                      {item.listing_price > item.detail_price && (
                        <span className="text-xs text-gray-500 line-through ml-2">
                          ${item.listing_price}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-gray-400 uppercase">
                      12 Cans Included
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={(e) => handleQuickAdd(item, e)}
                      className={`py-3 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center justify-center space-x-1.5 ${
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
                      className="py-3 px-3 rounded-xl bg-[#202020] hover:bg-[#282828] text-white border border-[#333] font-bold text-xs uppercase tracking-wider text-center transition flex items-center justify-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Strip */}
        <div className="mt-20 p-8 rounded-3xl bg-[#141414] border border-[#242424] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E58A2B]/10 text-[#E58A2B] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider">30-Day Risk-Free Trial</h4>
              <p className="text-xs text-gray-400">If you don't feel the elevated cognitive focus, we'll refund your order in full.</p>
            </div>
          </div>
          <Link
            to="/dialed-for-teams"
            className="px-6 py-3 rounded-xl bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white text-xs font-bold uppercase tracking-wider border border-[#333] transition"
          >
            Need Office Bulk Coffee?
          </Link>
        </div>
      </div>
    </div>
  );
}
