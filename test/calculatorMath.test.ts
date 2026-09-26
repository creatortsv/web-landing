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
    expect(result.profitPerGridPct).toBe(0);
  });

  it('guarantees zero-NaN invariant under non-finite inputs', () => {
    const result = calculateGridRoi({
      investmentUsd: NaN,
      pair: 'BTCUSDT',
      lowerPrice: Infinity,
      upperPrice: 90000,
      gridCount: NaN,
    });

    expect(Number.isFinite(result.profitPerGridPct)).toBe(true);
    expect(Number.isFinite(result.projectedAprPct)).toBe(true);
    expect(Number.isFinite(result.estimatedDailyProfitUsd)).toBe(true);
    expect(result.projectedAprPct).toBe(0);
    expect(result.estimatedDailyProfitUsd).toBe(0);
  });
});
