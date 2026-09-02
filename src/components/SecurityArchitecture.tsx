'use client';

import * as React from 'react';
import { ShieldCheck, Lock, Cpu, Server, Key, EyeOff } from 'lucide-react';

export const SecurityArchitecture: React.FC = () => {
  return (
    <section id="security" className="py-20 border-b border-[#1E293B] bg-[#070A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            Defense-In-Depth Security Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Non-Custodial by Design. Cryptographically Sealed.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Venom Finance never touches user deposits or holds withdrawal permissions. Your capital stays exclusively in your exchange accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#1E293B] bg-[#0D1322] p-6">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Envelope Encryption (AES-256-GCM)</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              API credentials are encrypted per-record with a unique Data Encryption Key (DEK), sealed via Google Cloud KMS Master Keys. Plaintext keys never touch logs or disk storage.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1E293B] bg-[#0D1322] p-6">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <EyeOff className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero-Withdrawal Permission Gate</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Venom strictly enforces read & trade permissions. Any API key registered with withdrawal rights is automatically rejected during validation to eliminate external exfiltration risk.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1E293B] bg-[#0D1322] p-6">
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <Server className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Goroutine Isolation & Circuit Breakers</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Each running bot operates in an isolated Go runtime supervisor with independent panic recovery, memory barriers, and rate-limiting circuit breakers preventing exchange API bans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
