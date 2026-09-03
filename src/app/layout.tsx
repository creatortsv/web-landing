import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { FAQS } from '@/lib/faqData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Venom Finance — Institutional Algorithmic Cryptocurrency Trading',
  description:
    'Automate Spot Grid, Infinity Trend, and 50x Leveraged Futures trading directly on Binance Live & Testnet, OKX, and Bybit with zero custody and Cloud KMS envelope encryption.',
  keywords: [
    'crypto trading bot',
    'algorithmic trading',
    'binance testnet grid bot',
    'binance spot grid',
    'infinity grid bot',
    'futures trading bot',
    'non-custodial trading',
    'open telemetry crypto trading',
  ],
  authors: [{ name: 'Venom Finance Quant Engineering' }],
  metadataBase: new URL('https://venom.finance'),
  openGraph: {
    title: 'Venom Finance — Institutional Algorithmic Cryptocurrency Trading',
    description:
      'High-volatility algorithmic trading engine with zero custody, envelope encryption, and real-time Binance Testnet simulation.',
    url: 'https://venom.finance',
    siteName: 'Venom Finance',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venom Finance — Institutional Algorithmic Cryptocurrency Trading',
    description:
      'Automated crypto grid trading with zero custody. Deploy Spot, Infinity, and 50x Futures bots on Binance Testnet & Live.',
  },
};

const extensionErrorSuppressor = `(function() {
  function isExtensionError(msg, src, err) {
    var str = String(msg || '') + ' ' + String(src || '') + ' ' + (err && err.stack ? String(err.stack) : '');
    return str.indexOf('chrome-extension://') !== -1 ||
           str.indexOf('moz-extension://') !== -1 ||
           str.indexOf('safari-extension://') !== -1 ||
           str.indexOf('registerSolanaInjectedWallet') !== -1 ||
           str.indexOf('initSolanaConnect') !== -1 ||
           str.indexOf('solana.js') !== -1 ||
           str.indexOf('extensionPageScript') !== -1 ||
           str.indexOf('bybit') !== -1;
  }
  window.addEventListener('error', function(e) {
    if (isExtensionError(e.message, e.filename, e.error)) {
      e.stopImmediatePropagation();
      e.preventDefault();
      return true;
    }
  }, true);
  window.addEventListener('unhandledrejection', function(e) {
    var reason = e.reason;
    var str = reason ? (reason.stack || reason.message || String(reason)) : '';
    if (isExtensionError(str, '', reason)) {
      e.stopImmediatePropagation();
      e.preventDefault();
      return true;
    }
  }, true);
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Venom Finance',
    url: 'https://venom.finance',
    description: 'Institutional algorithmic cryptocurrency trading platform with zero custody and Cloud KMS envelope encryption.',
  };

  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Venom Finance Trading Platform',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Cloud, Web',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '79',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
    },
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          id="extension-error-suppressor"
          dangerouslySetInnerHTML={{ __html: extensionErrorSuppressor }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body
        className="min-h-screen bg-[#070A12] text-slate-100 font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-300"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
