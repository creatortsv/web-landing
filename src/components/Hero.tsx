'use client';

import * as React from 'react';
import { ArrowRight, Calculator, ShieldCheck, Activity, Terminal, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return (
    <section className="relative pt-24 pb-28 sm:pt-32 sm:pb-36 overflow-hidden border-b border-slate-800/80 grid-bg-pattern">
      {/* Ambient Radial Backlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Institutional Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide mb-8 shadow-[0_0_20px_rgba(0,245,155,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Zero-Custody Automated Grid Infrastructure
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] font-sans">
            Institutional Algorithmic Trading Engineered for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              High Volatility
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Deploy self-executing Spot Grid, Infinity Trend, and 50x Futures bots directly via your exchange API keys.
            Full isolation, sub-millisecond execution, and zero custody of your capital.
          </p>

          {/* Ergonomic Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a
              href={appUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-[0_0_30px_rgba(0,245,155,0.45)] hover:shadow-[0_0_40px_rgba(0,245,155,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Terminal className="h-5 w-5" />
              Launch Trading Terminal
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/70 hover:border-emerald-500/50 font-semibold text-base backdrop-blur-md transition-all cursor-pointer"
            >
              <Calculator className="h-5 w-5 text-emerald-400" />
              Calculate Grid ROI
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <ShieldCheck className="h-4.5 w-4.5 text-emerald-400" />
              <span>Zero-Withdrawal Policy</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <Cpu className="h-4.5 w-4.5 text-cyan-400" />
              <span>Cloud KMS Envelope Encryption</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <Activity className="h-4.5 w-4.5 text-emerald-400" />
              <span>Binance Live & Testnet Verified</span>
            </div>
          </div>
        </div>

        {/* Live Institutional Metrics Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">$142M+</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-400 mt-2 uppercase tracking-wider">Simulated Volume</div>
          </div>
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 tracking-tight">&lt; 12ms</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-400 mt-2 uppercase tracking-wider">Order Latency</div>
          </div>
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">99.99%</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-400 mt-2 uppercase tracking-wider">Engine Uptime</div>
          </div>
          <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400 tracking-tight">0 Custody</div>
            <div className="text-xs sm:text-sm font-semibold text-slate-400 mt-2 uppercase tracking-wider">Direct API Only</div>
          </div>
        </div>
      </div>
    </section>
  );
};
