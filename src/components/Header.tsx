'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#090D16]/90 border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(0,245,155,0.3)]">
            <Zap className="h-4.5 w-4.5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-wider text-white font-mono flex items-center gap-1.5">
              VENOM <span className="text-emerald-400">FINANCE</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-400">Institutional Quant</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
          <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
          <a href="#strategies" className="hover:text-emerald-400 transition-colors">Strategies</a>
          <a href="#simulator" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            ROI Calculator
          </a>
          <a href="#security" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <Shield className="h-3.5 w-3.5 text-slate-400" />
            Security
          </a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <a
            href={`${appUrl}/login`}
            className="hidden sm:inline-flex px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Sign In
          </a>
          <a
            href={appUrl}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs shadow-[0_0_15px_rgba(0,245,155,0.3)] hover:shadow-[0_0_20px_rgba(0,245,155,0.5)] transition-all cursor-pointer"
          >
            Launch Terminal
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
