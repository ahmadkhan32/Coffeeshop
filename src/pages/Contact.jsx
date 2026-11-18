import React, { useState } from 'react';
import { Mail, Clock, MessageSquare, Send, CheckCircle2, MapPin } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Order & Shipping Status',
    orderNumber: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B0B0B] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest">
            Customer Experience
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Have questions about formulas, subscription deliveries, or wholesale partnership? Our support team responds within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141414] border border-[#262626] rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#1E1E1E] text-[#E58A2B] border border-[#333]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">General & Orders</h4>
                    <a href="mailto:support@dialedcoffee.com" className="text-sm text-[#E58A2B] hover:underline font-medium">
                      support@dialedcoffee.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#1E1E1E] text-[#E58A2B] border border-[#333]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Wholesale & Office</h4>
                    <a href="mailto:wholesale@dialedcoffee.com" className="text-sm text-[#E58A2B] hover:underline font-medium">
                      wholesale@dialedcoffee.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#1E1E1E] text-[#E58A2B] border border-[#333]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Operating Hours</h4>
                    <p className="text-xs text-gray-400">Monday – Friday: 8:00 AM – 6:00 PM EST</p>
                    <p className="text-xs text-gray-500">Weekend responses prioritized for urgent order changes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-[#1E1E1E] text-[#E58A2B] border border-[#333]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Cold Brewery Headquarters</h4>
                    <p className="text-xs text-gray-400">Austin, Texas • Cold Extraction Facility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-3xl p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="bg-[#34C759]/15 border border-[#34C759]/30 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#34C759] mx-auto" />
                <h3 className="text-xl font-bold uppercase text-white">Message Dispatched!</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. A support ticket has been opened and sent to <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#222] text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                  Send A Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    >
                      <option value="Order & Shipping Status">Order & Shipping Status</option>
                      <option value="Subscription Management">Subscription Management</option>
                      <option value="Flavor Recommendation">Flavor Recommendation</option>
                      <option value="Wholesale Inquiry">Wholesale Partnership</option>
                      <option value="Other">Other Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                      Order # (If applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      placeholder="e.g. #DC-84920"
                      className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our coffee team assist you today?"
                    className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-xl text-white text-xs focus:outline-none focus:border-[#E58A2B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E58A2B] hover:bg-[#f39535] text-black font-extrabold uppercase tracking-widest text-xs transition shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
