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
    <section id="simulator" className="py-24 sm:py-32 border-b border-slate-800/80 bg-[#070A12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(0,245,155,0.15)]">
            <Sparkles className="h-4 w-4" />
            Interactive ROI Simulation Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Estimate Your Grid Trading Yield
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Model real-time grid spacing, transaction fee deductions, and historical volatility across institutional trading pairs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-6 rounded-2xl glass-card p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-7">
              {/* Asset Selector */}
              <div>
                <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Select Trading Asset
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {Object.keys(PAIR_DEFAULTS).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => handlePairChange(p)}
                      className={`py-3 text-sm font-bold rounded-xl border transition-all cursor-pointer ${
                        pair === p
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(0,245,155,0.25)]'
                          : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {p.replace('USDT', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
                    Allocated Capital
                  </label>
                  <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
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
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-xs font-mono text-slate-400 mt-2">
                  <span>$100</span>
                  <span>$10,000</span>
                  <span>$50,000</span>
                </div>
              </div>

              {/* Price Corridor (Lower & Upper) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Lower Limit Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-sm text-slate-400 font-mono">$</span>
                    <input
                      type="number"
                      value={lowerPrice}
                      onChange={(e) => setLowerPrice(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/70 text-white font-mono text-base focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Upper Limit Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-sm text-slate-400 font-mono">$</span>
                    <input
                      type="number"
                      value={upperPrice}
                      onChange={(e) => setUpperPrice(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/70 text-white font-mono text-base focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Grid Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
                    Grid Quantity (Levels)
                  </label>
                  <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
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
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-xs font-mono text-slate-400 mt-2">
                  <span>5 Grids (Wide)</span>
                  <span>50 Grids</span>
                  <span>100 Grids (Dense)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800/80 text-xs sm:text-sm font-mono text-slate-300 flex items-center justify-between">
              <span>Grid Step Spacing:</span>
              <span className="text-white font-bold text-sm sm:text-base">${results.gridSpacingUsd} / Level</span>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-6 rounded-2xl glass-card p-6 sm:p-8 flex flex-col justify-between border-emerald-500/40 shadow-[0_0_35px_rgba(0,245,155,0.12)]">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 font-mono">
                  Projected Annualized Return
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                  Net of Fees
                </span>
              </div>

              {/* Large APR Metric */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-6xl sm:text-7xl font-extrabold font-mono text-white tracking-tight drop-shadow-[0_0_25px_rgba(0,245,155,0.3)]">
                  +{results.projectedAprPct}%
                </span>
                <span className="text-slate-400 font-bold text-base sm:text-lg">APR</span>
              </div>

              {/* Breakdown Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-5">
                  <div className="text-xs sm:text-sm text-slate-300 font-medium">Est. Daily Profit</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1.5">
                    +${results.estimatedDailyProfitUsd}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">~{results.estimatedDailyTrades} grid fills/day</div>
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-5">
                  <div className="text-xs sm:text-sm text-slate-300 font-medium">Est. 30-Day Profit</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1.5">
                    +${results.projectedMonthlyProfitUsd}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Calculated compounding</div>
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-5">
                  <div className="text-xs sm:text-sm text-slate-300 font-medium">Profit Per Grid Level</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1.5">
                    {results.profitPerGridPct}%
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Excludes 0.2% maker/taker</div>
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-5">
                  <div className="text-xs sm:text-sm text-slate-300 font-medium">Capital Per Grid</div>
                  <div className="text-2xl font-bold font-mono text-cyan-400 mt-1.5">
                    ${(investmentUsd / Math.max(1, gridCount)).toFixed(2)}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Order slice size</div>
                </div>
              </div>
            </div>

            {/* Deploy Strategy CTA */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <a
                href={deepLinkUrl}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-7 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base shadow-[0_0_25px_rgba(0,245,155,0.4)] hover:shadow-[0_0_35px_rgba(0,245,155,0.55)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Deploy This Strategy Now
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="text-center text-xs text-slate-400 mt-2.5 font-mono">
                Pre-populates parameters directly into Terminal Bot Wizard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
