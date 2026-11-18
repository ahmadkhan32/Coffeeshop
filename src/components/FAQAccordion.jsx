import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const defaultFaqs = [
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
    q: "Does Dialed need to be refrigerated upon delivery?",
    a: "Our cold brew is flash-pasteurized and nitrogen-dosed to ensure 100% shelf stability at ambient room temperature for up to 9 months unopened. However, for peak flavor profile and maximum crispness, we recommend chilling cans in the fridge before cracking one open!"
  },
  {
    q: "How does the subscription work? Can I modify or cancel anytime?",
    a: "Subscribers receive an automatic 15% discount on every recurring order plus guaranteed VIP inventory allocation and free shipping. You can swap flavors, change your delivery frequency (every 2, 3, or 4 weeks), pause, or cancel anytime with one click in your account portal."
  },
  {
    q: "What is your 100% Money-Back Taste Guarantee?",
    a: "We want you to feel the cognitive boost risk-free. If you try Dialed for the first time and aren't completely blown away by the clean taste and smooth focus within 30 days of receiving your first 12-pack, contact support@dialedcoffee.com and we will issue a full refund."
  }
];

export default function FAQAccordion({ faqs = defaultFaqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-[#1E1E1E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#E58A2B] text-xs font-black uppercase tracking-widest">
            Answers & Clarity
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            {title}
          </h2>
          <p className="text-sm text-gray-400">
            Everything you need to know about our functional Colombian cold brew formulas.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-[#242424] rounded-2xl overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center space-x-4 hover:bg-[#1a1a1a] transition"
                >
                  <span className="text-base font-bold text-white text-left">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E58A2B] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-300 leading-relaxed border-t border-[#1F1F1F] animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
