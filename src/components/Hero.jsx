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

  const current = products[activeIndex];

  // Mouse move parallax for subtle 3D tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
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
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-8 transition-colors duration-1000 ease-out select-none"
      style={{
        background: current.heroBg,
      }}
    >
      {/* Subtle vignette and texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />

      {/* TOP RIGHT FLOATING "BUY NOW" CARD (Exact match to screenshot) */}
      <div className="absolute top-28 right-6 sm:right-12 z-30 hidden md:block">
        <motion.div
          key={`card-${current.id}`}
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-black/35 backdrop-blur-xl border border-white/20 rounded-2xl p-3.5 pr-5 flex items-center space-x-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/40 transition group"
        >
          {/* Mini preview thumbnail */}
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center p-1 border border-white/10 overflow-hidden"
            style={{ backgroundColor: current.thumbBg || 'rgba(0,0,0,0.4)' }}
          >
            <img
              src={current.main_image}
              alt={current.name}
              className="h-full w-full object-contain filter drop-shadow-md group-hover:scale-110 transition duration-300"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-bold text-white tracking-wide">{current.name}</span>
              <span className="text-xs text-white/60">{current.pack_size}</span>
            </div>
            <div className="flex items-center space-x-4 pt-1">
              <span className="text-sm font-extrabold text-white">${current.listing_price}</span>
              <button
                onClick={handleBuyNow}
                className="text-xs font-semibold text-white/90 hover:text-white bg-white/15 hover:bg-white/25 px-3 py-1 rounded-full border border-white/20 transition flex items-center space-x-1"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CENTER STAGE: Giant Stacked Typography + 3D Floating Can + Floating Beans */}
      <div className="relative flex-1 flex items-center justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* GIANT BACKGROUND TYPOGRAPHY (Original Black / Toasted Vanilla / etc.) */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current.id}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="leading-[0.85] tracking-tighter uppercase font-black font-sans text-white/95"
            >
              <div
                className="text-[17vw] sm:text-[14vw] lg:text-[13vw] font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                }}
              >
                {current.heroTitleLine1}
              </div>
              <div className="flex items-baseline space-x-4">
                <div
                  className="text-[17vw] sm:text-[14vw] lg:text-[13vw] font-black drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                  }}
                >
                  {current.heroTitleLine2}
                </div>
                <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-white/70 font-semibold pl-2">
                  {current.heroSubhead}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FLOATING 3D COFFEE BEANS (Scattered with parallax & float keyframes) */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* Bean 1 - Top Center above can */}
          <motion.img
            src="/Images/imgi_1_6aa806d43c8c7d3a6720d66a_b336a1245abc35e8ae16f923977bc902e7f02c191c2f9b574b2a04563ff8c07e.avif"
            alt="Coffee Bean"
            className="absolute top-[16%] left-[48%] sm:left-[52%] w-10 sm:w-14 object-contain filter drop-shadow-xl"
            animate={{
              y: [-12, 12, -12],
              x: [mousePos.x * 0.4, -mousePos.x * 0.4, mousePos.x * 0.4],
              rotate: [0, 25, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Bean 2 - Middle Left behind/beside can */}
          <motion.img
            src="/Images/imgi_2_6ac7f5dfa46b35d512575e91_dc82ef76c7c3c16aebbe54542dee0e2d232fa25c2033b80424daa7a9f51b20c1.avif"
            alt="Coffee Bean"
            className="absolute top-[32%] left-[36%] sm:left-[42%] w-12 sm:w-16 object-contain filter drop-shadow-2xl"
            animate={{
              y: [10, -10, 10],
              x: [-mousePos.x * 0.5, mousePos.x * 0.5, -mousePos.x * 0.5],
              rotate: [-15, 15, -15],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />

          {/* Bean 3 - Right of can */}
          <motion.img
            src="/Images/imgi_3_6ab09d8a6ec6f9a215d6a62b_7eba62d200b231f4fc4c7f4972f1419d824f83c8385d5d47453f2c6e4fa9509a.avif"
            alt="Coffee Bean"
            className="absolute top-[28%] right-[22%] sm:right-[26%] w-11 sm:w-14 object-contain filter drop-shadow-xl"
            animate={{
              y: [-8, 14, -8],
              x: [mousePos.x * 0.3, -mousePos.x * 0.3, mousePos.x * 0.3],
              rotate: [20, -10, 20],
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Bean 4 - Below can right */}
          <motion.img
            src="/Images/imgi_4_6aa709e834a002fe681a8926_099ba3b9e73b0bd730cbee159ba46c0dbf491d081fcf3078769b0336db39addf.avif"
            alt="Coffee Bean"
            className="absolute bottom-[24%] right-[28%] sm:right-[32%] w-14 sm:w-20 object-contain filter drop-shadow-2xl"
            animate={{
              y: [12, -12, 12],
              x: [-mousePos.x * 0.4, mousePos.x * 0.4, -mousePos.x * 0.4],
              rotate: [-30, 10, -30],
            }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />

          {/* Bean 5 - Bottom Far Right */}
          <motion.img
            src="/Images/imgi_1_6aa806d43c8c7d3a6720d66a_b336a1245abc35e8ae16f923977bc902e7f02c191c2f9b574b2a04563ff8c07e.avif"
            alt="Coffee Bean"
            className="absolute bottom-[16%] right-[10%] sm:right-[15%] w-8 sm:w-12 object-contain filter drop-shadow-lg opacity-80"
            animate={{
              y: [-10, 10, -10],
              rotate: [45, 90, 45],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>

        {/* HERO CAN CENTERPIECE (Framer Motion 3D Physics) */}
        <div className="relative z-20 flex items-center justify-center w-full my-auto py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`can-${current.id}`}
              initial={{ opacity: 0, scale: 0.85, y: 30, rotate: -18 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [-10, 10, -10],
                rotate: [-14, -10, -14],
              }}
              exit={{ opacity: 0, scale: 0.85, y: -30, rotate: -6 }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * 0.4}deg) rotateY(${mousePos.x * 0.5}deg)`,
              }}
              className="relative max-w-xs sm:max-w-md lg:max-w-lg cursor-pointer ml-auto mr-12 sm:mr-24 lg:mr-32"
              onClick={handleBuyNow}
            >
              <img
                src={current.main_image}
                alt={current.name}
                className="w-full h-[400px] sm:h-[520px] lg:h-[620px] object-contain filter drop-shadow-[0_45px_65px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM INFO BAR & FLAVOR SWITCHER THUMBNAILS (Exact match to screenshot) */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-auto pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Column 1: Flavor Title & Class */}
          <div className="md:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
              {current.name}
            </h2>
            <p className="text-xs text-white/70 uppercase tracking-widest mt-0.5">
              Performance Cold Brew
            </p>
          </div>

          {/* Column 2: Origin & Adaptogens */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              {current.feature1Title}
            </h3>
            <p className="text-xs text-white/70 mt-0.5 leading-snug">
              {current.feature1Desc}
            </p>
          </div>

          {/* Column 3: Citicoline Nootropic */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              {current.feature2Title}
            </h3>
            <p className="text-xs text-white/70 mt-0.5 leading-snug">
              {current.feature2Desc}
            </p>
          </div>

          {/* Column 4: FLAVOR SWITCHER THUMBNAILS (3 visible cards exactly like screenshot) */}
          <div className="md:col-span-3 flex items-center justify-between md:justify-end space-x-3">
            <div className="flex items-center space-x-2.5">
              {products.slice(0, 3).map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-14 h-16 sm:w-16 sm:h-20 rounded-xl p-1.5 transition-all duration-300 flex items-center justify-center overflow-hidden ${
                    activeIndex === idx
                      ? 'border-2 border-white ring-2 ring-white/40 scale-105 shadow-2xl'
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
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-0 border-2 border-white rounded-xl pointer-events-none"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Dialed Starburst Logo at bottom right */}
            <div className="hidden lg:flex items-center space-x-1.5 text-white/80 pl-2">
              <img
                src="/Images/download (2).svg"
                alt="Dialed Starburst"
                className="w-5 h-5 invert brightness-200"
              />
              <span className="font-serif text-sm font-bold tracking-wider">Dialed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
