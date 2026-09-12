# Knowledge Base — web-landing

## Repository Info
- **Type**: Frontend Marketing Web Application
- **Path**: `web-landing`
- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Vitest

## Key Components
- `src/components/Hero.tsx`: High-conversion hero section introducing the Venom Finance algorithmic platform.
- `src/components/FeaturesSection.tsx`: Institutional platform capabilities showcase (AI Quant, Sub-ms Go runtime, KMS Envelope Encryption, 50x Perps, Risk Gates, Flat SaaS) resolving navigation anchor `#features` with `scroll-mt-20` sticky header compensation.
- `src/components/StrategyShowcase.tsx`: Quantitative strategy presets (Spot Grid Alpha, Infinity Moon Walker, 50x Momentum Grid) with historical APR and drawdown metrics.
- `src/components/GridRoiCalculator.tsx` & `src/lib/calculatorMath.ts`: Interactive grid ROI calculator demonstrating expected yields across volatility regimes.
- `src/components/SecurityArchitecture.tsx`: Architectural visualization of envelope encryption (AES-256-GCM + Cloud KMS), Goroutine supervisor isolation, and zero-trust auth.
- `src/components/PricingSection.tsx`: Tiered subscription comparison matrix (Free, Trader Pro, Quantitative Elite).
- `src/components/FaqSection.tsx`: Interactive FAQ accordion handling objections on API security, risk management, and latency.
- `src/instrumentation.ts` & `sentry.*.config.ts`: Sentry SDK integration with strict PII masking (`maskAllInputs`, `maskAllText`, `blockAllMedia`) across client, server, and edge runtimes.
- `src/app/global-error.tsx`: Global error boundary capturing uncaught render errors and transmitting to Sentry.
