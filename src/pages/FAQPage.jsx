import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { defaultFaqs } from '../components/FAQAccordion';

const categorizedFaqs = [
  {
    category: "Formulas & Science",
    items: [
      {
        q: "What makes Dialed different from conventional cold brew and energy drinks?",
        a: "Standard canned coffees are typically loaded with up to 30 grams of sugar and artificial syrups, while synthetic energy drinks rely on harsh caffeine anhydrous that shocks your adrenal system. Dialed uses single-origin Colombian cold brew slow-steeped for 18 hours, paired with clinically backed Cognizin® Citicoline, adaptogens, and zero added sugars. You get sustained cognitive flow state without jitters or midday crashes."
      },
      {
        q: "How much caffeine is in each can, and where does it come from?",
        a: "Original Black contains 200mg of caffeine per 355ml can. Toasted Vanilla and Smooth Mocha contain 180mg of caffeine per can. 100% of our caffeine comes naturally from specialty grade Colombian Arabica beans—never synthetic powders."
      },
      {
        q: "What is Cognizin® Citicoline and why is it included?",
        a: "Cognizin® is a patented, clinically tested form of citicoline that increases brain energy (ATP) by 13.6% and accelerates brain cell membrane formation by 26%. It helps support sustained attention, mental reaction speed, and memory recall without over-stimulating your heart rate."
      },
      {
        q: "Are the adaptogens safe for daily consumption?",
        a: "Yes. We use standardized KSM-66® Ashwagandha and Rhodiola Rosea root extracts formulated well within established GRAS (Generally Recognized As Safe) guidelines for healthy adults."
      }
    ]
  },
  {
    category: "Subscriptions & Orders",
    items: [
      {
        q: "How does the subscription work? Can I modify or cancel anytime?",
        a: "Subscribers receive an automatic 15% discount on every recurring order plus guaranteed VIP inventory allocation and free shipping. You can swap flavors, change your delivery frequency (every 2, 3, or 4 weeks), pause, or cancel anytime with one click in your account portal."
      },
      {
        q: "Can I swap flavors between subscription deliveries?",
        a: "Yes! Simply sign into your account portal before your next billing date, select your active subscription, and pick any single flavor or the Variety Pack."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept Visa, Mastercard, American Express, Discover, Apple Pay, Google Pay, and Shop Pay."
      }
    ]
  },
  {
    category: "Storage, Shipping & Returns",
    items: [
      {
        q: "Does Dialed need to be refrigerated upon delivery?",
        a: "Our cold brew is flash-pasteurized and nitrogen-dosed to ensure 100% shelf stability at ambient room temperature for up to 9 months unopened. However, for peak flavor profile and maximum crispness, we recommend chilling cans in the fridge before cracking one open!"
      },
      {
        q: "How long does shipping take?",
        a: "Orders placed before 2:00 PM EST ship the same day. Standard delivery via UPS or FedEx Ground takes 2 to 4 business days anywhere within the continental US."
      },
      {
        q: "What is your 100% Money-Back Taste Guarantee?",
        a: "We want you to feel the cognitive boost risk-free. If you try Dialed for the first time and aren't completely blown away by the clean taste and smooth focus within 30 days of receiving your first 12-pack, contact support@dialedcoffee.com and we will issue a full refund."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#0B0B0B] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest">
            Help Center
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Have questions about our brewing process, active nootropics, or delivery policies? Find verified answers below.
          </p>

          {/* Search Bar */}
          <div className="relative pt-4 max-w-lg mx-auto">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-7" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. caffeine, refrigeration, cancel...)"
              className="w-full pl-12 pr-4 py-3.5 bg-[#141414] border border-[#2E2E2E] rounded-2xl text-white text-sm focus:outline-none focus:border-[#E58A2B] placeholder-gray-500"
            />
          </div>
        </div>

        {/* Categorized FAQs */}
        <div className="space-y-12">
          {categorizedFaqs.map((section, secIdx) => {
            const matchingItems = section.items.filter(
              i => i.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   i.a.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (matchingItems.length === 0) return null;

            return (
              <div key={secIdx} className="space-y-4">
                <h2 className="text-xl font-black uppercase tracking-wider text-white border-b border-[#222] pb-3 flex items-center justify-between">
                  <span>{section.category}</span>
                  <span className="text-xs text-[#E58A2B] font-bold">({matchingItems.length})</span>
                </h2>

                <div className="space-y-3">
                  {matchingItems.map((item, idx) => {
                    const key = `${secIdx}-${idx}`;
                    const isOpen = openItems[key];

                    return (
                      <div
                        key={idx}
                        className="bg-[#141414] border border-[#242424] rounded-2xl overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(key)}
                          className="w-full px-6 py-5 text-left flex justify-between items-center space-x-4 hover:bg-[#1A1A1A] transition"
                        >
                          <span className="text-base font-bold text-white">
                            {item.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#E58A2B] flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 pt-2 text-sm text-gray-300 leading-relaxed border-t border-[#1F1F1F]">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Still need help callout */}
        <div className="mt-16 bg-[#141414] border border-[#242424] rounded-3xl p-8 text-center space-y-4">
          <HelpCircle className="w-10 h-10 text-[#E58A2B] mx-auto" />
          <h3 className="text-xl font-bold uppercase text-white">Still have questions?</h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Our customer experience team is always ready to answer any specific dietary, bulk order, or shipment inquiries.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#E58A2B] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#f39535] transition"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Customer Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
