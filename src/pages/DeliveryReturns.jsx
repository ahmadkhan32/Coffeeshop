import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Clock, PackageCheck, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DeliveryReturns() {
  return (
    <div className="bg-[#0B0B0B] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest">
            Customer Assurance
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Delivery & Returns
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Our commitment to prompt shipping, ambient protection, and complete satisfaction on every 12-pack.
          </p>
        </div>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#141414] border border-[#242424] rounded-2xl p-6 text-center space-y-3">
            <Truck className="w-8 h-8 text-[#E58A2B] mx-auto" />
            <h3 className="text-sm font-bold uppercase text-white">Free US Shipping</h3>
            <p className="text-xs text-gray-400">On all multi-pack orders and recurring subscriptions over $60.</p>
          </div>

          <div className="bg-[#141414] border border-[#242424] rounded-2xl p-6 text-center space-y-3">
            <Clock className="w-8 h-8 text-[#E58A2B] mx-auto" />
            <h3 className="text-sm font-bold uppercase text-white">2-4 Business Days</h3>
            <p className="text-xs text-gray-400">Dispatched same-day when placed before 2:00 PM EST via FedEx or UPS.</p>
          </div>

          <div className="bg-[#141414] border border-[#242424] rounded-2xl p-6 text-center space-y-3">
            <RotateCcw className="w-8 h-8 text-[#E58A2B] mx-auto" />
            <h3 className="text-sm font-bold uppercase text-white">30-Day Taste Guarantee</h3>
            <p className="text-xs text-gray-400">If you aren't completely focused and satisfied, we refund your first pack.</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-[#141414] border border-[#242424] rounded-3xl p-8 sm:p-12 space-y-10 text-sm text-gray-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase text-white flex items-center space-x-2">
              <PackageCheck className="w-5 h-5 text-[#E58A2B]" />
              <span>1. Order Processing & Dispatch</span>
            </h2>
            <p>
              All orders are hand-inspected and packed at our temperature-controlled facility in Austin, Texas. Orders submitted before 2:00 PM Eastern Standard Time (Monday through Friday) are batched and handed over to UPS or FedEx Ground on the same business day.
            </p>
            <p>
              Once your shipment generates a tracking scan, an automated confirmation email with live tracking details will be dispatched immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase text-white flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#E58A2B]" />
              <span>2. Temperature & Packaging Protection</span>
            </h2>
            <p>
              Our Colombian cold brew is packaged in BPA-free aluminum cans with liquid nitrogen dosing that creates internal pressure to protect structural integrity during rough courier transit.
            </p>
            <p>
              Because Dialed is crafted with craft sub-zero extraction and clean pasteurization, it remains 100% shelf stable at normal room temperatures for up to 9 months unopened. While chilling prior to consumption is recommended for optimal taste, warm transit does not harm product safety or potency.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase text-white flex items-center space-x-2">
              <RotateCcw className="w-5 h-5 text-[#E58A2B]" />
              <span>3. The 30-Day Money-Back Taste Guarantee</span>
            </h2>
            <p>
              We stand behind our formulas with absolute confidence. If you order a 12-pack for the first time and find that it doesn't give you clean, sustained energy or you simply dislike the flavor profile, email <strong>support@dialedcoffee.com</strong> within 30 days of delivery.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-400">
              <li>Applies to first-time customer orders of any 12-pack flavor or Variety Pack.</li>
              <li>You do not need to send remaining cans back to us.</li>
              <li>Refunds are credited directly to your original payment method within 3 to 5 business days.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase text-white flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-[#E58A2B]" />
              <span>4. Damaged or Leaking Packages</span>
            </h2>
            <p>
              While our heavy-duty corrugated cartons are designed to withstand courier handling, transit accidents can occur. If your shipment arrives punctured, crushed, or leaking, please photograph the damage and email <strong>support@dialedcoffee.com</strong>.
            </p>
            <p>
              We will immediately ship a brand new replacement case at zero cost via expedited courier.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase text-white flex items-center space-x-2">
              <Truck className="w-5 h-5 text-[#E58A2B]" />
              <span>5. Shipping Destinations</span>
            </h2>
            <p>
              We currently ship to all 50 United States and Washington D.C. Shipments to Alaska and Hawaii may experience an additional 2-3 business days of transit time. We do not currently ship internationally due to perishable beverage cross-border customs regulations.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#E58A2B] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#f39535] transition shadow-xl"
          >
            <span>Explore 12-Packs With Free Shipping</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
