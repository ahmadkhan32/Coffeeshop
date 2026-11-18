import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartTotalCount, toggleCart } from '../redux/cartSlice';
import { ShoppingBag, Menu, X, ChevronDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const totalCount = useSelector(selectCartTotalCount);
  const dispatch = useDispatch();
  const location = useLocation();

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#E58A2B] text-black text-xs md:text-sm font-bold tracking-wider py-2 px-4 text-center flex items-center justify-center space-x-2">
        <Sparkles className="w-4 h-4 animate-pulse inline" />
        <span>FREE SHIPPING ON ALL ORDERS OVER $60 • USE CODE <strong>DIALED10</strong> FOR 10% OFF</span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#222222] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <div 
                className="relative"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                <Link
                  to="/products"
                  className="flex items-center text-sm font-semibold tracking-wider text-gray-200 hover:text-[#E58A2B] transition-colors py-2 uppercase"
                >
                  Shop
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </Link>

                {/* Dropdown Menu */}
                {shopDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-72 bg-[#141414] border border-[#2a2a2a] rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-3 py-1.5 border-b border-[#222] mb-1">
                      Cold Brew Flavors
                    </div>
                    {products.map((item) => (
                      <Link
                        key={item.id}
                        to={item.url}
                        onClick={closeMenus}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#202020] transition group"
                      >
                        <img 
                          src={item.main_image} 
                          alt={item.name} 
                          className="w-10 h-10 object-contain rounded bg-[#0A0A0A] p-0.5 border border-[#333]" 
                        />
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-[#E58A2B] transition">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-400">
                            ${item.detail_price} • {item.pack_size}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-[#222]">
                      <Link
                        to="/products"
                        onClick={closeMenus}
                        className="block text-center text-xs font-bold text-[#E58A2B] hover:underline py-1"
                      >
                        View All Products →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/dialed-for-teams"
                className={`text-sm font-semibold tracking-wider uppercase transition-colors ${
                  location.pathname === '/dialed-for-teams' ? 'text-[#E58A2B]' : 'text-gray-200 hover:text-[#E58A2B]'
                }`}
              >
                For Teams
              </Link>
              <Link
                to="/faq"
                className={`text-sm font-semibold tracking-wider uppercase transition-colors ${
                  location.pathname === '/faq' ? 'text-[#E58A2B]' : 'text-gray-200 hover:text-[#E58A2B]'
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-semibold tracking-wider uppercase transition-colors ${
                  location.pathname === '/contact' ? 'text-[#E58A2B]' : 'text-gray-200 hover:text-[#E58A2B]'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Logo */}
            <div className="flex-1 md:flex-initial text-center md:text-left">
              <Link to="/" onClick={closeMenus} className="inline-block">
                <img 
                  src="/Images/download.svg" 
                  alt="DIALED" 
                  className="h-7 w-auto invert brightness-200 hover:opacity-90 transition"
                  onError={(e) => {
                    // Fallback to text if SVG filter has issues
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden text-2xl font-black tracking-widest text-white">DIALED</span>
              </Link>
            </div>

            {/* Right Nav */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button
                onClick={() => setAccountModalOpen(true)}
                className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition"
              >
                Account
              </button>

              {/* Cart Button */}
              <button
                onClick={() => dispatch(toggleCart(true))}
                className="relative flex items-center justify-center p-2 rounded-full bg-[#1A1A1A] hover:bg-[#252525] text-white transition border border-[#333]"
                aria-label="Open shopping cart"
              >
                <ShoppingBag className="w-5 h-5 text-[#E58A2B]" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#E58A2B] text-black font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#222]"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111111] border-b border-[#222222] px-6 py-6 space-y-4 animate-in fade-in duration-200">
            <Link
              to="/products"
              onClick={closeMenus}
              className="block text-base font-bold uppercase tracking-wider text-white hover:text-[#E58A2B]"
            >
              Shop All Products
            </Link>
            <div className="pl-4 space-y-2 border-l-2 border-[#333]">
              {products.map((p) => (
                <Link
                  key={p.id}
                  to={p.url}
                  onClick={closeMenus}
                  className="block text-sm text-gray-300 hover:text-[#E58A2B]"
                >
                  {p.name} (${p.detail_price})
                </Link>
              ))}
            </div>
            <Link
              to="/dialed-for-teams"
              onClick={closeMenus}
              className="block text-base font-bold uppercase tracking-wider text-white hover:text-[#E58A2B]"
            >
              For Teams & Offices
            </Link>
            <Link
              to="/faq"
              onClick={closeMenus}
              className="block text-base font-bold uppercase tracking-wider text-white hover:text-[#E58A2B]"
            >
              FAQ
            </Link>
            <Link
              to="/delivery-returns"
              onClick={closeMenus}
              className="block text-base font-bold uppercase tracking-wider text-white hover:text-[#E58A2B]"
            >
              Delivery & Returns
            </Link>
            <Link
              to="/contact"
              onClick={closeMenus}
              className="block text-base font-bold uppercase tracking-wider text-white hover:text-[#E58A2B]"
            >
              Contact Support
            </Link>
            <div className="pt-4 border-t border-[#222]">
              <button
                onClick={() => {
                  closeMenus();
                  setAccountModalOpen(true);
                }}
                className="w-full text-center py-2.5 rounded-lg bg-[#1E1E1E] text-white text-sm font-semibold hover:bg-[#292929]"
              >
                Customer Sign In / Account
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Account Info Modal */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl max-w-md w-full p-6 text-white relative shadow-2xl">
            <button
              onClick={() => setAccountModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E58A2B]/20 text-[#E58A2B] flex items-center justify-center font-bold">
                DC
              </div>
              <div>
                <h3 className="text-lg font-bold">Customer Portal</h3>
                <p className="text-xs text-gray-400">Manage your cold brew subscriptions & orders</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Sign in with your email to adjust delivery schedules, swap flavours between shipments, or update shipping addresses.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Access link sent to your email!"); setAccountModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#333] text-white focus:outline-none focus:border-[#E58A2B] text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#E58A2B] text-black font-bold uppercase tracking-wider text-sm hover:bg-[#f39535] transition"
              >
                Send Magic Sign-In Link
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
