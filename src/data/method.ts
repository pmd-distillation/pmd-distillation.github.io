// Method explainer: the three X-thread clips stitched into one film. Duplicated bridge cards were removed, each chapter
// fades in from the page white, and the closing 'Results?' card of the last clip was cut.
export const methodMedia = {
  src: '/media/method/pmd_method_1080p60.mp4',
  poster: '/media/method/pmd_method_poster.jpg',
  width: 1920,
  height: 1080,
  duration: 93.066667,
} as const;

export type MethodChapter = { id: string; title: string; start: number };

export const methodChapters: readonly MethodChapter[] = [
  { id: 'motivation', title: 'Motivation', start: 0 },
  { id: 'tilt-shift', title: 'Tilt = Shift', start: 16.78 },
  { id: 'posterior-identification', title: 'Posterior Identification', start: 58.46 },
];
