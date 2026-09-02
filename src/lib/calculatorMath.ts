export interface GridCalculationInput {
  investmentUsd: number;
  pair: string;
  lowerPrice: number;
  upperPrice: number;
  gridCount: number;
}

export interface GridCalculationResult {
  profitPerGridPct: number;
  estimatedDailyTrades: number;
  estimatedDailyProfitUsd: number;
  projectedMonthlyProfitUsd: number;
  projectedAprPct: number;
  gridSpacingUsd: number;
}

const VOLATILITY_MAP: Record<string, number> = {
  'BTCUSDT': 0.038,
  'ETHUSDT': 0.052,
  'SOLUSDT': 0.078,
  'BNBUSDT': 0.042,
};

export function calculateGridRoi(input: GridCalculationInput): GridCalculationResult {
  const { investmentUsd, pair, lowerPrice, upperPrice, gridCount } = input;

  if (lowerPrice <= 0 || upperPrice <= lowerPrice || gridCount < 2 || investmentUsd <= 0) {
    return {
      profitPerGridPct: 0,
      estimatedDailyTrades: 0,
      estimatedDailyProfitUsd: 0,
      projectedMonthlyProfitUsd: 0,
      projectedAprPct: 0,
      gridSpacingUsd: 0,
    };
  }

  const gridSpacingUsd = (upperPrice - lowerPrice) / gridCount;
  const avgPrice = (lowerPrice + upperPrice) / 2;
  const grossProfitPerGridPct = (gridSpacingUsd / avgPrice) * 100;
  // Subtract 0.2% round-trip exchange fees (0.1% buy + 0.1% sell)
  const profitPerGridPct = Math.max(0.1, grossProfitPerGridPct - 0.2);

  const volatility = VOLATILITY_MAP[pair] || 0.045;
  // Approximate frequency of grid boundary crossings per day based on historical asset volatility
  const estimatedDailyTrades = Math.max(
    1,
    Math.round((volatility * 100) / Math.max(0.4, profitPerGridPct) * 1.5)
  );

  const capitalPerGrid = investmentUsd / gridCount;
  const estimatedDailyProfitUsd = capitalPerGrid * (profitPerGridPct / 100) * estimatedDailyTrades;
  const projectedMonthlyProfitUsd = estimatedDailyProfitUsd * 30;
  const projectedAprPct = (estimatedDailyProfitUsd * 365 / investmentUsd) * 100;

  return {
    profitPerGridPct: Number(profitPerGridPct.toFixed(2)),
    estimatedDailyTrades,
    estimatedDailyProfitUsd: Number(estimatedDailyProfitUsd.toFixed(2)),
    projectedMonthlyProfitUsd: Number(projectedMonthlyProfitUsd.toFixed(2)),
    projectedAprPct: Number(projectedAprPct.toFixed(1)),
    gridSpacingUsd: Number(gridSpacingUsd.toFixed(2)),
  };
}
