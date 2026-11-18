import React, { useState } from 'react';
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { ChevronLeft, ChevronRight, ShoppingBag, Check, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSub, setIsSub] = useState(false);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  const currentProduct = products[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setAdded(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setAdded(false);
  };

  const handleAdd = () => {
    dispatch(addToCart({ product: currentProduct, quantity: 1, isSubscription: isSub }));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="py-24 bg-[#090909] border-b border-[#1E1E1E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest block mb-2">
              Interactive Flavor Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Formula Breakdown
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333] transition"
              aria-label="Previous flavor"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-gray-400">
              {currentIndex + 1} / {products.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333] transition"
              aria-label="Next flavor"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Main Card */}
        <div className="bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow matching product accent */}
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] opacity-20 pointer-events-none transition-colors duration-500"
            style={{ backgroundColor: currentProduct.accent_color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Can Showcase Left/Center */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-md h-80 sm:h-96 flex items-center justify-center">
                <img
                  src={currentProduct.main_image}
                  alt={currentProduct.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.9)] animate-in fade-in duration-500"
                />
              </div>

              {/* Thumbnails to pick directly */}
              <div className="flex space-x-3 mt-6">
                {products.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setAdded(false);
                    }}
                    className={`w-14 h-14 rounded-xl p-1 bg-[#1A1A1A] border transition-all ${
                      currentIndex === idx
                        ? 'border-[#E58A2B] scale-110 shadow-lg'
                        : 'border-[#333] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.main_image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details Right */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-3 py-1 rounded bg-[#E58A2B]/10 text-[#E58A2B] text-xs font-black uppercase tracking-wider border border-[#E58A2B]/30">
                    {currentProduct.badge}
                  </span>
                  <div className="flex items-center text-[#E58A2B] text-xs font-bold">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span>{currentProduct.rating}</span>
                    <span className="text-gray-400 font-normal ml-1">({currentProduct.review_count} reviews)</span>
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  {currentProduct.name}
                </h3>
                <p className="text-sm font-semibold text-[#E58A2B] mt-1">
                  {currentProduct.subtitle}
                </p>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {currentProduct.description}
              </p>

              {/* Nutritional / Functional Stats Pill */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#262626]">
                <div className="bg-[#181818] p-3 rounded-xl text-center border border-[#2E2E2E]">
                  <span className="block text-xs text-gray-400 uppercase">Caffeine</span>
                  <span className="text-lg font-black text-white">{currentProduct.caffeine}</span>
                </div>
                <div className="bg-[#181818] p-3 rounded-xl text-center border border-[#2E2E2E]">
                  <span className="block text-xs text-gray-400 uppercase">Calories</span>
                  <span className="text-lg font-black text-white">{currentProduct.calories}</span>
                </div>
                <div className="bg-[#181818] p-3 rounded-xl text-center border border-[#2E2E2E]">
                  <span className="block text-xs text-gray-400 uppercase">Sugar</span>
                  <span className="text-lg font-black text-[#34C759]">{currentProduct.sugar}</span>
                </div>
              </div>

              {/* Purchase Type Selector */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSub(false)}
                    className={`p-3 rounded-xl text-left border transition ${
                      !isSub
                        ? 'bg-[#222] border-[#E58A2B] text-white'
                        : 'bg-[#181818] border-[#333] text-gray-400'
                    }`}
                  >
                    <div className="text-xs font-bold uppercase">One-Time Pack</div>
                    <div className="text-base font-black text-white mt-1">
                      ${currentProduct.detail_price}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsSub(true)}
                    className={`p-3 rounded-xl text-left border relative transition ${
                      isSub
                        ? 'bg-[#222] border-[#E58A2B] text-white'
                        : 'bg-[#181818] border-[#333] text-gray-400'
                    }`}
                  >
                    <span className="absolute -top-2 right-3 bg-[#E58A2B] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                      Save 15%
                    </span>
                    <div className="text-xs font-bold uppercase">Subscribe & Save</div>
                    <div className="text-base font-black text-[#34C759] mt-1">
                      ${(currentProduct.detail_price * 0.85).toFixed(2)}
                    </div>
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest transition flex items-center justify-center space-x-2 ${
                    added ? 'bg-[#34C759] text-black' : 'bg-[#E58A2B] hover:bg-[#f39535] text-black shadow-xl'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added To Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add 12-Pack • ${isSub ? (currentProduct.detail_price * 0.85).toFixed(2) : currentProduct.detail_price}</span>
                    </>
                  )}
                </button>

                <Link
                  to={currentProduct.url}
                  className="px-6 py-4 rounded-xl bg-[#202020] hover:bg-[#282828] text-white border border-[#333] font-bold text-xs uppercase tracking-wider text-center transition flex items-center justify-center"
                >
                  Full Nutrition & Ingredients
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
