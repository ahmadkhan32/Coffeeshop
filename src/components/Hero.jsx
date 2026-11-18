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

  // Subtle interactive mouse parallax tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
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
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-6 transition-colors duration-1000 ease-out select-none"
      style={{
        background: current.heroBg,
      }}
    >
      {/* Subtle vignette and depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

      {/* TOP RIGHT FLOATING "BUY NOW" CARD (Exact match to uploaded screenshot) */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-10 z-30 hidden sm:block">
        <motion.div
          key={`card-${current.id}`}
          initial={{ opacity: 0, y: -12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-3 sm:p-3.5 pr-4 sm:pr-5 flex items-center space-x-3.5 shadow-[0_20px_45px_rgba(0,0,0,0.6)] hover:border-white/40 transition group"
        >
          {/* Mini preview thumbnail in colored container */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center p-1 border border-white/15 overflow-hidden flex-shrink-0"
            style={{ backgroundColor: current.thumbBg || 'rgba(0,0,0,0.45)' }}
          >
            <img
              src={current.main_image}
              alt={current.name}
              className="h-full w-full object-contain filter drop-shadow-md group-hover:scale-110 transition duration-300"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">{current.name}</span>
              <span className="text-[11px] sm:text-xs text-white/60">{current.pack_size}</span>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 pt-0.5">
              <span className="text-xs sm:text-sm font-extrabold text-white">${current.listing_price}</span>
              <button
                onClick={handleBuyNow}
                className="text-[11px] sm:text-xs font-semibold text-white/95 hover:text-white bg-white/15 hover:bg-white/25 px-3 py-1 rounded-full border border-white/25 transition flex items-center space-x-1 active:scale-95"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CENTER STAGE: Giant Stacked Typography + Continously Moving 3D Floating Can + Continously Moving Beans */}
      <div className="relative flex-1 flex items-center justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        {/* GIANT BACKGROUND WATERMARK TYPOGRAPHY (Original Black / Toasted Vanilla / etc.) */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current.id}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="leading-[0.82] tracking-tighter uppercase font-black font-sans text-white/95 pl-2 sm:pl-4"
            >
              <div
                className="text-[20vw] sm:text-[15vw] lg:text-[13.5vw] font-black drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.08)',
                }}
              >
                {current.heroTitleLine1}
              </div>
              <div className="flex items-baseline space-x-4">
                <div
                  className="text-[20vw] sm:text-[15vw] lg:text-[13.5vw] font-black drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.08)',
                  }}
                >
                  {current.heroTitleLine2}
                </div>
                <span className="hidden sm:inline-block text-[11px] sm:text-xs uppercase tracking-widest text-white/70 font-semibold pl-2">
                  {current.heroSubhead}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTINUOUSLY MOVING 3D COFFEE BEANS (Flowing endlessly around the can) */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* Bean 1 - Above the can, floating and swaying continuously */}
          <motion.img
            src="/Images/imgi_1_6aa806d43c8c7d3a6720d66a_b336a1245abc35e8ae16f923977bc902e7f02c191c2f9b574b2a04563ff8c07e.avif"
            alt="Coffee Bean"
            className="absolute top-[14%] left-[48%] sm:left-[53%] w-10 sm:w-14 object-contain filter drop-shadow-xl"
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
            className="absolute top-[24%] left-[38%] sm:left-[44%] w-11 sm:w-15 object-contain filter drop-shadow-2xl"
            animate={{
              y: [14, -18, 14],
              x: [10, -10, 10],
              rotate: [-25, 25, -25],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bean 3 - Mid-left near the letter B, floating continuously */}
          <motion.img
            src="/Images/imgi_3_6ab09d8a6ec6f9a215d6a62b_7eba62d200b231f4fc4c7f4972f1419d824f83c8385d5d47453f2c6e4fa9509a.avif"
            alt="Coffee Bean"
            className="absolute top-[38%] left-[34%] sm:left-[40%] w-9 sm:w-13 object-contain filter drop-shadow-xl"
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
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bean 5 - Below can, drifting continuously */}
          <motion.img
            src="/Images/imgi_1_6aa806d43c8c7d3a6720d66a_b336a1245abc35e8ae16f923977bc902e7f02c191c2f9b574b2a04563ff8c07e.avif"
            alt="Coffee Bean"
            className="absolute bottom-[22%] right-[24%] sm:right-[30%] w-13 sm:w-18 object-contain filter drop-shadow-2xl"
            animate={{
              y: [16, -16, 16],
              x: [-14, 14, -14],
              rotate: [-35, 15, -35],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Bean 6 - Bottom far right, floating near footer */}
          <motion.img
            src="/Images/imgi_2_6ac7f5dfa46b35d512575e91_dc82ef76c7c3c16aebbe54542dee0e2d232fa25c2033b80424daa7a9f51b20c1.avif"
            alt="Coffee Bean"
            className="absolute bottom-[16%] right-[8%] sm:right-[14%] w-9 sm:w-13 object-contain filter drop-shadow-lg opacity-85"
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

        {/* CONTINUOUSLY MOVING 3D COFFEE CAN (Seamless infinite float & wobble physics) */}
        <div className="relative z-20 flex items-center justify-center w-full my-auto py-4 sm:py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`can-${current.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-[280px] sm:max-w-md lg:max-w-lg cursor-pointer ml-auto mr-4 sm:mr-16 lg:mr-28"
              onClick={handleBuyNow}
            >
              {/* Continuous floating wrapper running perpetually without interruption */}
              <motion.div
                animate={{
                  y: [-18, 18, -18],
                  rotate: [-14, -8, -14],
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePos.y * 0.35}deg) rotateY(${mousePos.x * 0.45}deg)`,
                }}
                className="w-full flex items-center justify-center"
              >
                <img
                  src={current.main_image}
                  alt={current.name}
                  className="w-full h-[360px] sm:h-[480px] lg:h-[590px] object-contain filter drop-shadow-[0_45px_70px_rgba(0,0,0,0.85)] hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM INFO ROW & CENTERED FLAVOR SWITCHER SLIDER (Exact match to screenshot & centered alignment) */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-auto pt-4 sm:pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 sm:gap-6 items-center">
          
          {/* Column 1: Flavor Title & Class */}
          <div className="col-span-2 sm:col-span-1 md:col-span-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-wide">
              {current.name}
            </h2>
            <p className="text-[11px] sm:text-xs text-white/70 uppercase tracking-widest mt-0.5">
              Performance Cold Brew
            </p>
          </div>

          {/* Column 2: Origin & Adaptogens */}
          <div className="hidden md:block md:col-span-2 lg:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              {current.feature1Title}
            </h3>
            <p className="text-[11px] sm:text-xs text-white/70 mt-0.5 leading-snug">
              {current.feature1Desc}
            </p>
          </div>

          {/* Column 3: Citicoline Nootropic */}
          <div className="hidden lg:block lg:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              {current.feature2Title}
            </h3>
            <p className="text-xs text-white/70 mt-0.5 leading-snug">
              {current.feature2Desc}
            </p>
          </div>

          {/* Column 4: CENTERED FLAVOR SWITCHER SLIDER (Alignment centered from slider when changing) */}
          <div className="col-span-2 sm:col-span-1 md:col-span-7 lg:col-span-4 flex items-center justify-center md:justify-end space-x-3 sm:space-x-4">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 bg-black/25 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-lg">
              {products.slice(0, 3).map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-14 h-16 sm:w-16 sm:h-20 rounded-xl p-1.5 transition-all duration-300 flex items-center justify-center overflow-hidden ${
                      isActive
                        ? 'border-2 border-white ring-2 ring-white/50 scale-105 shadow-2xl z-10'
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

            {/* Dialed Starburst Logo & Wordmark (Exact screenshot match) */}
            <div className="hidden sm:flex items-center space-x-1.5 text-white/90 pl-1">
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
