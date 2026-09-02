import { describe, it, expect } from 'vitest';
import { calculateGridRoi } from '../src/lib/calculatorMath';

describe('calculateGridRoi', () => {
  it('calculates realistic metrics for standard BTC Spot Grid', () => {
    const result = calculateGridRoi({
      investmentUsd: 2000,
      pair: 'BTCUSDT',
      lowerPrice: 80000,
      upperPrice: 96000,
      gridCount: 32,
    });

    expect(result.gridSpacingUsd).toBe(500);
    expect(result.profitPerGridPct).toBeGreaterThan(0.3);
    expect(result.estimatedDailyTrades).toBeGreaterThanOrEqual(1);
    expect(result.projectedAprPct).toBeGreaterThan(10);
    expect(result.projectedAprPct).toBeLessThan(150);
  });

  it('handles invalid inputs gracefully with zero results', () => {
    const result = calculateGridRoi({
      investmentUsd: 0,
      pair: 'BTCUSDT',
      lowerPrice: 90000,
      upperPrice: 80000, // upper <= lower
      gridCount: 0,
    });

    expect(result.projectedAprPct).toBe(0);
    expect(result.estimatedDailyProfitUsd).toBe(0);
  });
});
