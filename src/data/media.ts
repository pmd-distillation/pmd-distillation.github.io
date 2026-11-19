import type { Method } from './gallery';
import type { CompetitorId } from './competitors';
import { greekCatComparisonMedia } from './greekcat-media';
import { skycatComparisonMedia } from './skycat-media';
import { foxEyeComparisonMedia } from './foxeye-media';
import { wazowskiComparisonMedia } from './wazowski-media';
import { dogComparisonMedia } from './dog-media';
import { tokyoComparisonMedia } from './tokyo-media';
import { travelerComparisonMedia } from './traveler-media';
import { robinComparisonMedia } from './robin-media';
import { jellyfishComparisonMedia } from './jellyfish-media';
import { wildflowersComparisonMedia } from './wildflowers-media';
import { observatoryComparisonMedia } from './observatory-media';
import { pearComparisonMedia } from './pear-media';
import { lighthouseComparisonMedia } from './lighthouse-media';
import { courtyardComparisonMedia } from './courtyard-media';

export type MediaAsset = { src?: string; alt: string };

// Add local media paths here when outputs are ready. Empty paths render icons.
export const featuredMedia: readonly (MediaAsset & { id: string })[] = [
  { id: 'landscape', alt: 'Featured wide landscape composition' },
  { id: 'portrait', alt: 'Featured portrait composition' },
  { id: 'horizon', alt: 'Featured horizontal composition' },
  { id: 'detail', alt: 'Featured square detail composition' },
  { id: 'still-life', alt: 'Featured still-life composition' },
  { id: 'study', alt: 'Featured square composition' },
  { id: 'scene', alt: 'Featured scene composition' },
];

type ComparisonSources = Partial<Record<string, {
  competitors: Partial<Record<CompetitorId, readonly string[]>>;
  pmd?: readonly string[];
}>>;

