'use client';

import * as React from 'react';
import Link from 'next/link';
import { Zap, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070D] border-t border-[#1E293B] py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Zap className="h-3.5 w-3.5 fill-current" />
              </div>
              <span className="font-bold text-sm tracking-wider text-white font-mono">
                VENOM <span className="text-emerald-400">FINANCE</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Institutional non-custodial quantitative trading algorithms engineered for high cryptocurrency volatility.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#strategies" className="hover:text-emerald-400">Spot Grid Bot</a></li>
              <li><a href="#strategies" className="hover:text-emerald-400">Infinity Grid Bot</a></li>
              <li><a href="#strategies" className="hover:text-emerald-400">Futures 50x Grid</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400">ROI Calculator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Developers & AI</h4>
            <ul className="space-y-2 font-mono text-[11px]">
              <li><a href="/llms.txt" target="_blank" className="hover:text-emerald-400">llms.txt (Machine Index)</a></li>
              <li><a href="/llms-full.txt" target="_blank" className="hover:text-emerald-400">llms-full.txt (Full Spec)</a></li>
              <li><a href="/sitemap.xml" target="_blank" className="hover:text-emerald-400">sitemap.xml</a></li>
              <li><a href="https://github.com/creatortsv" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">GitHub Organization ↗</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Security & Compliance</h4>
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Zero-Custody Architecture</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-normal">
              API keys encrypted with Cloud KMS AES-256-GCM envelope encryption. No withdrawals permitted.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-[#1E293B]/60 text-[10px] text-slate-400 leading-relaxed flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            Disclaimer: Cryptocurrency and derivatives trading involves substantial risk of loss and is not suitable for every investor. 
            Venom Finance provides algorithmic automation software and does not offer financial or investment advisory services.
          </p>
          <div className="shrink-0 text-slate-400 font-mono">
            &copy; {new Date().getFullYear()} Venom Finance. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
