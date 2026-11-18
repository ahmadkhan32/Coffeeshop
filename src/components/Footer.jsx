import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, RefreshCw, HeartHandshake, CheckCircle } from 'lucide-react';
import { products } from '../data/products';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1C1C1C] text-gray-400 text-sm">
      {/* Value Proposition Bar */}
      <div className="border-b border-[#1C1C1C] py-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
            <div className="p-2.5 rounded-lg bg-[#181818] text-[#E58A2B] border border-[#262626]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Free US Shipping</h4>
              <p className="text-xs text-gray-500">Orders over $60 delivered in 2-4 days</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
            <div className="p-2.5 rounded-lg bg-[#181818] text-[#E58A2B] border border-[#262626]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Clean Nootropics</h4>
              <p className="text-xs text-gray-500">Clinically studied focus ingredients</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
            <div className="p-2.5 rounded-lg bg-[#181818] text-[#E58A2B] border border-[#262626]">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">Flexible Schedule</h4>
              <p className="text-xs text-gray-500">Pause, skip, or cancel any time</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3">
            <div className="p-2.5 rounded-lg bg-[#181818] text-[#E58A2B] border border-[#262626]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">100% Guaranteed</h4>
              <p className="text-xs text-gray-500">30-day money-back taste guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/Images/imgi_22_6a4a8337a4873ec61848b07b_dialed-footer-logo.avif" 
                alt="Dialed Coffee" 
                className="h-10 w-auto invert brightness-200"
                onError={(e) => {
                  e.currentTarget.src = "/Images/download.svg";
                }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Dialed is functional Colombian cold brew fortified with clinically validated nootropics and adaptogens. Built for founders, athletes, programmers, and high-output minds.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#151515] hover:text-[#E58A2B] hover:bg-[#222] transition" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[#151515] hover:text-[#E58A2B] hover:bg-[#222] transition" aria-label="X / Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Shop</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products" className="hover:text-white transition">All Products</Link>
              </li>
              {products.map(p => (
                <li key={p.id}>
                  <Link to={p.url} className="hover:text-white transition">{p.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/products/dialed-variety-pack" className="text-[#E58A2B] font-medium hover:underline">
                  Variety Bundle
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/dialed-for-teams" className="hover:text-white transition">Dialed for Teams</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/delivery-returns" className="hover:text-white transition">Delivery & Returns</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Support & Contact</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Stay Dialed</h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              Get secret drops, cognitive performance research, and 10% off your first order.
            </p>
            {subscribed ? (
              <div className="flex items-center space-x-2 text-xs text-[#E58A2B] bg-[#E58A2B]/10 p-3 rounded-lg border border-[#E58A2B]/20">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>You're in. Check your inbox for DIALED10 discount code!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#141414] border border-[#2a2a2a] text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#E58A2B] text-black font-bold uppercase tracking-wider text-xs hover:bg-[#f39535] transition"
                >
                  Join Ritual
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright & disclaimers */}
        <div className="mt-16 pt-8 border-t border-[#1C1C1C] flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Dialed Coffee Company. All Rights Reserved. Built for high performance.</p>
          <div className="flex space-x-6">
            <Link to="/delivery-returns" className="hover:text-gray-400">Shipping Policy</Link>
            <Link to="/faq" className="hover:text-gray-400">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
