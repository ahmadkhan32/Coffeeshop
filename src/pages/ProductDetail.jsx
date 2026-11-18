import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { getProductBySlug, products } from '../data/products';
import {
  Star,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  Sparkles,
  Zap,
  Brain,
  RotateCcw,
  Plus,
  Minus,
  ArrowLeft
} from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  // Find product by slug or default to original black
  const product = getProductBySlug(slug) || products[0];

  const [activeImage, setActiveImage] = useState(product.main_image);
  const [purchaseType, setPurchaseType] = useState('one-time'); // 'one-time' or 'subscribe'
  const [frequency, setFrequency] = useState('every-4-weeks');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setActiveImage(product.main_image);
    window.scrollTo(0, 0);
  }, [product]);

  const isSub = purchaseType === 'subscribe';
  const unitPrice = isSub ? Number((product.detail_price * 0.85).toFixed(2)) : product.detail_price;
  const totalPrice = (unitPrice * quantity).toFixed(2);

  const handleAddToCart = () => {
    dispatch(addToCart({
      product,
      quantity,
      isSubscription: isSub
    }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="bg-[#0B0B0B] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-8">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-white transition">Shop</Link>
          <span>/</span>
          <span className="text-white font-medium">{product.name}</span>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative rounded-3xl bg-[#131313] border border-[#262626] p-8 sm:p-12 flex items-center justify-center min-h-[420px] sm:min-h-[520px] overflow-hidden group">
              <span className="absolute top-5 left-5 text-xs font-black uppercase tracking-widest px-3 py-1 rounded bg-black/80 text-[#E58A2B] border border-[#333]">
                {product.badge}
              </span>

              <img
                src={activeImage}
                alt={product.name}
                className="max-h-[380px] sm:max-h-[460px] max-w-full object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.85)] transition-all duration-300 group-hover:scale-105"
              />
            </div>

            {/* Thumbnail Row */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-xl bg-[#141414] border p-1.5 flex-shrink-0 transition ${
                      activeImage === img
                        ? 'border-[#E58A2B] ring-2 ring-[#E58A2B]/40'
                        : 'border-[#262626] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Pricing & Purchase Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              {/* Rating & Reviews */}
              <div className="flex items-center space-x-3 mb-2">
                <div className="flex text-[#E58A2B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.review_count} verified reviews)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                {product.name}
              </h1>
              <p className="text-sm font-semibold text-[#E58A2B] mt-1">
                {product.subtitle}
              </p>
            </div>

            {/* Price Display */}
            <div className="flex items-baseline space-x-3 p-4 rounded-2xl bg-[#141414] border border-[#262626]">
              <span className="text-3xl font-black text-white">${unitPrice}</span>
              {product.listing_price > unitPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.listing_price}
                </span>
              )}
              <span className="text-xs font-bold text-gray-400">
                • {product.pack_size} ({product.volume} / can)
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Purchase Options Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Select Purchase Plan:
              </label>

              {/* One-time Option */}
              <div
                onClick={() => setPurchaseType('one-time')}
                className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                  purchaseType === 'one-time'
                    ? 'bg-[#1C1C1C] border-[#E58A2B] text-white'
                    : 'bg-[#131313] border-[#262626] text-gray-400 hover:border-[#333]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    purchaseType === 'one-time' ? 'border-[#E58A2B]' : 'border-[#444]'
                  }`}>
                    {purchaseType === 'one-time' && <div className="w-2 h-2 rounded-full bg-[#E58A2B]" />}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">One-Time Order</span>
                    <span className="text-xs text-gray-400">Single 12-pack delivery</span>
                  </div>
                </div>
                <span className="text-base font-black text-white">${product.detail_price}</span>
              </div>

              {/* Subscription Option */}
              <div
                onClick={() => setPurchaseType('subscribe')}
                className={`p-4 rounded-xl border cursor-pointer transition flex flex-col space-y-3 ${
                  purchaseType === 'subscribe'
                    ? 'bg-[#1C1C1C] border-[#E58A2B] text-white'
                    : 'bg-[#131313] border-[#262626] text-gray-400 hover:border-[#333]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      purchaseType === 'subscribe' ? 'border-[#E58A2B]' : 'border-[#444]'
                    }`}>
                      {purchaseType === 'subscribe' && <div className="w-2 h-2 rounded-full bg-[#E58A2B]" />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-white">Subscribe & Save 15%</span>
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#34C759] text-black">
                          Popular
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">Cancel or pause schedule anytime</span>
                    </div>
                  </div>
                  <span className="text-base font-black text-[#34C759]">
                    ${(product.detail_price * 0.85).toFixed(2)}
                  </span>
                </div>

                {purchaseType === 'subscribe' && (
                  <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-xs">
                    <span className="text-gray-400">Delivery Frequency:</span>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="bg-[#0A0A0A] border border-[#333] text-white px-2.5 py-1.5 rounded-lg text-xs"
                    >
                      <option value="every-2-weeks">Every 2 Weeks</option>
                      <option value="every-3-weeks">Every 3 Weeks</option>
                      <option value="every-4-weeks">Every 4 Weeks (Standard)</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-3 pt-2">
              <div className="flex items-center space-x-2 bg-[#141414] border border-[#2E2E2E] rounded-xl px-3 py-3.5">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-black w-6 text-center text-white">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-4 px-6 rounded-xl font-black text-xs uppercase tracking-widest transition flex items-center justify-center space-x-2 shadow-xl ${
                  isAdded
                    ? 'bg-[#34C759] text-black'
                    : 'bg-[#E58A2B] hover:bg-[#f39535] text-black'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added To Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add To Cart • ${totalPrice}</span>
                  </>
                )}
              </button>
            </div>

            {/* Guarantee / Shipping Perks */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2 p-3 rounded-xl bg-[#141414] border border-[#242424] text-xs text-gray-300">
                <Truck className="w-4 h-4 text-[#E58A2B]" />
                <span>Free shipping on 2+ packs</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-xl bg-[#141414] border border-[#242424] text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-[#E58A2B]" />
                <span>30-Day taste guarantee</span>
              </div>
            </div>

            {/* Benefits Bullet Points */}
            <div className="space-y-2.5 pt-4 border-t border-[#222]">
              <h3 className="text-xs font-black uppercase tracking-wider text-gray-400">
                Core Performance Benefits:
              </h3>
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-gray-300">
                  <Check className="w-4 h-4 text-[#34C759] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nutrition and Clinical Ingredients Deep Dive */}
        <div className="mt-20 pt-12 border-t border-[#222] grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Ingredients list */}
          <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 space-y-4">
            <div className="flex items-center space-x-2 text-[#E58A2B]">
              <Brain className="w-5 h-5" />
              <h3 className="text-lg font-black uppercase tracking-wider text-white">Full Ingredient Matrix</h3>
            </div>
            <p className="text-xs text-gray-400">
              Clean label, zero artificial preservatives or undisclosed blends.
            </p>
            <ul className="space-y-2 pt-2">
              {product.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-gray-300 py-1.5 border-b border-[#1E1E1E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E58A2B]" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition Facts */}
          <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 space-y-4">
            <div className="flex items-center space-x-2 text-[#E58A2B]">
              <Zap className="w-5 h-5" />
              <h3 className="text-lg font-black uppercase tracking-wider text-white">Supplement & Nutrition Facts</h3>
            </div>
            <p className="text-xs text-gray-400">
              Serving Size: {product.nutrition?.servingSize || '1 Can (355ml)'}
            </p>
            <div className="divide-y divide-[#222] text-xs text-gray-300 pt-2">
              <div className="flex justify-between py-2">
                <span className="font-semibold text-white">Calories</span>
                <span>{product.nutrition?.calories || product.calories}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-white">Total Fat</span>
                <span>{product.nutrition?.totalFat || '0g'}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-white">Sodium</span>
                <span>{product.nutrition?.sodium || '10mg'}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-white">Total Carbohydrates</span>
                <span>{product.nutrition?.totalCarbs || '1g'}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-white">Sugars</span>
                <span className="text-[#34C759] font-bold">{product.nutrition?.sugars || product.sugar}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-white">Colombian Coffee Caffeine</span>
                <span className="text-[#E58A2B] font-bold">{product.caffeine}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="font-semibold text-white">Cognizin® Citicoline</span>
                <span className="text-[#34C759] font-bold">250mg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Flavors Navigation */}
        <div className="mt-20 pt-12 border-t border-[#222]">
          <h3 className="text-xl font-black uppercase tracking-tight text-white mb-6">
            Compare With Other Dialed Flavors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.filter(p => p.id !== product.id).map(other => (
              <Link
                key={other.id}
                to={other.url}
                className="bg-[#141414] border border-[#262626] rounded-2xl p-4 hover:border-[#E58A2B] transition text-center group"
              >
                <div className="h-32 flex items-center justify-center">
                  <img src={other.main_image} alt={other.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition" />
                </div>
                <h4 className="text-xs font-bold text-white mt-2 group-hover:text-[#E58A2B] transition uppercase">{other.name}</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">${other.detail_price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
