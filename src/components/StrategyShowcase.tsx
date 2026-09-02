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
    <section id="strategies" className="py-20 border-b border-[#1E293B] bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="h-3.5 w-3.5" />
            Battle-Tested Quantitative Presets
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Algorithmic Strategies Built for Any Market Regime
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            From zero-liquidation spot grids to high-efficiency leveraged futures matrices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRATEGIES.map((s) => (
            <div
              key={s.id}
              className={`rounded-2xl border border-[#1E293B] bg-gradient-to-b ${s.gradient} p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                    {s.badge}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      s.risk === 'Low'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : s.risk === 'Medium'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}
                  >
                    {s.risk} Risk
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mt-3">{s.name}</h3>
                <div className="text-xs text-slate-400 font-mono mt-0.5">{s.type}</div>

                <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                  {s.description}
                </p>

                {/* Performance Metrics */}
                <div className="mt-6 pt-5 border-t border-[#1E293B] grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-[#070A12]/80 p-2">
                    <div className="text-xs text-slate-400">Backtest</div>
                    <div className="text-base font-bold font-mono text-emerald-400 mt-0.5">{s.apr}</div>
                  </div>
                  <div className="rounded-lg bg-[#070A12]/80 p-2">
                    <div className="text-xs text-slate-400">Win Rate</div>
                    <div className="text-base font-bold font-mono text-white mt-0.5">{s.winRate}</div>
                  </div>
                  <div className="rounded-lg bg-[#070A12]/80 p-2">
                    <div className="text-xs text-slate-400">Max DD</div>
                    <div className="text-base font-bold font-mono text-rose-400 mt-0.5">{s.drawdown}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E293B]">
                <a
                  href={`${appUrl}/bots/create?strategy=${s.id}&pair=${s.pair.replace('/', '')}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-slate-900 hover:bg-emerald-500 hover:text-zinc-950 text-white text-xs font-bold transition-all border border-[#1E293B] hover:border-transparent cursor-pointer"
                >
                  Deploy {s.pair}
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
