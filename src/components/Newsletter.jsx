import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E58A2B]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest">
          Join The Inner Circle
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          Unlock 10% Off Your First 12-Pack
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
          Subscribe to receive private formula updates, seasonal cold brew reserve drops, and functional caffeine biohacking protocols.
        </p>

        {submitted ? (
          <div className="inline-flex items-center space-x-2 bg-[#34C759]/15 border border-[#34C759]/30 text-[#34C759] px-6 py-4 rounded-2xl text-sm font-bold">
            <CheckCircle2 className="w-5 h-5" />
            <span>Success! Use coupon code <strong>DIALED10</strong> at checkout for 10% off.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-4" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full pl-11 pr-4 py-3.5 bg-[#141414] border border-[#2A2A2A] rounded-xl text-white text-sm focus:outline-none focus:border-[#E58A2B] placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#E58A2B] hover:bg-[#f39535] text-black font-black text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Get 10% Off</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
