export const samplingBudgets = [1, 2, 4, 8] as const;
export type NFE = (typeof samplingBudgets)[number];
export type Method = 'competitor' | 'pmd';
export const sampleNumbers = [1, 2, 3, 4] as const;

export function formatIndex(index: number): string {
  return String(index).padStart(2, '0');
}

export function nextPromptIndex(current: number, direction: -1 | 1, total: number): number {
  return (current + direction + total) % total;
}
