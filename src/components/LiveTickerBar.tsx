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
    <div className="w-full bg-[#070A12] border-b border-[#1E293B] py-1.5 px-4 text-xs font-mono overflow-x-auto select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 min-w-[600px]">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-wider font-semibold">Live Market Feeds</span>
        </div>
        <div className="flex items-center gap-6">
          {tickers.map((t) => {
            const isPositive = t.changePct >= 0;
            return (
              <div key={t.symbol} className="flex items-center gap-2">
                <span className="text-slate-300 font-semibold">{t.symbol}</span>
                <span className="text-white font-mono">${t.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span
                  className={`flex items-center text-[11px] font-bold ${
                    isPositive ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {isPositive ? <TrendingUp className="h-3 w-3 mr-0.5" /> : <TrendingDown className="h-3 w-3 mr-0.5" />}
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
