import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { ChevronLeft, ChevronRight, ShoppingBag, Check, Star } from 'lucide-react';
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
    <section className="py-24 bg-[#090909] border-b border-[#1E1E1E] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* CENTERED HEADER (Alignment from center) */}
        <div className="max-w-2xl mx-auto mb-10 text-center space-y-3">
          <span className="inline-block text-[#E58A2B] text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20">
            Interactive Flavor Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Formula Breakdown
          </h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Choose your focus profile. Slow-steeped Colombian Arabica paired with targeted nootropic blends.
          </p>

          {/* CENTERED NAVIGATION CONTROLS */}
          <div className="flex items-center justify-center space-x-4 pt-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-2xl bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333] transition hover:scale-105 active:scale-95 shadow-md"
              aria-label="Previous flavor"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="px-4 py-1.5 rounded-full bg-[#161616] border border-[#2E2E2E] text-xs font-bold text-gray-300 font-mono tracking-widest">
              0{currentIndex + 1} / 0{products.length}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-2xl bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333] transition hover:scale-105 active:scale-95 shadow-md"
              aria-label="Next flavor"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CENTERED CAROUSEL CARD WITH DYNAMIC GLOW */}
        <div className="w-full bg-[#121212] border border-[#262626] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow centered on product */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: currentProduct.themeColor || currentProduct.accent_color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Can Showcase Centered */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-sm h-72 sm:h-96 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`slider-img-${currentProduct.id}`}
                    src={currentProduct.main_image}
                    alt={currentProduct.name}
                    initial={{ opacity: 0, scale: 0.88, rotate: -6, y: 15 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: [-6, -2, -6],
                      y: [-10, 10, -10],
                    }}
                    exit={{ opacity: 0, scale: 0.88, rotate: 6, y: -15 }}
                    transition={{
                      opacity: { duration: 0.35 },
                      scale: { duration: 0.4 },
                      y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                      rotate: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)]"
                  />
                </AnimatePresence>
              </div>

              {/* CENTERED THUMBNAIL SELECTORS BELOW CAN */}
              <div className="flex items-center justify-center space-x-2.5 sm:space-x-3.5 mt-6">
                {products.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setAdded(false);
                    }}
                    className={`relative w-14 h-16 sm:w-16 sm:h-20 rounded-2xl p-1.5 transition-all duration-300 flex items-center justify-center ${
                      currentIndex === idx
                        ? 'border-2 border-white ring-2 ring-white/30 scale-105 shadow-xl'
                        : 'border border-[#333] opacity-60 hover:opacity-100 hover:scale-102'
                    }`}
                    style={{ backgroundColor: item.thumbBg || '#181818' }}
                  >
                    <img
                      src={item.main_image}
                      alt={item.name}
                      className="w-full h-full object-contain filter drop-shadow"
                    />
                    {currentIndex === idx && (
                      <motion.div
                        layoutId="active-slider-thumb"
                        className="absolute inset-0 border-2 border-white rounded-2xl pointer-events-none"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details Centered / Balanced on Right */}
            <div className="lg:col-span-6 text-left space-y-5">
              <div>
                <div className="flex items-center space-x-2.5 mb-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-black uppercase tracking-wider border border-white/20">
                    {currentProduct.badge}
                  </span>
                  <div className="flex items-center text-[#E58A2B] text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current mr-1" />
                    <span className="text-white">{currentProduct.rating}</span>
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

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {currentProduct.description}
              </p>

              {/* Nutritional / Functional Stats Pill */}
              <div className="grid grid-cols-3 gap-3 py-3 border-y border-[#262626]">
                <div className="bg-[#181818] p-3 rounded-2xl text-center border border-[#2E2E2E]">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Caffeine</span>
                  <span className="text-base sm:text-lg font-black text-white">{currentProduct.caffeine}</span>
                </div>
                <div className="bg-[#181818] p-3 rounded-2xl text-center border border-[#2E2E2E]">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Calories</span>
                  <span className="text-base sm:text-lg font-black text-white">{currentProduct.calories}</span>
                </div>
                <div className="bg-[#181818] p-3 rounded-2xl text-center border border-[#2E2E2E]">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Sugar</span>
                  <span className="text-base sm:text-lg font-black text-[#34C759]">{currentProduct.sugar}</span>
                </div>
              </div>

              {/* Purchase Type Selector */}
              <div className="space-y-2.5">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSub(false)}
                    className={`p-3.5 rounded-2xl text-left border transition ${
                      !isSub
                        ? 'bg-[#222] border-white text-white shadow-lg'
                        : 'bg-[#181818] border-[#333] text-gray-400'
                    }`}
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider">One-Time Pack</div>
                    <div className="text-sm sm:text-base font-black text-white mt-0.5">
                      ${currentProduct.detail_price}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsSub(true)}
                    className={`p-3.5 rounded-2xl text-left border relative transition ${
                      isSub
                        ? 'bg-[#222] border-[#E58A2B] text-white shadow-lg'
                        : 'bg-[#181818] border-[#333] text-gray-400'
                    }`}
                  >
                    <span className="absolute -top-2.5 right-3 bg-[#E58A2B] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow">
                      Save 15%
                    </span>
                    <div className="text-[11px] font-bold uppercase tracking-wider">Subscribe & Save</div>
                    <div className="text-sm sm:text-base font-black text-[#34C759] mt-0.5">
                      ${(currentProduct.detail_price * 0.85).toFixed(2)}
                    </div>
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 px-6 rounded-2xl font-black text-xs uppercase tracking-widest transition flex items-center justify-center space-x-2 ${
                    added ? 'bg-[#34C759] text-black' : 'bg-white hover:bg-gray-200 text-black shadow-xl'
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
                  className="px-5 py-3.5 rounded-2xl bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white border border-[#333] font-bold text-xs uppercase tracking-wider text-center transition flex items-center justify-center"
                >
                  Full Details
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
