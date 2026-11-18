import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartTotalCount, toggleCart } from '../redux/cartSlice';
import { ChevronDown, X, Menu } from 'lucide-react';
import { products } from '../data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const totalCount = useSelector(selectCartTotalCount);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Nav: Shop & For Teams (Exact screenshot placement) */}
            <nav className="flex items-center space-x-6 sm:space-x-8">
              <div
                className="relative"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                <Link
                  to="/products"
                  className="flex items-center text-sm font-medium tracking-wide text-white/90 hover:text-white transition"
                >
                  <span>Shop</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70" />
                </Link>

                {/* Dropdown Menu */}
                {shopDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-[#121212]/95 backdrop-blur-xl border border-white/15 rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest px-3 py-1.5 border-b border-white/10 mb-1">
                      Performance Cold Brew
                    </div>
                    {products.map((item) => (
                      <Link
                        key={item.id}
                        to={item.url}
                        onClick={closeMenus}
                        className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/10 transition group"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center p-1 border border-white/10 flex-shrink-0"
                          style={{ backgroundColor: item.thumbBg || '#181818' }}
                        >
                          <img
                            src={item.main_image}
                            alt={item.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#E58A2B] transition">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-white/60">
                            ${item.detail_price} • {item.pack_size}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-white/10">
                      <Link
                        to="/products"
                        onClick={closeMenus}
                        className="block text-center text-xs font-bold text-white hover:text-[#E58A2B] py-1 uppercase tracking-wider"
                      >
                        Shop All Products →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/dialed-for-teams"
                className={`text-sm font-medium tracking-wide transition ${
                  location.pathname === '/dialed-for-teams' ? 'text-white font-bold' : 'text-white/90 hover:text-white'
                }`}
              >
                For Teams
              </Link>
            </nav>

            {/* Center: Dialed Logo (Wordmark with Starburst) */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link to="/" onClick={closeMenus} className="inline-flex items-center text-white hover:opacity-90 transition" aria-label="Dialed Homepage">
                <svg
                  className="h-6 sm:h-7 w-auto fill-current"
                  viewBox="0 0 71.2 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M70.6 17.6c-.4 0-1-.2-1-.9V.9c0-.9-.8-.9-1.2-.9H64v1.1h1.9c.5 0 .8.3.8.8v2.4c-.9-.4-2-.6-3-.6-2.1 0-3.9.9-5.1 2.5-1 1.4-1.6 3.2-1.6 5 0 3.8 2.5 7.8 6.7 7.8s1.2-.1 1.8-.3q.9-.3 1.5-.9c.3.6 1 .9 1.8.9h2.5v-1.1h-.6ZM66.7 15c-.2 1-.8 2.1-2.2 2.1-2.8 0-5-3.4-5-7.8s1.3-4.5 4.3-4.5 2.7.6 2.9 1.5zM8 0H0v1.2h1.7c.6 0 1 .3 1 .8v14.7c0 .5-.4.8-1 .8H0v1.1h8c3 0 5.6-.9 7.5-2.6s2.9-4 2.9-6.8C18.3 3.7 14.2 0 8 0m5.4 15.7c-1.3 1.2-3.2 1.8-5.4 1.8H5.9V1.2H8c2.9 0 4.7 1.9 5.6 3.4 1.1 1.8 1.7 4.1 1.7 6.3s-.7 3.7-1.9 4.8M24.7 17.6v1.1h-6.1v-1.1h.7c.6 0 1-.3 1-.8V5.9c0-.5-.3-.8-.8-.8h-.8V4h3.5c.6 0 1 .3 1 .9v11.8c0 .5.4.8 1 .8h.7ZM43.1 17.6c-.6 0-1-.4-1-.9V.9c0-.8-.6-.9-1.2-.9h-4.4v1.1h1.9c.5 0 .8.3.8.8v14.8c0 .5-.4.8-1 .8h-.7c-.6 0-1-.4-1-.8V8c0-2.9-1.7-4.4-5.3-4.4s-1.3 0-1.9.2-1.1.4-1.7.7v-.9h-1.2l-.8 5.2h1.2c0 .1 0 0 0 0 .6-2.6 2.1-4.1 4.4-4.1h.3c1.3 0 2.1.7 2 1.5 0 1.5-1.8 2.4-3.6 3.2-2.5 1.3-5 2.6-5 5.3s1.8 4.1 4.8 4.1 1.6-.2 2.3-.5 1.3-.8 1.8-1.4c0 1 .8 1.6 2 1.6h8.1v-1.1h-.6Zm-9.4-4.2c0 1.8-1.2 4.3-3.5 4.3S28 16.3 28 15c0-2.8 1.9-3.9 3.6-4.8.2-.1.3-.2.5-.3.6-.3 1.1-.6 1.6-1v4.6Z"
                    fill="currentColor"
                  />
                  <path
                    d="M54.7 15.8c-.7 1.1-2.1 1.5-3.2 1.5-1.8 0-3.3-1-4.3-2.8-.8-1.4-1.2-3.2-1.2-4.9h10.3v-.2c-.2-3.4-2.8-5.8-6.2-5.8s-6.8 4-6.8 7.7.6 3.9 1.8 5.3c1.3 1.6 3.2 2.4 5.6 2.4s3.5-.6 4.8-1.7l-.6-1.8v.3Zm-5-11c1 0 1.8.4 2.5 1.2.6.8.9 1.8 1 2.5h-7c.4-2.4 1.7-3.7 3.6-3.7ZM21.4 3.4c.9 0 1.7-.8 1.7-1.7S22.3 0 21.4 0s-1.7.8-1.7 1.7.8 1.7 1.7 1.7"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            {/* Right: Account & Cart (0) (Exact screenshot match) */}
            <div className="flex items-center space-x-5 sm:space-x-7">
              <button
                onClick={() => setAccountModalOpen(true)}
                className="hidden sm:inline-block text-sm font-medium tracking-wide text-white/90 hover:text-white transition"
              >
                Account
              </button>

              <button
                onClick={() => dispatch(toggleCart(true))}
                className="text-sm font-medium tracking-wide text-white/90 hover:text-white transition flex items-center space-x-1"
                aria-label="Open Cart"
              >
                <span>Cart ({totalCount})</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white/90 hover:text-white p-1"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in duration-200">
            <Link
              to="/products"
              onClick={closeMenus}
              className="block text-sm font-bold uppercase tracking-wider text-white"
            >
              Shop All Flavors
            </Link>
            <div className="pl-3 space-y-2 border-l border-white/15">
              {products.map((p) => (
                <Link
                  key={p.id}
                  to={p.url}
                  onClick={closeMenus}
                  className="block text-xs text-white/80 hover:text-white"
                >
                  {p.name} (${p.detail_price})
                </Link>
              ))}
            </div>
            <Link
              to="/dialed-for-teams"
              onClick={closeMenus}
              className="block text-sm font-bold uppercase tracking-wider text-white"
            >
              For Teams & Offices
            </Link>
            <Link
              to="/faq"
              onClick={closeMenus}
              className="block text-sm font-bold uppercase tracking-wider text-white"
            >
              FAQ
            </Link>
            <Link
              to="/delivery-returns"
              onClick={closeMenus}
              className="block text-sm font-bold uppercase tracking-wider text-white"
            >
              Delivery & Returns
            </Link>
            <Link
              to="/contact"
              onClick={closeMenus}
              className="block text-sm font-bold uppercase tracking-wider text-white"
            >
              Contact Support
            </Link>
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  closeMenus();
                  setAccountModalOpen(true);
                }}
                className="w-full text-center py-2.5 rounded-xl bg-white/15 text-white text-xs font-semibold"
              >
                Customer Sign In / Portal
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Account Info Modal */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#141414] border border-white/20 rounded-3xl max-w-md w-full p-6 text-white relative shadow-2xl">
            <button
              onClick={() => setAccountModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/Images/download (2).svg" alt="Dialed" className="w-8 h-8 invert brightness-200" />
              <div>
                <h3 className="text-lg font-serif font-bold">Customer Portal</h3>
                <p className="text-xs text-gray-400">Manage subscriptions & shipment cadence</p>
              </div>
            </div>
            <p className="text-xs text-gray-300 mb-6 leading-relaxed">
              Enter your email to adjust delivery schedules, swap flavors between shipments, or pause orders anytime.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Sign-in link sent to your email!');
                setAccountModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-[#333] text-white focus:outline-none focus:border-[#E58A2B] text-xs"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-white text-black font-extrabold uppercase tracking-wider text-xs hover:bg-gray-200 transition"
              >
                Send Access Link
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
