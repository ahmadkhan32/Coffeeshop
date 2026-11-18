import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  const stories = [
    {
      title: "Direct-From-Estate Colombian Beans",
      subtitle: "Huila & Antioquia Altitudes",
      description: "We work directly with generational smallholder farmers in Colombia's volcanic Andean valleys. Grown at 1,750 meters above sea level, producing dense beans with rich notes of dark chocolate and panela.",
      image: "/Images/imgi_21_6a3646bd99c333882d4e488f_bg1.avif",
      tag: "Source"
    },
    {
      title: "Slow 18-Hour Micro-Batch Extraction",
      subtitle: "Craft Cold Immersion",
      description: "Heated brewing oxidizes oils and creates bitter acidity. Our proprietary triple-filtered sub-zero brewing process extracts delicate aromatic compounds while discarding harsh bitterness.",
      image: "/Images/imgi_20_6a3646fee2381aba2938109e_bg2.avif",
      tag: "Process"
    },
    {
      title: "Engineered For Peak Cognitive Endurance",
      subtitle: "Nootropic Precision",
      description: "Tested and refined alongside competitive endurance athletes, venture capitalists, software architects, and creators who cannot afford brain fog in critical moments.",
      image: "/Images/imgi_19_6a36475ee2381aba29381a6f_bg3.avif",
      tag: "Performance"
    }
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest block mb-2">
            The Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Coffee Upgraded Into An Unfair Advantage
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            We didn't set out to make another sweet dessert coffee. We wanted a functional beverage that could power a 14-hour workday, an ultra-marathon, or a high-stakes board presentation.
          </p>
        </div>

        {/* Stories 3-card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-[#141414] border border-[#242424] overflow-hidden hover:border-[#E58A2B]/60 transition duration-300 flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="relative h-64 overflow-hidden bg-[#1a1a1a]">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                />
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-[#E58A2B] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-[#333]">
                  {story.tag}
                </span>
              </div>

              {/* Story Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs text-[#E58A2B] font-bold uppercase tracking-wider block mb-1">
                    {story.subtitle}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                    {story.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                    {story.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#222]">
                  <Link
                    to="/products"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-white hover:text-[#E58A2B] uppercase tracking-wider transition"
                  >
                    <span>Taste the difference</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
