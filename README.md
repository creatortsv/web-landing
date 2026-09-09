# Venom Finance — Marketing Landing Page

High-performance marketing landing page and conversion portal for the **Venom Finance** automated quantitative cryptocurrency trading platform. Built with **Next.js 15 App Router**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Features

- ⚡ **Interactive Grid ROI Calculator**: Live profitability estimator across geometric and arithmetic grid strategies with leverage adjustment.
- 🛡️ **Security Architecture Showcase**: Visual presentation of envelope encryption (AES-256-GCM + Cloud KMS), Goroutine supervisor isolation, and zero-trust auth.
- 📊 **Real-time Market Tickers**: Dynamic ticker bar for major crypto pairs (BTC/USDT, ETH/USDT, SOL/USDT, etc.).
- 💎 **Tiered Pricing Matrix**: Detailed feature comparison across Free, Trader Pro, and Quantitative Elite subscription tiers.
- 🔭 **Enterprise Observability**: Sentry error tracking with strict PII scrubbing (`maskAllInputs: true`, `maskAllText: true`, `blockAllMedia: true`), Server/Client/Edge instrumentation, and global error boundaries.

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
