import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectCartIsOpen,
  selectCartSubtotal,
  selectDiscountPercent,
  selectPromoCode,
  toggleCart,
  updateQuantity,
  removeFromCart,
  applyPromoCode,
  clearCart
} from '../redux/cartSlice';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, CheckCircle } from 'lucide-react';

export default function CartDrawer() {
  const isOpen = useSelector(selectCartIsOpen);
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);
  const discountPercent = useSelector(selectDiscountPercent);
  const currentPromo = useSelector(selectPromoCode);
  const dispatch = useDispatch();

  const [promoInput, setPromoInput] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Free shipping threshold = $60
  const freeShippingThreshold = 60;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 5.99;
  const finalTotal = Math.max(0, subtotal - discountAmount + (subtotal > 0 ? shippingCost : 0));

  if (!isOpen) return null;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      dispatch(clearCart());
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => dispatch(toggleCart(false))}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111111] border-l border-[#222222] text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#222222] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#E58A2B]" />
              <h2 className="text-base font-extrabold uppercase tracking-wider">Your Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})</h2>
            </div>
            <button
              onClick={() => dispatch(toggleCart(false))}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-[#202020] transition"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3.5 bg-[#181818] border-b border-[#222222]">
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              {amountToFreeShipping === 0 ? (
                <span className="text-[#34C759] font-bold flex items-center">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" /> You've unlocked FREE Shipping!
                </span>
              ) : (
                <span className="text-gray-300">
                  Add <strong className="text-[#E58A2B]">${amountToFreeShipping.toFixed(2)}</strong> more for <strong>FREE Shipping</strong>
                </span>
              )}
              <span className="text-gray-400">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-[#2a2a2a] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#E58A2B] to-[#34C759] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {orderComplete ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#34C759]/20 text-[#34C759] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">Order Confirmed!</h3>
                <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                  Thank you! Your cold brew order has been scheduled for priority fresh roasting and packing. We've sent details to your email.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setOrderComplete(false);
                      setIsCheckingOut(false);
                      dispatch(toggleCart(false));
                    }}
                    className="px-6 py-3 rounded-xl bg-[#E58A2B] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#f39535]"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-20 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#1c1c1c] text-gray-500 mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Your cart is empty</h3>
                  <p className="text-xs text-gray-400">Ready to unlock sustained physical and mental focus?</p>
                </div>
                <Link
                  to="/products"
                  onClick={() => dispatch(toggleCart(false))}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#E58A2B] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#f39535] transition"
                >
                  <span>Explore 4 Flavors</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex space-x-4 p-3 rounded-xl bg-[#161616] border border-[#242424] hover:border-[#333] transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-lg bg-[#0C0C0C] p-1 border border-[#262626] flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-bold text-white hover:text-[#E58A2B] transition">
                            <Link to={`/products/${item.slug}`} onClick={() => dispatch(toggleCart(false))}>
                              {item.name}
                            </Link>
                          </h4>
                          <p className="text-[11px] text-gray-400">
                            {item.pack_size} {item.isSubscription && <span className="text-[#E58A2B] font-bold">• 15% Subscribed</span>}
                          </p>
                        </div>
                        <button
                          onClick={() => dispatch(removeFromCart(item.cartItemId))}
                          className="text-gray-500 hover:text-[#E03E2F] transition p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2 bg-[#0D0D0D] border border-[#333] rounded-lg px-2 py-1">
                        <button
                          onClick={() =>
                            dispatch(updateQuantity({ cartItemId: item.cartItemId, quantity: item.quantity - 1 }))
                          }
                          className="text-gray-400 hover:text-white p-0.5"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch(updateQuantity({ cartItemId: item.cartItemId, quantity: item.quantity + 1 }))
                          }
                          className="text-gray-400 hover:text-white p-0.5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-black text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        {item.regularPrice && item.regularPrice > item.price && (
                          <div className="text-[10px] text-gray-500 line-through">
                            ${(item.regularPrice * item.quantity).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && !orderComplete && (
            <div className="p-6 bg-[#141414] border-t border-[#222222] space-y-4">
              {/* Promo code input */}
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Promo code (e.g. DIALED10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 bg-[#0A0A0A] border border-[#333] rounded-lg text-xs uppercase tracking-wider text-white focus:outline-none focus:border-[#E58A2B]"
                  />
                </div>
                <button
                  onClick={() => dispatch(applyPromoCode(promoInput))}
                  className="px-3.5 py-2 bg-[#252525] hover:bg-[#333] text-white text-xs font-bold uppercase rounded-lg transition"
                >
                  Apply
                </button>
              </div>

              {/* Price summary */}
              <div className="space-y-1.5 text-xs text-gray-400 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#34C759]">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="text-white font-medium">
                    {shippingCost === 0 ? <span className="text-[#34C759] uppercase font-bold">Free</span> : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-[#262626] pt-2 flex justify-between text-base font-black text-white">
                  <span>Total</span>
                  <span className="text-[#E58A2B]">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              {!isCheckingOut ? (
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-4 rounded-xl bg-[#E58A2B] hover:bg-[#f39535] text-black font-extrabold uppercase tracking-widest text-sm transition shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Express Shipping Details:
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-3 py-2 bg-[#0A0A0A] border border-[#333] rounded-lg text-xs text-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-3 py-2 bg-[#0A0A0A] border border-[#333] rounded-lg text-xs text-white"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Street Address, City, ZIP"
                    className="w-full px-3 py-2 bg-[#0A0A0A] border border-[#333] rounded-lg text-xs text-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#34C759] hover:bg-[#2fb34f] text-black font-extrabold uppercase tracking-wider text-sm transition flex items-center justify-center space-x-2"
                  >
                    <span>Place Order • ${finalTotal.toFixed(2)}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="w-full text-center text-[11px] text-gray-500 hover:text-gray-300"
                  >
                    Back to cart review
                  </button>
                </form>
              )}

              <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E58A2B]" />
                <span>Encrypted 256-bit checkout • Satisfaction Guaranteed</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
