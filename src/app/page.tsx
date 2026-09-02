import * as React from 'react';
import { LiveTickerBar } from '@/components/LiveTickerBar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StrategyShowcase } from '@/components/StrategyShowcase';
import { GridRoiCalculator } from '@/components/GridRoiCalculator';
import { SecurityArchitecture } from '@/components/SecurityArchitecture';
import { PricingSection } from '@/components/PricingSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#090D16]">
      <LiveTickerBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <StrategyShowcase />
        <GridRoiCalculator />
        <SecurityArchitecture />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
