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
    <section id="pricing" className="py-24 sm:py-32 border-b border-slate-800/80 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(0,245,155,0.15)]">
            <Zap className="h-4 w-4" />
            Transparent Subscription Plans
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple Pricing. Zero Profit Skimming.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We charge a flat monthly subscription. We never take a percentage of your trading profits or volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card glass-card-hover rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative ${
                plan.popular
                  ? 'border-emerald-500/50 shadow-[0_0_40px_rgba(0,245,155,0.15)] ring-1 ring-emerald-500/30'
                  : 'border-slate-800/80'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,245,155,0.5)]">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-slate-300 mt-2">{plan.description}</p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-extrabold font-mono text-white tracking-tight">{plan.price}</span>
                  <span className="text-sm text-slate-400 font-mono">/{plan.period}</span>
                </div>

                <div className="mt-8 space-y-4">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-slate-200">
                      <div className="h-5 w-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800/80">
                <a
                  href={`${appUrl}/billing`}
                  className={`w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-bold transition-all cursor-pointer shadow-sm ${
                    plan.popular
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_0_20px_rgba(0,245,155,0.35)] hover:shadow-[0_0_30px_rgba(0,245,155,0.5)]'
                      : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/70 hover:border-slate-500'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
