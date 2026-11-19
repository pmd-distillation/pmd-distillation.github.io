import { competitors as fluxCompetitors, defaultCompetitor as fluxDefault } from './competitors';
import type { CompetitorId } from './competitors';
import type { Method } from './gallery';
import { comparisonSampleCount, comparisonSource } from './media';
import type { Prompt } from './prompts';

// The image gallery shows one base-model family at a time. Each family names its competitors, how many samples
// sit side by side, and where their images live. A missing source renders a placeholder tile.
export type FamilyId = 'flux2' | 'sdxl';

export type FamilyCompetitor = { id: string; label: string; rowLabel: string; detail?: string; folder?: string };

export type ModelFamily = {
  id: FamilyId;
  label: string;
  competitors: readonly FamilyCompetitor[];
  defaultCompetitor: FamilyCompetitor;
  samples: readonly number[];
  source: (promptId: string, competitorId: string, method: Method, index: number) => string | undefined;
  sampleCount: (promptId: string, competitorId: string) => number;
  // Prompt wording this family's images were generated with, when it differs from the shared prompt list.
  promptText?: Partial<Record<string, Pick<Prompt, 'summary' | 'full'>>>;
};

const flux2: ModelFamily = {
  id: 'flux2',
  label: 'FLUX.2',
  competitors: fluxCompetitors,
  defaultCompetitor: fluxDefault,
  samples: [1, 2, 3, 4],
  source: (promptId, competitorId, method, index) => comparisonSource(promptId, competitorId as CompetitorId, method, index),
  sampleCount: (promptId, competitorId) => comparisonSampleCount(promptId, competitorId as CompetitorId),
};

// SDXL Base 1.0 competitors: the paper's comparison set minus Moment Matching. Distilled models use 4 steps with
// their model cards' samplers (1024 px; SDXL-Turbo at its native 512 px). Seeds 0-3 for every method, the same
// 15 prompts as FLUX.2. Teacher = SDXL Base 1.0 with diffusers defaults (Euler, 50 steps, CFG 5.0, 1024 px).
const sdxlCompetitorList: readonly FamilyCompetitor[] = [
  { id: 'sdxl-euler', label: 'Teacher', rowLabel: 'Teacher', detail: '50×2', folder: 'teacher' },
  { id: 'sdxl-dmd2', label: 'DMD2', rowLabel: 'DMD2', detail: '4-step', folder: 'dmd2' },
  { id: 'sdxl-lightning', label: 'SDXL-Lightning', rowLabel: 'SDXL-Lightning', detail: '4-step', folder: 'sdxl_lightning' },
  { id: 'sdxl-flash', label: 'Flash', rowLabel: 'Flash', detail: '4-step', folder: 'flash' },
  { id: 'sdxl-pcm', label: 'PCM', rowLabel: 'PCM', detail: '4-step', folder: 'pcm' },
  { id: 'sdxl-lcm-lora', label: 'LCM-LoRA', rowLabel: 'LCM-LoRA', detail: '4-step', folder: 'lcm_lora' },
  { id: 'sdxl-turbo', label: 'SDXL-Turbo', rowLabel: 'SDXL-Turbo', detail: '4-step', folder: 'sdxl_turbo' },
];
const sdxlSeeds = [0, 1, 2, 3];
// Prompts with more than one batch of 4 get extra competitor seeds (seeds 0-11, three batches).
const twelveSeeds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sdxlSeedsByPrompt: Partial<Record<string, readonly number[]>> = {
  '03': twelveSeeds,  // Tokyo
  '04': twelveSeeds,  // Traveler
  '05': twelveSeeds,  // Robin (no-hat prompt)
  '09': [0, 1, 2, 3, 4, 5, 6, 7],  // Skydiving kitten: two batches
};
const sdxlFiles = (promptId: string) => (sdxlSeedsByPrompt[promptId] ?? sdxlSeeds).map(seed => `seed${seed}`);
// Hand-picked images for a method/prompt (file stems), keyed by image folder then prompt id; others use sdxlFiles.
// DMD2 cat: seeds 51/54/55/57 of a training run's iteration-0 EMA grid (= the DMD2 initialization, 4-step sampler).
const sdxlFileOverrides: Partial<Record<string, Partial<Record<string, readonly string[]>>>> = {
  dmd2: { '01': ['iter0_seed51', 'iter0_seed54', 'iter0_seed55', 'iter0_seed57'] },
};
// SDXL PMD picks per prompt (only listed prompts have PMD images; the rest stay placeholders).
// Cat: seeds 51/52/53/57 of the raw iteration-825 grid of the directional8_band_preserve_dmd2init run.
const sdxlPmdFiles: Partial<Record<string, readonly string[]>> = {
  '01': ['iter825_seed51', 'iter825_seed52', 'iter825_seed53', 'iter825_seed57'],
  // Dog: RAW iteration 1750 seed 57, then RAW iteration 1050 seeds 51/52/57 (prompt_01_seed_* in the same run).
  '02': ['iter1750_seed57', 'iter1050_seed51', 'iter1050_seed52', 'iter1050_seed57'],
  // Tokyo: checkpoint 5000 of the SDXL CGF-GAN directional run, three batches of four picked from seeds 51-75.
  '03': ['ckpt5000_seed52', 'ckpt5000_seed55', 'ckpt5000_seed60', 'ckpt5000_seed70',
         'ckpt5000_seed51', 'ckpt5000_seed53', 'ckpt5000_seed54', 'ckpt5000_seed59',
         'ckpt5000_seed61', 'ckpt5000_seed63', 'ckpt5000_seed66', 'ckpt5000_seed67'],
  // Traveler: same checkpoint 5000, three batches of four.
  '04': ['ckpt5000_seed55', 'ckpt5000_seed63', 'ckpt5000_seed67', 'ckpt5000_seed71',
         'ckpt5000_seed51', 'ckpt5000_seed54', 'ckpt5000_seed61', 'ckpt5000_seed62',
         'ckpt5000_seed69', 'ckpt5000_seed74', 'ckpt5000_seed75', 'ckpt5000_seed64'],
  // Robin (no-hat prompt): checkpoint 5000, one batch of four.
  '05': ['nohat_ckpt5000_seed51', 'nohat_ckpt5000_seed55', 'nohat_ckpt5000_seed69', 'nohat_ckpt5000_seed75'],
  // Corgi (replaces prompt 10 in SDXL): checkpoint 5000 corgi 4x4 render, seeds 58/63/66/53.
  '10': ['ckpt5000_seed58', 'ckpt5000_seed63', 'ckpt5000_seed66', 'ckpt5000_seed53'],
  // Skydiving kitten: same checkpoint 5000, two batches of four.
  '09': ['ckpt5000_seed56', 'ckpt5000_seed57', 'ckpt5000_seed61', 'ckpt5000_seed69',
         'ckpt5000_seed55', 'ckpt5000_seed70', 'ckpt5000_seed71', 'ckpt5000_seed72'],
  // Wazowski scribble, jellyfish, fox eye, wildflowers, observatory, pear, lighthouse, courtyard: checkpoint 5000,
  // one batch of four each.
  '07': ['ckpt5000_seed56', 'ckpt5000_seed61', 'ckpt5000_seed63', 'ckpt5000_seed71'],
  '06': ['ckpt5000_seed52', 'ckpt5000_seed56', 'ckpt5000_seed61', 'ckpt5000_seed70'],
  '08': ['ckpt5000_seed51', 'ckpt5000_seed58', 'ckpt5000_seed63', 'ckpt5000_seed68'],
  '11': ['ckpt5000_seed52', 'ckpt5000_seed59', 'ckpt5000_seed61', 'ckpt5000_seed72'],
  '12': ['ckpt5000_seed52', 'ckpt5000_seed57', 'ckpt5000_seed63', 'ckpt5000_seed71'],
  '13': ['ckpt5000_seed53', 'ckpt5000_seed65', 'ckpt5000_seed70', 'ckpt5000_seed72'],
  '14': ['ckpt5000_seed51', 'ckpt5000_seed63', 'ckpt5000_seed70', 'ckpt5000_seed75'],
  '15': ['ckpt5000_seed51', 'ckpt5000_seed61', 'ckpt5000_seed70', 'ckpt5000_seed74'],
};

