'use client';

import * as React from 'react';
import { 
  Bot, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Sliders, 
  BarChart3, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Lock,
  Cpu
} from 'lucide-react';

interface FeatureCard {
  id: string;
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  metric: string;
  gradient: string;
}

const FEATURES: FeatureCard[] = [
  {
    id: 'ai-quant',
    icon: Bot,
    badge: 'Quantitative Intelligence',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    title: 'Autonomous ReAct AI Quant Engine',
    description: 'Computes real-time Hurst exponents and ATR volatility to dynamically synthesize optimal grid bounds, geometric spacing, and stops—zero parameter hallucination.',
    metric: 'Regime Auto-Detection • 0.02% Fee Drag Modeling',
    gradient: 'from-cyan-500/15 via-slate-900/40 to-transparent',
  },
  {
    id: 'low-latency',
    icon: Zap,
    badge: 'High-Throughput Execution',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    title: 'Sub-12ms Native Go Order Pipelines',
    description: 'Engineered on compiled Go 1.25 and Kafka event streams. Executes order book fills in sub-12ms windows to harvest volatility spikes before retail bots react.',
    metric: '< 12ms Round-Trip • 99.99% Engine Uptime',
    gradient: 'from-emerald-500/15 via-slate-900/40 to-transparent',
  },
  {
    id: 'non-custodial',
    icon: ShieldCheck,
    badge: 'Capital Sovereignty',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    title: '100% Non-Custodial Cloud KMS Sealing',
    description: 'Your capital stays on your exchange. Direct API trading protected by AES-256-GCM envelope encryption. Keys with withdrawal permissions are automatically rejected.',
    metric: '0 Custody Risk • Strict Read & Trade Only',
    gradient: 'from-emerald-500/15 via-slate-900/40 to-transparent',
  },
  {
    id: 'multi-regime',
    icon: TrendingUp,
    badge: 'Algorithmic Flexibility',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    title: 'Spot, Infinity & 50x Perpetual Grids',
    description: 'Profit in any market condition. Accumulate with spot grids, capture uncapped upside with infinity grids, or trade long/short momentum with 50x leveraged futures.',
    metric: 'Up to 50x Leverage • 3 Preset Regimes',
    gradient: 'from-cyan-500/15 via-slate-900/40 to-transparent',
  },
  {
    id: 'risk-engine',
    icon: Sliders,
    badge: 'Risk Mitigation',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    title: 'Pre-Trade Risk Gates & Circuit Breakers',
    description: 'Isolated goroutines supervise every worker. Pre-trade risk evaluation enforces liquidation buffers and 5-strike circuit breakers to prevent runaway losses.',
    metric: 'Isolated Goroutines • 5-Strike Auto Safe Stop',
    gradient: 'from-amber-500/15 via-slate-900/40 to-transparent',
  },
  {
    id: 'flat-pricing',
    icon: BarChart3,
    badge: 'Predictable Economics',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    title: 'Flat SaaS Pricing. 0% Profit Skimming.',
    description: 'Zero profit-share deductions, zero volume tax, and zero withdrawal fees. Scale your capital from $1,000 to $1,000,000 while paying the exact same flat subscription.',
    metric: '0% AUM Fee Skim • Keep 100% of Alpha',
    gradient: 'from-emerald-500/15 via-slate-900/40 to-transparent',
  },
];

export const FeaturesSection: React.FC = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return (
    <section 
      id="features" 
      aria-labelledby="features-heading"
      className="scroll-mt-20 py-24 sm:py-32 border-b border-slate-800/80 bg-[#090D16] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(0,245,155,0.15)]">
            <Cpu className="h-4 w-4" aria-hidden="true" />
            Institutional Quant Architecture
          </div>
          <h2 id="features-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Alpha.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Cryptographically Sealed.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Institutional quantitative algorithms, sub-millisecond execution, and zero-custody security. Deploy battle-tested trading infrastructure directly to your exchange in under 60 seconds.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className={`glass-card glass-card-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-slate-800/80 relative overflow-hidden bg-gradient-to-b ${f.gradient} group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(0,245,155,0.2)] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${f.badgeColor}`}>
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-emerald-300 transition-colors">
                    {f.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-emerald-400 bg-slate-950/60 border border-slate-800/60 px-3 py-2 rounded-xl">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>{f.metric}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Conversion Action Hub & Risk Reversal */}
        <div className="mt-16 sm:mt-20 p-8 rounded-2xl border border-slate-800/90 bg-slate-900/40 backdrop-blur-md max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={appUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(0,245,155,0.4)] hover:shadow-[0_0_35px_rgba(0,245,155,0.55)] transition-all cursor-pointer"
            >
              Launch Trading Terminal
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all cursor-pointer"
            >
              <Calculator className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              Simulate Your Grid Yield
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              No Credit Card Required
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="h-4 w-4 text-cyan-400" aria-hidden="true" />
              Zero Deposit Lockup (100% Non-Custodial)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              Paper Trading on Binance Testnet
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
