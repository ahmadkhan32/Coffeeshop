import React from 'react';
import { Brain, Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FunctionalIngredients() {
  const ingredients = [
    {
      title: "Cognizin® Citicoline",
      dose: "250mg clinically studied dose",
      description: "A patented, pharmaceutical-grade brain nutrient that fuels cellular ATP production in the frontal cortex, supporting sustained attention, focus, and memory recall without agitation.",
      icon: Brain,
      tag: "Cognitive Driver"
    },
    {
      title: "High-Altitude Colombian Arabica",
      dose: "180 - 200mg cold brew caffeine",
      description: "Directly sourced from high-elevation estates in Huila, Colombia. Slow-steeped at 38°F for 18 hours to extract rich cocoa and caramel notes with 70% less acidity than traditional hot coffee.",
      icon: Zap,
      tag: "Clean Energy"
    },
    {
      title: "KSM-66® Ashwagandha & Rhodiola",
      dose: "Standardized adaptogenic matrix",
      description: "Herbal adaptogens that regulate cortisol response and blunt the physical stress of caffeine, ensuring peak executive flow state without elevated heart palpitations or nervous tension.",
      icon: Shield,
      tag: "Stress Defense"
    },
    {
      title: "Suntheanine® L-Theanine",
      dose: "Pure fermentation-derived amino acid",
      description: "Synergizes with caffeine to stimulate soothing alpha brain waves, creating a calm yet acutely alert mental state often described by coders and surgeons as 'the flow state'.",
      icon: Sparkles,
      tag: "Focus Harmony"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0A0A0A] border-b border-[#1E1E1E] overflow-hidden">
      {/* Background Banner Graphic */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <img
          src="/Images/imgi_15_6a2002262d86c589fa4f1b90_dialed-ingr-bg-img.webp"
          alt="Dialed Ingredients"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest">
            Backed By Science
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Beyond Regular Caffeine
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Most canned coffee is loaded with refined sugar and low-grade robusta that spikes your blood glucose and leaves you drained by 2 PM. Dialed pairs cold-extracted specialty coffee with nootropics that sustain focus for 6+ hours.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ingredients.map((ing, idx) => {
            const Icon = ing.icon;
            return (
              <div
                key={idx}
                className="bg-[#121212]/90 border border-[#252525] hover:border-[#E58A2B]/60 p-8 rounded-2xl transition duration-300 backdrop-blur-sm space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#E58A2B]/10 border border-[#E58A2B]/30 flex items-center justify-center text-[#E58A2B]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 bg-[#1A1A1A] px-3 py-1 rounded-full border border-[#2C2C2C]">
                    {ing.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                    {ing.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#E58A2B] mt-0.5">
                    {ing.dose}
                  </p>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {ing.description}
                </p>

                <div className="pt-2 flex items-center space-x-2 text-xs text-[#34C759]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Clinically verified dosage for active performers</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-black uppercase tracking-wider text-white text-center mb-6">
            Dialed Performance vs. Traditional Ready-To-Drink Brands
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#2C2C2C] text-gray-400 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Feature</th>
                  <th className="py-3 px-4 text-[#E58A2B] font-bold">Dialed Performance</th>
                  <th className="py-3 px-4">Standard Energy Drink</th>
                  <th className="py-3 px-4">Traditional Canned Latte</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222] text-gray-300">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Caffeine Quality</td>
                  <td className="py-3 px-4 text-[#34C759] font-bold">Single-Origin Colombian Arabica</td>
                  <td className="py-3 px-4">Synthetic Caffeine Anhydrous</td>
                  <td className="py-3 px-4">Commodity Robusta</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Refined Sugars</td>
                  <td className="py-3 px-4 text-[#34C759] font-bold">0g (Naturally Sweetened)</td>
                  <td className="py-3 px-4">27g - 45g</td>
                  <td className="py-3 px-4">22g - 36g</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Citicoline (Cognizin®)</td>
                  <td className="py-3 px-4 text-[#34C759] font-bold">250mg Brain Energy</td>
                  <td className="py-3 px-4 text-gray-500">None</td>
                  <td className="py-3 px-4 text-gray-500">None</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Afternoon Crash</td>
                  <td className="py-3 px-4 text-[#34C759] font-bold">None (Smooth baseline taper)</td>
                  <td className="py-3 px-4 text-red-400">Severe Sugar/Caffeine Crash</td>
                  <td className="py-3 px-4 text-red-400">Sluggish Insulin Spike</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
