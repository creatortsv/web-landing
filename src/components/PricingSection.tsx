'use client';

import * as React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PLANS: PricingPlan[] = [
  {
    name: 'Community',
    price: '$0',
    period: 'forever',
    description: 'Essential terminal & basic grid strategies for exploring the platform.',
    features: [
      '1 Active Spot Grid Bot',
      'Real-Time L2 Order Book',
      'Binance Testnet Paper Trading',
      '7-Day Trade History',
      'Community Discord Support',
    ],
    cta: 'Start Free',
  },
  {
    name: 'Trader Pro',
    price: '$29',
    period: 'per month',
    description: 'Designed for active quant traders seeking multi-asset continuous automation.',
    features: [
      '5 Active Grid / Infinity Bots',
      'Spot & Infinity Strategies',
      'Sub-millisecond WebSockets',
      '30-Day Trade Analytics Export',
      'Custom Telegram/Email Alerts',
      'Priority Execution Routing',
    ],
    cta: 'Get Trader Pro',
    popular: true,
  },
  {
    name: 'Quantitative Elite',
    price: '$79',
    period: 'per month',
    description: 'Maximum algorithmic power with high-leverage futures and Sharpe metrics.',
    features: [
      '20 Active Bot Slots',
      '50x Futures Leveraged Grids',
      'Dynamic Liquidation Buffers',
      'Sharpe & Drawdown Analytics',
      'Unlimited History & API Keys',
      'VIP Dedicated Account Manager',
    ],
    cta: 'Upgrade to Elite',
  },
];

export const PricingSection: React.FC = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return (
    <section id="pricing" className="py-20 border-b border-[#1E293B] bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="h-3.5 w-3.5" />
            Transparent Subscription Plans
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Simple Pricing. Zero Profit Skimming.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            We charge a flat monthly subscription. We never take a percentage of your trading profits or volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? 'border-emerald-500/60 bg-[#0D1826] shadow-[0_0_30px_rgba(0,245,155,0.1)]'
                  : 'border-[#1E293B] bg-[#0D1322]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-zinc-950 font-bold text-[10px] uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold font-mono text-white">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-mono">/{plan.period}</span>
                </div>

                <div className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1E293B]">
                <a
                  href={`${appUrl}/billing`}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-[0_0_15px_rgba(0,245,155,0.3)]'
                      : 'bg-slate-900 hover:bg-slate-800 text-white border border-[#1E293B]'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
