# Venom Finance — Marketing Landing Page

High-performance marketing landing page and conversion portal for the **Venom Finance** automated quantitative cryptocurrency trading platform. Built with **Next.js 15 App Router**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Features & Architecture

- 🚀 **Institutional Platform Features Showcase (`#features`)**: High-conversion 6-pillar matrix detailing the Autonomous ReAct AI Quant Engine, Sub-12ms Go execution pipelines, 100% Non-Custodial Cloud KMS envelope encryption, Multi-Regime Grids with 50x perps, Pre-Trade Risk Gates, and Flat SaaS Pricing (0% profit skimming). Features dual-path conversion CTAs and triple risk-reversal trust badges.
- ⚡ **Interactive Grid ROI Calculator (`#simulator`)**: Live profitability estimator across geometric and arithmetic grid strategies with leverage adjustment.
- 🤖 **Battle-Tested Strategy Presets (`#strategies`)**: Spot Grid Alpha, Infinity Moon Walker, and 50x Perpetual Momentum presets.
- 🛡️ **Security Architecture Showcase (`#security`)**: Visual presentation of envelope encryption (AES-256-GCM + Cloud KMS), Goroutine supervisor isolation, and zero-trust auth.
- 📊 **Real-time Market Tickers**: Dynamic ticker bar for major crypto pairs (BTC/USDT, ETH/USDT, SOL/USDT, etc.).
- 💎 **Tiered Pricing Matrix (`#pricing`)**: Detailed feature comparison across Free, Trader Pro, and Quantitative Elite subscription tiers.
- ❓ **FAQ Knowledge Accordion (`#faq`)**: Common trader questions on non-custodial API permissions, latency, and risk mitigation.
- 🔭 **Enterprise Observability**: Sentry error tracking with strict PII scrubbing (`maskAllInputs: true`, `maskAllText: true`, `blockAllMedia: true`), Server/Client/Edge instrumentation, and global error boundaries.

---

## Page Layout & Navigation Anchors

```text
Header (#)
├── Hero
├── FeaturesSection (#features) [scroll-mt-20]
├── StrategyShowcase (#strategies)
├── GridRoiCalculator (#simulator)
├── SecurityArchitecture (#security)
├── PricingSection (#pricing)
├── FaqSection (#faq)
└── Footer
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server on http://localhost:3000
npm run dev

# Run unit tests
npm run test

# Typecheck and production build
npm run typecheck
npm run build
```

---

## Observability & Error Tracking

Error monitoring is provided by `@sentry/nextjs`:
- Client-side error tracking and Session Replay configured in `sentry.client.config.ts` with complete text, input, and media masking.
- Node.js server instrumentation configured in `sentry.server.config.ts`.
- Edge runtime instrumentation configured in `sentry.edge.config.ts`.
- Next.js lifecycle registration via `src/instrumentation.ts`.
- App Router uncaught error recovery via `src/app/global-error.tsx`.
