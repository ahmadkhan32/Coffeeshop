import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Shield, Award } from 'lucide-react';
import { products } from '../data/products';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#1E1E1E]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E58A2B]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#C5A059]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Review Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#181818] border border-[#2E2E2E] shadow-inner text-xs font-semibold text-gray-300">
            <div className="flex text-[#E58A2B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>4.8 / 5.0 Rating • 6,700+ High-Performance Cans Shipped</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
            GET DIALED. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E58A2B] to-[#C5A059]">
              STAY DIALED.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Functional Colombian Cold Brew fortified with <strong className="text-white">Cognizin® Citicoline</strong> and stress-shielding adaptogens. Engineered for flow state, laser focus, and zero afternoon crash.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E58A2B] hover:bg-[#f39535] text-black font-extrabold uppercase tracking-wider text-sm transition shadow-xl hover:shadow-[#E58A2B]/20 flex items-center justify-center space-x-2"
            >
              <span>Shop All 4 Flavors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/dialed-for-teams"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] text-white border border-[#333] font-bold uppercase tracking-wider text-sm transition flex items-center justify-center space-x-2"
            >
              <span>Dialed For Teams</span>
            </Link>
          </div>
        </div>

        {/* Floating Product Cans Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {products.map((item, idx) => (
            <Link
              key={item.id}
              to={item.url}
              className="group relative rounded-2xl bg-gradient-to-b from-[#181818] to-[#101010] p-4 border border-[#262626] hover:border-[#E58A2B]/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center shadow-lg"
            >
              {/* Badge */}
              <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-black/70 text-[#E58A2B] border border-[#333]">
                {item.badge}
              </span>

              {/* Can Image */}
              <div className="relative w-full h-48 sm:h-56 my-2 flex items-center justify-center overflow-hidden">
                <img
                  src={item.main_image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Price */}
              <div className="w-full mt-2 pt-2 border-t border-[#222]">
                <h3 className="text-sm font-bold text-white group-hover:text-[#E58A2B] transition truncate">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  ${item.detail_price} <span className="text-[10px] text-gray-500">/ 12-pack</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Feature Highlights Row */}
        <div className="mt-16 pt-10 border-t border-[#1C1C1C] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <Zap className="w-6 h-6 text-[#E58A2B]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">200mg Clean Caffeine</h4>
            <p className="text-xs text-gray-400">Pure high-altitude Colombian beans</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Brain className="w-6 h-6 text-[#E58A2B]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Cognizin® Citicoline</h4>
            <p className="text-xs text-gray-400">Sustained memory and cognition</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Shield className="w-6 h-6 text-[#E58A2B]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Adaptogen Defense</h4>
            <p className="text-xs text-gray-400">Rhodiola & Ashwagandha support</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Award className="w-6 h-6 text-[#E58A2B]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Zero Crash Formula</h4>
            <p className="text-xs text-gray-400">No added sugars or artificial junk</p>
          </div>
        </div>
      </div>
    </section>
  );
}
