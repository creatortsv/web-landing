export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'How does Venom Finance connect to my exchange accounts?',
    answer: 'Venom Finance connects via official exchange API keys (Binance, OKX, Bybit). We require only Read and Trade permissions. Your keys are encrypted with envelope encryption (AES-256-GCM) sealed with Cloud KMS master keys.',
  },
  {
    question: 'Can Venom Finance withdraw funds from my account?',
    answer: 'No. Venom Finance has a strict zero-withdrawal policy. Any API key registered with withdrawal permissions is automatically rejected during validation. Your funds remain 100% in your exchange account.',
  },
  {
    question: 'Can I test my bots without risking real money?',
    answer: 'Yes. Venom Finance natively supports Binance Testnet (testnet.binance.vision). You can connect a free testnet API key with 15,000 USDT demo balance to verify all bot behaviors directly against real exchange testnet order books.',
  },
  {
    question: 'What is the difference between Spot Grid and Infinity Grid?',
    answer: 'A Spot Grid operates within a fixed upper and lower price corridor. An Infinity Grid has no upper price ceiling; it fixes the base value of your held asset and continuously liquidates surplus profits as the market trends upward, preventing you from selling out too early.',
  },
  {
    question: 'What payment methods are supported for subscriptions?',
    answer: 'We support Web3 cryptocurrency transfers (USDT on TRC20, ERC20, Arbitrum, Solana) and standard fiat debit/credit cards via Stripe.',
  },
];
