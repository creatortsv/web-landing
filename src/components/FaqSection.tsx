'use client';

import * as React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/faqData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 border-b border-slate-800/80 bg-[#070A12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(0,245,155,0.15)]">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="glass-card rounded-2xl overflow-hidden border-slate-800/80 hover:border-slate-700/80 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full py-5 px-7 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-white hover:text-emerald-400 cursor-pointer transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-7 pb-6 pt-3 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
