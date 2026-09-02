'use client';

import * as React from 'react';
import { ArrowRight, Bot, TrendingUp, Zap, Flame, ShieldAlert } from 'lucide-react';

interface StrategyCard {
  id: string;
  name: string;
  badge: string;
  type: string;
  apr: string;
  winRate: string;
  drawdown: string;
  description: string;
  pair: string;
  risk: 'Low' | 'Medium' | 'High';
  gradient: string;
}

const STRATEGIES: StrategyCard[] = [
  {
    id: 'spot-grid-alpha',
    name: 'BTC/USDT Spot Grid Alpha',
    badge: 'Flagship Core',
    type: 'Spot Volatility Harvester',
    apr: '+38.4%',
    winRate: '82.4%',
    drawdown: '3.8%',
    description: 'Deploys 24-40 arithmetic grid lines across high-liquidity consolidations. Executes non-custodial limit orders with 0 liquidation risk.',
    pair: 'BTC/USDT',
    risk: 'Low',
    gradient: 'from-emerald-500/20 to-teal-500/5',
  },
  {
    id: 'infinity-moon-walker',
    name: 'ETH Moon Walker Infinity',
    badge: 'Trending Bull',
    type: 'Uncapped Infinity Grid',
    apr: '+54.2%',
    winRate: '79.1%',
    drawdown: '5.2%',
    description: 'Designed for persistent bullish continuation. Dynamically sells incremental profits while holding the principal base asset value forever.',
    pair: 'ETH/USDT',
    risk: 'Medium',
    gradient: 'from-cyan-500/20 to-blue-500/5',
  },
  {
    id: 'futures-momentum-grid',
    name: 'SOL 10x Momentum Grid',
    badge: 'High Octane',
    type: 'Perpetual Derivatives Grid',
    apr: '+142.8%',
    winRate: '71.6%',
    drawdown: '11.4%',
    description: 'Amplified capital efficiency using 10x isolated leverage on perpetual futures. Built-in dynamic liquidation buffer and trailing stop-loss protection.',
    pair: 'SOL/USDT',
    risk: 'High',
    gradient: 'from-amber-500/20 to-rose-500/5',
  },
];

export const StrategyShowcase: React.FC = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return (
    <section id="strategies" className="py-24 sm:py-32 border-b border-slate-800/80 bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(0,245,155,0.15)]">
            <Bot className="h-4 w-4" />
            Battle-Tested Quantitative Presets
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Algorithmic Strategies Built for Any Market Regime
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From zero-liquidation spot grids to high-efficiency leveraged futures matrices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STRATEGIES.map((s) => (
            <div
              key={s.id}
              className={`glass-card glass-card-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between border-slate-800/80 relative overflow-hidden bg-gradient-to-b ${s.gradient}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                    {s.badge}
                  </span>
                  <span
                    className={`text-xs font-bold font-mono px-2.5 py-1 rounded-full border ${
                      s.risk === 'Low'
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : s.risk === 'Medium'
                        ? 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                        : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                    }`}
                  >
                    {s.risk} Risk
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mt-4">{s.name}</h3>
                <div className="text-xs sm:text-sm text-slate-400 font-mono mt-1">{s.type}</div>

                <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                  {s.description}
                </p>

                {/* Performance Metrics */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-slate-950/70 border border-slate-800/60 p-3">
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Backtest</div>
                    <div className="text-lg font-bold font-mono text-emerald-400 mt-1">{s.apr}</div>
                  </div>
                  <div className="rounded-xl bg-slate-950/70 border border-slate-800/60 p-3">
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Win Rate</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">{s.winRate}</div>
                  </div>
                  <div className="rounded-xl bg-slate-950/70 border border-slate-800/60 p-3">
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Max DD</div>
                    <div className="text-lg font-bold font-mono text-rose-400 mt-1">{s.drawdown}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-800/80">
                <a
                  href={`${appUrl}/bots/create?strategy=${s.id}&pair=${s.pair.replace('/', '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white text-sm font-bold transition-all border border-slate-700/70 hover:border-transparent cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(0,245,155,0.3)]"
                >
                  Deploy {s.pair}
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
