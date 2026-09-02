'use client';

import * as React from 'react';
import { calculateGridRoi } from '@/lib/calculatorMath';
import { Sparkles, ArrowRight, DollarSign, Percent, RefreshCw, BarChart3 } from 'lucide-react';

const PAIR_DEFAULTS: Record<string, { lower: number; upper: number; defaultGrids: number }> = {
  'BTCUSDT': { lower: 82000, upper: 96000, defaultGrids: 28 },
  'ETHUSDT': { lower: 2500, upper: 3100, defaultGrids: 24 },
  'SOLUSDT': { lower: 165, upper: 215, defaultGrids: 25 },
  'BNBUSDT': { lower: 580, upper: 680, defaultGrids: 20 },
};

export const GridRoiCalculator: React.FC = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  const [pair, setPair] = React.useState('BTCUSDT');
  const [investmentUsd, setInvestmentUsd] = React.useState(2500);
  const [lowerPrice, setLowerPrice] = React.useState(PAIR_DEFAULTS['BTCUSDT'].lower);
  const [upperPrice, setUpperPrice] = React.useState(PAIR_DEFAULTS['BTCUSDT'].upper);
  const [gridCount, setGridCount] = React.useState(PAIR_DEFAULTS['BTCUSDT'].defaultGrids);

  const handlePairChange = (newPair: string) => {
    setPair(newPair);
    const defaults = PAIR_DEFAULTS[newPair];
    if (defaults) {
      setLowerPrice(defaults.lower);
      setUpperPrice(defaults.upper);
      setGridCount(defaults.defaultGrids);
    }
  };

  const results = calculateGridRoi({
    investmentUsd,
    pair,
    lowerPrice,
    upperPrice,
    gridCount,
  });

  const deepLinkUrl = `${appUrl}/bots/create?pair=${pair}&lower=${lowerPrice}&upper=${upperPrice}&grids=${gridCount}&investment=${investmentUsd}`;

  return (
    <section id="simulator" className="py-20 border-b border-[#1E293B] bg-[#070A12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            Interactive ROI Simulation Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Estimate Your Grid Trading Yield
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Model real-time grid spacing, transaction fee deductions, and historical volatility across different trading pairs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-6 rounded-2xl border border-[#1E293B] bg-[#0D1322] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Asset Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Select Trading Asset
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {Object.keys(PAIR_DEFAULTS).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => handlePairChange(p)}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        pair === p
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_12px_rgba(0,245,155,0.2)]'
                          : 'bg-[#090D16] border-[#1E293B] text-slate-400 hover:text-white'
                      }`}
                    >
                      {p.replace('USDT', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Allocated Capital
                  </label>
                  <span className="text-base font-bold font-mono text-white">
                    ${investmentUsd.toLocaleString('en-US')} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="100"
                  value={investmentUsd}
                  onChange={(e) => setInvestmentUsd(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                  <span>$100</span>
                  <span>$10,000</span>
                  <span>$50,000</span>
                </div>
              </div>

              {/* Price Corridor (Lower & Upper) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Lower Limit Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400">$</span>
                    <input
                      type="number"
                      value={lowerPrice}
                      onChange={(e) => setLowerPrice(Number(e.target.value))}
                      className="w-full pl-6 pr-3 py-2 rounded-lg bg-[#090D16] border border-[#1E293B] text-white font-mono text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Upper Limit Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-400">$</span>
                    <input
                      type="number"
                      value={upperPrice}
                      onChange={(e) => setUpperPrice(Number(e.target.value))}
                      className="w-full pl-6 pr-3 py-2 rounded-lg bg-[#090D16] border border-[#1E293B] text-white font-mono text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              {/* Grid Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Grid Quantity (Levels)
                  </label>
                  <span className="text-base font-bold font-mono text-emerald-400">
                    {gridCount} Grids
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="1"
                  value={gridCount}
                  onChange={(e) => setGridCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                  <span>5 Grids (Wide)</span>
                  <span>50 Grids</span>
                  <span>100 Grids (Dense)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E293B] text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Grid Step Spacing:</span>
              <span className="text-white font-bold">${results.gridSpacingUsd} / Level</span>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-[#0D1826] to-[#0A1220] p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(0,245,155,0.08)]">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
                  Projected Annualized Return
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                  Net of Fees
                </span>
              </div>

              {/* Large APR Metric */}
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold font-mono text-white tracking-tight">
                  +{results.projectedAprPct}%
                </span>
                <span className="text-slate-400 font-bold text-sm">APR</span>
              </div>

              {/* Breakdown Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#1E293B] bg-[#090D16]/80 p-4">
                  <div className="text-xs text-slate-400">Est. Daily Profit</div>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    +${results.estimatedDailyProfitUsd}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">~{results.estimatedDailyTrades} grid fills/day</div>
                </div>

                <div className="rounded-xl border border-[#1E293B] bg-[#090D16]/80 p-4">
                  <div className="text-xs text-slate-400">Est. 30-Day Profit</div>
                  <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                    +${results.projectedMonthlyProfitUsd}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Calculated compounding</div>
                </div>

                <div className="rounded-xl border border-[#1E293B] bg-[#090D16]/80 p-4">
                  <div className="text-xs text-slate-400">Profit Per Grid Level</div>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    {results.profitPerGridPct}%
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Excludes 0.2% maker/taker</div>
                </div>

                <div className="rounded-xl border border-[#1E293B] bg-[#090D16]/80 p-4">
                  <div className="text-xs text-slate-400">Capital Per Grid</div>
                  <div className="text-xl font-bold font-mono text-cyan-400 mt-1">
                    ${(investmentUsd / Math.max(1, gridCount)).toFixed(2)}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Order slice size</div>
                </div>
              </div>
            </div>

            {/* Deploy Strategy CTA */}
            <div className="mt-8 pt-6 border-t border-[#1E293B]">
              <a
                href={deepLinkUrl}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-sm shadow-[0_0_20px_rgba(0,245,155,0.3)] transition-all cursor-pointer"
              >
                Deploy This Strategy Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-2 font-mono">
                Pre-populates parameters in Terminal Bot Wizard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
