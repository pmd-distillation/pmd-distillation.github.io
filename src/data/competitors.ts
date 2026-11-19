export type CompetitorId = 'smd' | 'rtdmd' | 'flux-klein-4' | 'flux-klein-50x2';

export type Competitor = {
  id: CompetitorId;
  label: string;
  rowLabel: string;
  detail?: string;
};

export const competitors: readonly Competitor[] = [
  { id: 'flux-klein-50x2', label: 'FLUX.2 [klein] 50×2', rowLabel: 'FLUX.2 [klein]', detail: '50×2' },
  { id: 'flux-klein-4', label: 'FLUX.2 [klein] 4-step', rowLabel: 'FLUX.2 [klein]', detail: '4-step' },
  { id: 'rtdmd', label: 'RTDMD', rowLabel: 'RTDMD' },
  { id: 'smd', label: 'SMD', rowLabel: 'SMD', detail: '4-step' },
];

export const defaultCompetitor = competitors.find(competitor => competitor.id === 'smd') ?? competitors[0];
