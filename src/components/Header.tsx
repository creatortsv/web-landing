'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#070A12]/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(0,245,155,0.35)]">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wider text-white font-mono flex items-center gap-1.5">
              VENOM <span className="text-emerald-400">FINANCE</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Institutional Quant</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
          <a href="#strategies" className="hover:text-emerald-400 transition-colors">Strategies</a>
          <a href="#simulator" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            ROI Calculator
          </a>
          <a href="#security" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-slate-400" />
            Security
          </a>
          <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-4">
          <a
            href={`${appUrl}/login`}
            className="hidden sm:inline-flex px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Sign In
          </a>
          <a
            href={appUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(0,245,155,0.35)] hover:shadow-[0_0_30px_rgba(0,245,155,0.5)] transition-all cursor-pointer"
          >
            Launch Terminal
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