// Selected images in order, displayed four at a time.
// Grid tiles retain their source pixels; selected PNGs are copied byte-for-byte.
export const comparisonMedia: ComparisonSources = {
  '01': {
    competitors: {
      smd: [
        '/media/comparisons/cat/smd/cat_06.png',
        '/media/comparisons/cat/smd/cat_09.png',
        '/media/comparisons/cat/smd/cat_13.png',
        '/media/comparisons/cat/smd/cat_14.png',
        '/media/comparisons/cat/smd/cat_23.png',
        '/media/comparisons/cat/smd/cat_01.png',
        '/media/comparisons/cat/smd/cat_25.png',
        '/media/comparisons/cat/smd/cat_19.png',
        '/media/comparisons/cat/smd/cat_02.png',
        '/media/comparisons/cat/smd/cat_03.png',
        '/media/comparisons/cat/smd/cat_04.png',
        '/media/comparisons/cat/smd/cat_05.png',
        '/media/comparisons/cat/smd/cat_07.png',
        '/media/comparisons/cat/smd/cat_08.png',
        '/media/comparisons/cat/smd/cat_10.png',
        '/media/comparisons/cat/smd/cat_11.png',
      ],
      rtdmd: [
        '/media/comparisons/cat/rtdmd/cat_01.png',
        '/media/comparisons/cat/rtdmd/cat_02.png',
        '/media/comparisons/cat/rtdmd/cat_03.png',
        '/media/comparisons/cat/rtdmd/cat_04.png',
        '/media/comparisons/cat/rtdmd/cat_05.png',
        '/media/comparisons/cat/rtdmd/cat_06.png',
        '/media/comparisons/cat/rtdmd/cat_07.png',
        '/media/comparisons/cat/rtdmd/cat_08.png',
        '/media/comparisons/cat/rtdmd/cat_09.png',
        '/media/comparisons/cat/rtdmd/cat_10.png',
        '/media/comparisons/cat/rtdmd/cat_11.png',
        '/media/comparisons/cat/rtdmd/cat_12.png',
      ],
      'flux-klein-4': [
        '/media/comparisons/cat/klein-4step/cat_01.png',
        '/media/comparisons/cat/klein-4step/cat_02.png',
        '/media/comparisons/cat/klein-4step/cat_03.png',
        '/media/comparisons/cat/klein-4step/cat_04.png',
        '/media/comparisons/cat/klein-4step/cat_05.png',
        '/media/comparisons/cat/klein-4step/cat_06.png',
        '/media/comparisons/cat/klein-4step/cat_07.png',
        '/media/comparisons/cat/klein-4step/cat_08.png',
        '/media/comparisons/cat/klein-4step/cat_09.png',
        '/media/comparisons/cat/klein-4step/cat_10.png',
        '/media/comparisons/cat/klein-4step/cat_11.png',
        '/media/comparisons/cat/klein-4step/cat_12.png',
      ],
      'flux-klein-50x2': [
        '/media/comparisons/cat/klein-base-50x2/cat_02.png',
        '/media/comparisons/cat/klein-base-50x2/cat_06.png',
        '/media/comparisons/cat/klein-base-50x2/cat_10.png',
        '/media/comparisons/cat/klein-base-50x2/cat_14.png',
        '/media/comparisons/cat/klein-base-50x2/cat_01.png',
        '/media/comparisons/cat/klein-base-50x2/cat_03.png',
        '/media/comparisons/cat/klein-base-50x2/cat_04.png',
        '/media/comparisons/cat/klein-base-50x2/cat_05.png',
        '/media/comparisons/cat/klein-base-50x2/cat_07.png',
        '/media/comparisons/cat/klein-base-50x2/cat_08.png',
        '/media/comparisons/cat/klein-base-50x2/cat_09.png',
        '/media/comparisons/cat/klein-base-50x2/cat_11.png',
      ],
    },
    pmd: [
      '/media/comparisons/cat/pmd/cat_20.png',
      '/media/comparisons/cat/pmd/cat_19.png',
      '/media/comparisons/cat/pmd/cat_16.png',
      '/media/comparisons/cat/pmd/cat_06.png',
      '/media/comparisons/cat/pmd/cat_05.png',
      '/media/comparisons/cat/pmd/cat_04.png',
      '/media/comparisons/cat/pmd/cat_02.png',
      '/media/comparisons/cat/pmd/cat_14.png',
      '/media/comparisons/cat/pmd/appendix/cat_11.png',
      '/media/comparisons/cat/pmd/cat_03.png',
      '/media/comparisons/cat/pmd/cat_07.png',
      '/media/comparisons/cat/pmd/appendix/cat_14.png',
      '/media/comparisons/cat/pmd/appendix/cat_04.png',
      '/media/comparisons/cat/pmd/appendix/cat_10.png',
      '/media/comparisons/cat/pmd/appendix/cat_12.png',
      '/media/comparisons/cat/pmd/appendix/cat_05.png',
    ],
  },
  '02': dogComparisonMedia,
  '03': tokyoComparisonMedia,
  '04': travelerComparisonMedia,
  '05': robinComparisonMedia,
  '06': jellyfishComparisonMedia,
  '07': wazowskiComparisonMedia,
  '08': foxEyeComparisonMedia,
  '09': skycatComparisonMedia,
  '10': greekCatComparisonMedia,
  '11': wildflowersComparisonMedia,
  '12': observatoryComparisonMedia,
  '13': pearComparisonMedia,
  '14': lighthouseComparisonMedia,
  '15': courtyardComparisonMedia,
};
export const teaserMedia = {
  src: '/media/pmd_teaser_1080p60.mp4',
  poster: '/media/pmd_teaser_poster.jpg',
  width: 1920,
  height: 1080,
  duration: 71.133333,
} as const;

export function comparisonSource(promptId: string, competitor: CompetitorId, method: Method, sampleIndex: number) {
  const media = comparisonMedia[promptId];
  return method === 'pmd' ? media?.pmd?.[sampleIndex] : media?.competitors[competitor]?.[sampleIndex];
}

export function comparisonSampleCount(promptId: string, competitor: CompetitorId) {
  const media = comparisonMedia[promptId];
  return Math.min(
    media?.competitors[competitor]?.length ?? 0,
    media?.pmd?.length ?? 0,
  );
}