function sdxlCompetitorFiles(promptId: string, competitorId: string) {
  const folder = sdxlCompetitorList.find(item => item.id === competitorId)?.folder;
  return folder ? { folder, files: sdxlFileOverrides[folder]?.[promptId] ?? sdxlFiles(promptId) } : undefined;
}

const sdxl: ModelFamily = {
  id: 'sdxl',
  label: 'SDXL',
  competitors: sdxlCompetitorList,
  defaultCompetitor: sdxlCompetitorList.find(item => item.id === 'sdxl-dmd2') ?? sdxlCompetitorList[0],
  samples: [1, 2, 3, 4],
  // SDXL models rarely drew the robin's hat, so the SDXL robin images use a prompt without one.
  promptText: {
    '05': {
      summary: 'A robin on a bare branch.',
      full: 'A small robin perched on a bare branch on a quiet day.',
    },
    // SDXL replaces prompt 10 (Greek statue) with the corgi; FLUX.2 keeps the statue.
    '10': {
      summary: 'A Welsh Corgi playing a drum kit.',
      full: 'A playful Welsh Corgi is energetically playing a drum kit.',
    },
  },
  source: (promptId, competitorId, method, index) => {
    if (method === 'pmd') {
      const file = sdxlPmdFiles[promptId]?.[index];
      return file ? `/media/comparisons-sdxl/pmd/${promptId}/${file}.webp` : undefined;
    }
    const competitor = sdxlCompetitorFiles(promptId, competitorId);
    const file = competitor?.files[index];
    return competitor && file ? `/media/comparisons-sdxl/${competitor.folder}/${promptId}/${file}.webp` : undefined;
  },
  // Batches follow the shorter of the two rows, as for FLUX.2; a row without PMD picks shows one batch.
  sampleCount: (promptId, competitorId) => {
    const competitor = sdxlCompetitorFiles(promptId, competitorId)?.files.length ?? sdxlSeeds.length;
    return Math.min(competitor, sdxlPmdFiles[promptId]?.length ?? competitor);
  },
};

export const families: readonly ModelFamily[] = [flux2, sdxl];
export const defaultFamily = sdxl;
