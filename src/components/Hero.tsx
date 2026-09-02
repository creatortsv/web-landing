'use client';

import * as React from 'react';
import { ArrowRight, Calculator, ShieldCheck, Activity, Terminal, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return (
    <section className="relative pt-20 pb-24 overflow-hidden border-b border-[#1E293B] grid-bg-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Zero-Custody Automated Grid Infrastructure
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Institutional Algorithmic Trading Engineered for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              High Volatility
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Deploy self-executing Spot Grid, Infinity Trend, and 50x Futures bots directly via your exchange API keys.
            Full isolation, sub-millisecond execution, and zero custody of your capital.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={appUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-sm shadow-[0_0_25px_rgba(0,245,155,0.4)] transition-all cursor-pointer"
            >
              <Terminal className="h-4 w-4" />
              Launch Trading Terminal
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#simulator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-[#1E293B] font-semibold text-sm transition-all cursor-pointer"
            >
              <Calculator className="h-4 w-4 text-emerald-400" />
              Calculate Grid ROI
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Zero-Withdrawal Policy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="h-4 w-4 text-cyan-400" />
              <span>Cloud KMS Envelope Encryption</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="h-4 w-4 text-emerald-400" />
              <span>Binance Live & Testnet Verified</span>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="rounded-xl border border-[#1E293B] bg-[#0D1322]/80 p-5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">$142,850,000+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Simulated Volume</div>
          </div>
          <div className="rounded-xl border border-[#1E293B] bg-[#0D1322]/80 p-5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">&lt; 12ms</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Order Latency</div>
          </div>
          <div className="rounded-xl border border-[#1E293B] bg-[#0D1322]/80 p-5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white">99.99%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Engine Uptime</div>
          </div>
          <div className="rounded-xl border border-[#1E293B] bg-[#0D1322]/80 p-5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">0 Custody</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Direct Exchange API</div>
          </div>
        </div>
      </div>
    </section>
  );
};
