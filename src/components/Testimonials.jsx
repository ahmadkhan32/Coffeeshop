import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Lead Software Architect & Tech Founder",
      flavor: "Original Black (12-Pack)",
      headshot: "/Images/imgi_18_6a3319611d9caf2dbe7b220b_headshot-1.png",
      rating: 5,
      quote: "I replaced my 3 daily espressos with 1 can of Dialed Original Black every morning at 8:30 AM. My deep work coding blocks used to fall apart by 1 PM; now I cruise straight through without tremors or that heavy caffeine brain drag.",
      verified: true
    },
    {
      name: "Elena Rostova",
      role: "Pro Triathlete & Endurance Coach",
      flavor: "Toasted Vanilla (Subscription)",
      headshot: "/Images/imgi_17_6a3319d0f4a5871dbd639a6a_headshot2.png",
      rating: 5,
      quote: "The combination of citicoline with L-theanine is revolutionary. When I'm in zone 4 heart rate intervals or tackling strategy sessions afterwards, my mental clarity is laser sharp and my stomach never feels irritated.",
      verified: true
    },
    {
      name: "David Kim",
      role: "Venture Partner & Angel Investor",
      flavor: "Variety Pack",
      headshot: "/Images/imgi_18_6a3319611d9caf2dbe7b220b_headshot-1.png",
      rating: 5,
      quote: "We ordered 4 cases for our SF tech incubator office and they vanished in 48 hours. Every engineer on the team requested an automated monthly standing subscription. The Smooth Mocha is unbelievable.",
      verified: true
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest">
            Verified Experiences
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Trusted By High Performers
          </h2>
          <div className="flex items-center justify-center space-x-2 pt-1 text-[#E58A2B]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.8 / 5 Average Across 6,700+ Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#242424] rounded-2xl p-7 flex flex-col justify-between hover:border-[#E58A2B]/50 transition duration-300 shadow-xl space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex text-[#E58A2B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-[#1A1A1A] px-2 py-0.5 rounded border border-[#333]">
                    {rev.flavor}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Bio with Headshot */}
              <div className="pt-4 border-t border-[#222] flex items-center space-x-3.5">
                <img
                  src={rev.headshot}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#E58A2B]/40 bg-[#1A1A1A]"
                />
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-[#34C759]" title="Verified Buyer" />
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
