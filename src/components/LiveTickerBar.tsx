'use client';

import * as React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TickerItem {
  symbol: string;
  price: number;
  changePct: number;
}

const INITIAL_TICKERS: TickerItem[] = [
  { symbol: 'BTC/USDT', price: 87450.0, changePct: 2.84 },
  { symbol: 'ETH/USDT', price: 2715.5, changePct: -0.65 },
  { symbol: 'SOL/USDT', price: 184.2, changePct: 5.12 },
  { symbol: 'BNB/USDT', price: 618.0, changePct: 1.45 },
];

export const LiveTickerBar: React.FC = () => {
  const [tickers, setTickers] = React.useState<TickerItem[]>(INITIAL_TICKERS);

  React.useEffect(() => {
    // Attempt connecting to public Binance ticker stream for live updates
    let ws: WebSocket | null = null;
    try {
      ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/solusdt@ticker/bnbusdt@ticker');
      ws.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data);
          const data = payload?.data;
          if (!data || !data.s) return;
          const symbolMap: Record<string, string> = {
            'BTCUSDT': 'BTC/USDT',
            'ETHUSDT': 'ETH/USDT',
            'SOLUSDT': 'SOL/USDT',
            'BNBUSDT': 'BNB/USDT',
          };
          const cleanSymbol = symbolMap[data.s];
          if (cleanSymbol) {
            setTickers((prev) =>
              prev.map((t) =>
                t.symbol === cleanSymbol
                  ? {
                      ...t,
                      price: parseFloat(data.c),
                      changePct: parseFloat(data.P),
                    }
                  : t
              )
            );
          }
        } catch {
          // ignore stream parse errors
        }
      };
    } catch {
      // ignore websocket fallback
    }

    return () => {
      if (ws) ws.close();
    };
  }, []);

  return (
    <div className="w-full bg-[#070A12]/95 backdrop-blur-md border-b border-slate-800/80 py-2.5 px-4 sm:px-6 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2.5 text-slate-300 shrink-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs uppercase tracking-widest font-semibold text-slate-300">Live Market Feeds</span>
        </div>
        <div className="flex items-center gap-6 sm:gap-8 shrink-0">
          {tickers.map((t) => {
            const isPositive = t.changePct >= 0;
            return (
              <div key={t.symbol} className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-slate-200 tracking-wide font-sans">{t.symbol}</span>
                <span className="text-xs sm:text-sm font-semibold font-mono text-white">
                  ${t.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold font-mono ${
                    isPositive
                      ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-950/60 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {isPositive ? <TrendingUp className="h-3.5 w-3.5 mr-1" /> : <TrendingDown className="h-3.5 w-3.5 mr-1" />}
                  {isPositive ? '+' : ''}
                  {t.changePct.toFixed(2)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
