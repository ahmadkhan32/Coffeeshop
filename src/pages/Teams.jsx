import React, { useState } from 'react';
import { Building2, Users, Coffee, Truck, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Teams() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companyAddress: '',
    businessType: 'Tech / Software',
    teamSize: '25-50 people',
    monthlyCans: '100 - 250 cans',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B0B0B] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/30 text-[#E58A2B] text-xs font-bold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate & Office Programs</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Dialed For Teams
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Elevate team output with clean, sugar-free cold brew delivered on a predictable schedule. Trusted by leading tech offices, creative studios, and venture hubs across the country.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Zero Midday Energy Crash</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              No sugar slumps. Infused with Citicoline to maintain cognitive precision through sprint reviews and long product deployments.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Automated Fridge Restock</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Set your team's case allocation once. Cans arrive fresh, temperature-safe, and right to your office kitchen or loading dock.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E58A2B]/10 text-[#E58A2B] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Corporate Tier Discounts</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Save up to 30% off retail pricing on volumes over 100 cans per month. Custom billing terms and invoice options available.
            </p>
          </div>
        </div>

        {/* Form and Pricing Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form: Form fields matching prompt */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-3xl p-8 sm:p-10 shadow-2xl">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
              Request Team Tasting Kit & Quote
            </h2>
            <p className="text-xs text-gray-400 mb-8">
              Fill out your company details below. We'll send a complimentary 12-can variety pack to your office manager.
            </p>

            {submitted ? (
              <div className="bg-[#34C759]/15 border border-[#34C759]/30 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#34C759] mx-auto" />
                <h3 className="text-xl font-bold uppercase text-white">Office Inquiry Received!</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you! Our workplace hospitality specialist will review your team size and dispatch a free tasting package to <strong>{formData.companyName}</strong> within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#222] text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Acme Technologies"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@acme.com"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                    Company Shipping Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyAddress}
                    onChange={(e) => setFormData({ ...formData, companyAddress: e.target.value })}
                    placeholder="Floor, Suite, Street Address, City, State, ZIP"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    >
                      <option value="Tech / Software">Technology / Software</option>
                      <option value="Finance / Venture">Finance / Venture Capital</option>
                      <option value="Design / Creative Agency">Design / Creative Agency</option>
                      <option value="Fitness / Athletic Club">Fitness / Athletic Facility</option>
                      <option value="Other">Other Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Estimated Monthly Cans
                    </label>
                    <select
                      value={formData.monthlyCans}
                      onChange={(e) => setFormData({ ...formData, monthlyCans: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    >
                      <option value="50 - 100 cans">50 - 100 cans / month (Small team)</option>
                      <option value="100 - 250 cans">100 - 250 cans / month (Mid-size)</option>
                      <option value="250 - 500 cans">250 - 500 cans / month (Fast growth)</option>
                      <option value="500+ cans">500+ cans / month (Enterprise tier)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                    Flavor Preferences or Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us if you prefer a mix of Original Black, Toasted Vanilla, and Smooth Mocha..."
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E58A2B] hover:bg-[#f39535] text-black font-extrabold uppercase tracking-widest text-xs transition shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Submit Team Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 space-y-6">
              <h3 className="text-lg font-black uppercase tracking-wider text-white">
                Team Pricing Tiers
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-[#242424] flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white">Starter Tier (100 Cans)</h4>
                    <p className="text-xs text-gray-400">Perfect for teams of 10-25</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-black text-[#E58A2B]">15% Off</span>
                    <p className="text-[10px] text-gray-500">Free Freight Delivery</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-[#242424] flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white">Growth Tier (250 Cans)</h4>
                    <p className="text-xs text-gray-400">For offices of 25-60</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-black text-[#E58A2B]">22% Off</span>
                    <p className="text-[10px] text-gray-500">+ Branded Bar Fridge</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-[#242424] flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white">Enterprise Tier (500+ Cans)</h4>
                    <p className="text-xs text-gray-400">Multi-floor or multi-location</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-black text-[#E58A2B]">30% Off</span>
                    <p className="text-[10px] text-gray-500">Dedicated Account Exec</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#222] text-xs text-gray-400 space-y-2">
                <div className="flex items-center space-x-2 text-white">
                  <ShieldCheck className="w-4 h-4 text-[#34C759]" />
                  <span className="font-semibold">Flexible Net-30 Invoicing available</span>
                </div>
                <p>Have immediate corporate inquiries? Email us directly at <strong>teams@dialedcoffee.com</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
