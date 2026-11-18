import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const dispatch = useDispatch();

  const current = products[activeIndex] || products[0];

  // Subtle interactive mouse parallax tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBuyNow = () => {
    dispatch(addToCart({ product: current, quantity: 1, isSubscription: false }));
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 transition-colors duration-1000 ease-out select-none"
      style={{
        background: current.heroBg,
      }}
    >
      {/* Subtle depth vignette matching Dialed Coffee live reference */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] pointer-events-none z-[1]" />

      {/* TOP RIGHT FLOATING BUY CARD (Exact match to official Dialed reference screenshot) */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-10 lg:right-14 z-30 hidden sm:block">
        <motion.div
          key={`card-${current.id}`}
          initial={{ opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white/95 backdrop-blur-md border border-white/40 rounded-2xl p-3 sm:p-3.5 pr-4 sm:pr-5 flex items-center space-x-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] text-black transition group"
        >
          {/* Mini preview thumbnail in colored container */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center p-1 border border-black/10 overflow-hidden flex-shrink-0"
            style={{ backgroundColor: current.thumbBg || '#7A050D' }}
          >
            <img
              src={current.main_image}
              alt={current.name}
              className="h-full w-full object-contain filter drop-shadow-md group-hover:scale-110 transition duration-300"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-xs sm:text-sm font-bold text-gray-900 tracking-tight">{current.name}</span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium">{current.pack_size}</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 pt-0.5">
              <span className="text-xs sm:text-sm font-extrabold text-black">${current.listing_price}</span>
              <button
                onClick={handleBuyNow}
                className="text-[11px] sm:text-xs font-semibold text-white bg-black hover:bg-neutral-800 px-3.5 py-1 rounded-full transition flex items-center space-x-1 active:scale-95 shadow-sm"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CENTER STAGE: Giant Stacked Typography + Continously Moving Single Can + Continously Moving Beans */}
      <div className="relative flex-1 flex items-center justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
        
        {/* GIANT BACKGROUND WATERMARK TYPOGRAPHY (Original Black / Toasted Vanilla / etc.) */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current.id}`}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="leading-[0.82] tracking-tighter uppercase font-black font-sans text-white/95 pl-2 sm:pl-4"
            >
              <div
                className="text-[20vw] sm:text-[15vw] lg:text-[13.5vw] font-black drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.06)',
                }}
              >
                {current.heroTitleLine1}
              </div>
              <div className="flex items-baseline space-x-4">
                <div
                  className="text-[20vw] sm:text-[15vw] lg:text-[13.5vw] font-black drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.06)',
                  }}
                >
                  {current.heroTitleLine2}
                </div>
                <span className="hidden sm:inline-block text-[11px] sm:text-xs uppercase tracking-widest text-white/75 font-semibold pl-2">
                  {current.heroSubhead}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTINUOUSLY MOVING COFFEE BEANS (Endless floating orbital physics around can) */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* Bean 1 - Above the can, floating and swaying continuously */}
          <motion.img
            src="/Images/imgi_1_6aa806d43c8c7d3a6720d66a_b336a1245abc35e8ae16f923977bc902e7f02c191c2f9b574b2a04563ff8c07e.avif"
            alt="Coffee Bean"
            className="absolute top-[12%] left-[47%] sm:left-[52%] w-10 sm:w-14 object-contain filter drop-shadow-xl"
            animate={{
              y: [-16, 16, -16],
              x: [-8, 8, -8],
              rotate: [0, 35, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bean 2 - Top left near can rim, tumbling continuously */}
          <motion.img
            src="/Images/imgi_2_6ac7f5dfa46b35d512575e91_dc82ef76c7c3c16aebbe54542dee0e2d232fa25c2033b80424daa7a9f51b20c1.avif"
            alt="Coffee Bean"
            className="absolute top-[22%] left-[36%] sm:left-[42%] w-11 sm:w-15 object-contain filter drop-shadow-2xl"
            animate={{
              y: [14, -18, 14],
              x: [10, -10, 10],
              rotate: [-25, 25, -25],
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bean 3 - Mid-left floating near typography */}
          <motion.img
            src="/Images/imgi_3_6ab09d8a6ec6f9a215d6a62b_7eba62d200b231f4fc4c7f4972f1419d824f83c8385d5d47453f2c6e4fa9509a.avif"
            alt="Coffee Bean"
            className="absolute top-[38%] left-[33%] sm:left-[39%] w-9 sm:w-13 object-contain filter drop-shadow-xl"
            animate={{
              y: [-12, 14, -12],
              x: [-12, 10, -12],
              rotate: [15, -30, 15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bean 4 - Right of can, floating smoothly */}
          <motion.img
            src="/Images/imgi_4_6aa709e834a002fe681a8926_099ba3b9e73b0bd730cbee159ba46c0dbf491d081fcf3078769b0336db39addf.avif"
            alt="Coffee Bean"
            className="absolute top-[28%] right-[18%] sm:right-[24%] w-12 sm:w-16 object-contain filter drop-shadow-2xl"
            animate={{
              y: [-15, 18, -15],
              x: [8, -12, 8],
              rotate: [20, -15, 20],
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bean 5 - Below can, drifting continuously */}
          <motion.img
            src="/Images/imgi_1_6aa806d43c8c7d3a6720d66a_b336a1245abc35e8ae16f923977bc902e7f02c191c2f9b574b2a04563ff8c07e.avif"
            alt="Coffee Bean"
            className="absolute bottom-[20%] right-[22%] sm:right-[28%] w-12 sm:w-16 object-contain filter drop-shadow-2xl"
            animate={{
              y: [16, -16, 16],
              x: [-14, 14, -14],
              rotate: [-35, 15, -35],
            }}
            transition={{
              duration: 7.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bean 6 - Bottom far right near bottom row */}
          <motion.img
            src="/Images/imgi_2_6ac7f5dfa46b35d512575e91_dc82ef76c7c3c16aebbe54542dee0e2d232fa25c2033b80424daa7a9f51b20c1.avif"
            alt="Coffee Bean"
            className="absolute bottom-[14%] right-[8%] sm:right-[14%] w-9 sm:w-13 object-contain filter drop-shadow-lg opacity-85"
            animate={{
              y: [-12, 12, -12],
              x: [6, -6, 6],
              rotate: [30, 80, 30],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* CONTINUOUSLY MOVING SINGLE 3D COFFEE CAN - STRICTLY 1 CAN WITH ZERO BACKGROUND */}
        <div className="relative z-20 flex items-center justify-center w-full my-auto py-4 sm:py-8 pointer-events-auto">
          <motion.div
            className="relative max-w-[270px] sm:max-w-md lg:max-w-lg cursor-pointer ml-auto mr-4 sm:mr-16 lg:mr-28"
            onClick={handleBuyNow}
            animate={{
              y: [-16, 16, -16],
              rotate: [-12, -7, -12],
              scale: [1, 1.018, 1],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              transform: `perspective(1000px) rotateX(${mousePos.y * 0.35}deg) rotateY(${mousePos.x * 0.45}deg)`,
            }}
          >
            {/* Pure isolated transparent can with no card background rectangle */}
            <img
              key={`hero-can-img-${current.id}`}
              src={current.main_image}
              alt={current.name}
              className="w-full h-[360px] sm:h-[480px] lg:h-[590px] object-contain filter drop-shadow-[0_45px_70px_rgba(0,0,0,0.85)] hover:scale-105 transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM INFO ROW & CENTER-ALIGNED FLAVOR SWITCHER (Exact match to Dialed Coffee reference screenshot) */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-auto pt-4 sm:pt-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-white">
          
          {/* Left: Product Name & Category */}
          <div className="text-center md:text-left min-w-[170px]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-wide">
              {current.name}
            </h2>
            <p className="text-[11px] sm:text-xs text-white/70 uppercase tracking-widest mt-0.5">
              Performance Cold Brew
            </p>
          </div>

          {/* Middle-Left: Origin & Adaptogens */}
          <div className="hidden lg:block text-left max-w-[210px]">
            <h3 className="text-xs font-bold text-white tracking-wider">
              {current.feature1Title}
            </h3>
            <p className="text-[11px] text-white/70 mt-0.5 leading-snug">
              {current.feature1Desc}
            </p>
          </div>

          {/* CENTER: FLAVOR SWITCHER (Centered alignment) */}
          <div className="flex items-center justify-center space-x-2.5 sm:space-x-3.5 my-1">
            {products.slice(0, 3).map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-14 h-16 sm:w-16 sm:h-20 rounded-xl p-1.5 transition-all duration-300 flex items-center justify-center overflow-hidden ${
                    isActive
                      ? 'border-2 border-white ring-2 ring-white/60 scale-105 shadow-2xl z-10'
                      : 'border border-white/20 opacity-60 hover:opacity-100 hover:scale-102'
                  }`}
                  style={{ backgroundColor: item.thumbBg || 'rgba(0,0,0,0.5)' }}
                  aria-label={`Switch flavor to ${item.name}`}
                >
                  <img
                    src={item.main_image}
                    alt={item.name}
                    className="h-full w-full object-contain filter drop-shadow-md"
                  />
                  {isActive && (
                    <motion.div
                      layoutId="active-hero-thumb"
                      className="absolute inset-0 border-2 border-white rounded-xl pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Middle-Right: Citicoline Nootropic */}
          <div className="hidden lg:block text-left max-w-[210px]">
            <h3 className="text-xs font-bold text-white tracking-wider">
              {current.feature2Title}
            </h3>
            <p className="text-[11px] text-white/70 mt-0.5 leading-snug">
              {current.feature2Desc}
            </p>
          </div>

          {/* Far Right: Dialed Sunburst Logo & Wordmark (Exact screenshot match) */}
          <div className="hidden md:flex items-center space-x-2 text-white/90 min-w-[120px] justify-end">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M18.339 0h-.677A17.71 17.71 0 0 0 0 17.662v.677A17.71 17.71 0 0 0 17.662 36h.677A17.706 17.706 0 0 0 36 18.339v-.677A17.707 17.707 0 0 0 18.339 0Zm-.339 31.796a13.796 13.796 0 1 1 0-27.592 13.796 13.796 0 0 1 0 27.592Z"
              />
              <path
                fill="currentColor"
                d="M18 10.42a7.58 7.58 0 1 0 7.58 7.58A7.59 7.59 0 0 0 18 10.42Zm0 12.634a5.054 5.054 0 1 1 5.054-5.054A5.06 5.06 0 0 1 18 23.054Z"
              />
            </svg>
            <span className="font-serif text-base font-bold tracking-wider">Dialed</span>
          </div>

        </div>
      </div>
    </section>
  );
}
