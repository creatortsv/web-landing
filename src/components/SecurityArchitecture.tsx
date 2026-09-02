'use client';

import * as React from 'react';
import { ShieldCheck, Lock, Cpu, Server, Key, EyeOff } from 'lucide-react';

export const SecurityArchitecture: React.FC = () => {
  return (
    <section id="security" className="py-24 sm:py-32 border-b border-slate-800/80 bg-[#070A12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(0,245,155,0.15)]">
            <ShieldCheck className="h-4 w-4" />
            Defense-In-Depth Security Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Non-Custodial by Design. Cryptographically Sealed.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Venom Finance never touches user deposits or holds withdrawal permissions. Your capital stays exclusively in your exchange accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card glass-card-hover rounded-2xl p-8 border-slate-800/80 relative">
            <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(0,245,155,0.2)]">
              <Lock className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Envelope Encryption (AES-256-GCM)</h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              API credentials are encrypted per-record with a unique Data Encryption Key (DEK), sealed via Google Cloud KMS Master Keys. Plaintext keys never touch logs or disk storage.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-8 border-slate-800/80 relative">
            <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_20px_rgba(0,194,255,0.2)]">
              <EyeOff className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Zero-Withdrawal Permission Gate</h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Venom strictly enforces read & trade permissions. Any API key registered with withdrawal rights is automatically rejected during validation to eliminate external exfiltration risk.
            </p>
          </div>

          <div className="glass-card glass-card-hover rounded-2xl p-8 border-slate-800/80 relative">
            <div className="h-14 w-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Server className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Goroutine Isolation & Circuit Breakers</h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Each running bot operates in an isolated Go runtime supervisor with independent panic recovery, memory barriers, and rate-limiting circuit breakers preventing exchange API bans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
